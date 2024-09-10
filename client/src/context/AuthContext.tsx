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
      console.log("Fetching user details...");
      const { error, result } = await fetchUserDetails();
      if (error) {
        console.log("Error fetching user details:", error);
        setUserDetails(undefined);
      } else {
        console.log("User details fetched successfully:", result);
        setUserDetails(result?.data);  // Ensure we set the correct data part
      }
    };
    loadUserDetails();
  }, []);

  const signIn = async (email: string, password: string): Promise<{ error: string | null }> => {
    console.log("Signing in with email:", email);
    const { error, result } = await doSignIn(email, password);

    if (error) {
      console.log("Sign-in error:", error);
      await signOut(); // Clear token if error occurs
      return { error };
    }

    if (result && result._id) {  // Ensure result contains the user details
      console.log("Sign-in successful. User details:", result);
      setUserDetails(result);  // Set the user details correctly
      return { error: null };
    }

    return { error: "Error fetching user details after sign-in" };
  };

  const signUp = async (userData: IUserSignup): Promise<{ error: string | null }> => {
    const { error, result } = await doSignUp(userData);

    if (error) {
      return { error };
    }

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
