// AuthContext.tsx

import { IUserDetails, IUserSignup } from "../interfaces/IUser";
import { createContext, useEffect, useState } from "react";
import { doSignIn, doSignUp, fetchUserDetails, removeToken } from "../services/UserServices";

interface AuthContextType {
  userDetails: IUserDetails | undefined;
  signIn: (email: string, password: string) => Promise<{ error: string | null }>;
  signUp: (userData: IUserSignup) => Promise<{ error: string | null }>;
  signOut: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export default function AuthProvider({ children }: { children: React.ReactNode }) {
  const [userDetails, setUserDetails] = useState<IUserDetails | undefined>(undefined);

  useEffect(() => {
    const loadUserDetails = async () => {
      const { error, result } = await fetchUserDetails();
      if (error) {
        setUserDetails(undefined);
      } else {
        setUserDetails(result); 
      }
    };
    loadUserDetails();
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    const { error, result } = await doSignIn(email, password);

    if (error) {
      console.error("Sign-in error:", error);
      await signOut(); // Clear token if error occurs
      return { error };
    }

    if (result && result._id) {  
      setUserDetails(result);  
      return { error: null };
    }

    return { error: "Error fetching user details after sign-in" };
  };

  const signUp = async (userData: IUserSignup): Promise<{ error: string | null }> => {
    // const { error, result } = await doSignUp(userData);
    const { error} = await doSignUp(userData);

    if (error) {
      return { error };
    }

    // TODO - Should I log in immidiatly after succesful sign-up?
    
    return { error: null };
  };

  const signOut = async () => {
    await removeToken();
    setUserDetails(undefined);
  };

  return (
    <AuthContext.Provider value={{ userDetails, signIn, signOut, signUp }}>
      {children}
    </AuthContext.Provider>
  );
}
