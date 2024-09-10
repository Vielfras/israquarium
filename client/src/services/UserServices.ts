import { IUserDetails, IUserSignup } from '../interfaces/IUser';
import { apiBase } from '../config';

export const doSignIn = async (email: string, password: string): Promise<{ error: string | null, result?: IUserDetails | undefined }> => {
  try {
    const response = await fetch(`${apiBase}/api/users/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password })
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || 'Login failed' };
    }

    console.log("Server response:", data);
    await saveToken(data.token);

    // Fetch user details after logging in using the token
    const { error, result } = await fetchUserDetails();
    if (error) {
      return { error };
    }

    return { error: null, result: result?.data };  // Access the 'data' field
  }
  catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage };
  }
};


export const doSignUp = async (userData: IUserSignup): Promise<{ error: string | undefined }> => {
  try {
    const response = await fetch(`${apiBase}/api/users`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(userData)
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message };
    }

    return { error: undefined };
  }
  catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage };
  }
};

const saveToken = async (token: string): Promise<void> => {
  localStorage.setItem('israquariumAuthToken', token);
};

export const removeToken = async (): Promise<void> => {
  localStorage.removeItem('israquariumAuthToken');
};

export const getToken = async (): Promise<string | null> => {
  const token = localStorage.getItem('israquariumAuthToken');
  return token ? token : null;
};

export const fetchUserDetails = async (): Promise<{ error: string | null, result?: IUserDetails | undefined }> => {
  const token = await getToken();
  if (!token) {
    return { error: `Can't read token from local storage` };
  }

  try {
    const response = await fetch(`${apiBase}/api/users/me`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token
      }
    });

    if (!response.ok) {
      return { error: `Error fetching the user's details (${response.statusText})` };
    }

    const data = await response.json();
    console.log("Fetched user details:", data);

    return { error: null, result: data };  // No need to change structure here, the caller will handle it
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: `Error fetching the user's details (${errMessage})` };
  }
};
