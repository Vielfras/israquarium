// FishServices.ts

import { apiBase } from "../config";
import { IFish } from "../interfaces/IFish";
import { getToken } from "./UserServices";

// ---------------------------------------------------------------------------------------------------------
export const doGetRandomFish = async (): Promise<{ error: string | null; result: IFish | null }> => {
  try {
    const response = await fetch(`${apiBase}/api/fish/random`, { method: 'GET' });
    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to fetch random fish', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doGetFishByIndexAndLetter = async (indexId: string, letter: string): Promise<{ error: string | null; result: IFish[] | null }> => {
  try {
    const response = await fetch(`${apiBase}/api/fish?index=${indexId}&letter=${letter}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });
    
    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to fetch fish for this index and letter', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doGetFishById = async (fishId: string): Promise<{ error: string | null; result: IFish | null }> => {
  try {
    const response = await fetch(`${apiBase}/api/fish/${fishId}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || `Failed to fetch fish by ID ${fishId}`, result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doGetFishImage = async (fishId: string, imageName: string): Promise<{ error: string | null; result: string | null }> => {
  try {
    const response = await fetch(`${apiBase}/api/fish/image/${fishId}/${imageName}`, {
      method: 'GET',
    });

    if (!response.ok) {
      return { error: `Failed to fetch image ${imageName} for fish ${fishId}`, result: null };
    }

    return { error: null, result: response.url };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doCreateFish = async (fishData: IFish): Promise<{ error: string | null; result: IFish | null }> => {
  try {
    const token = await getToken();
    if (!token) {
      return { error: 'Authentication required. No token found.', result: null };
    }

    const response = await fetch(`${apiBase}/api/fish`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify(fishData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to create fish', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doUpdateFish = async (fishId: string, fishData: IFish): Promise<{ error: string | null; result: IFish | null }> => {
  try {
    const token = await getToken();
    if (!token) {
      return { error: 'Authentication required. No token found.', result: null };
    }

    const response = await fetch(`${apiBase}/api/fish/${fishId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify(fishData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to update fish', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doDeleteFish = async (fishId: string): Promise<{ error: string | null; result: string | null }> => {
  try {
    const token = await getToken();
    if (!token) {
      return { error: 'Authentication required. No token found.', result: null };
    }

    const response = await fetch(`${apiBase}/api/fish/${fishId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to delete fish', result: null };
    }

    return { error: null, result: data.deleted };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doToggleFishLike = async (fishId: string): Promise<{ error: string | null }> => {
  const token = await getToken();
  if (!token) {
    return { error: 'Authentication required. No token found.' };
  }

  try {
    const response = await fetch(`${apiBase}/api/fish/${fishId}`, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    });

    if (!response.ok) {
      const data = await response.json();
      return { error: data.message || 'Failed to toggle fish like' };
    }

    return { error: null };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doSubmitFishReport = async (
  fishId: string,
  reason: string,
  message: string
): Promise<{ error: string | null }> => {
  const token = await getToken();
  if (!token) {
    return { error: `Can't read token from local storage` };
  }

  try {
    const response = await fetch(`${apiBase}/api/reports`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify({
        fishId,
        reason,
        message,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      return { error: data.message || 'Report submission failed' };
    }

    return { error: null };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: `Error submitting report (${errMessage})` };
  }
};