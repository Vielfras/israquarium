// PlantServices.ts

import { apiBase } from "../config";
import { IPlant } from "../interfaces/IPlant";
import { getToken } from "./UserServices";

// ---------------------------------------------------------------------------------------------------------
export const doGetRandomPlant = async (): Promise<{ error: string | null; result: IPlant | null }> => {
  try {
    const response = await fetch(`${apiBase}/api/plant`, { method: 'GET' });
    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to fetch random plant', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doGetPlantById = async (plantId: string, lang: string): Promise<{ error: string | null; result: IPlant | null }> => {
  try {
    // Use GET method and pass `lang` as a query parameter
    const response = await fetch(`${apiBase}/api/plant/${plantId}?lang=${lang}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || `Failed to fetch plant by ID ${plantId}`, result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};


// ---------------------------------------------------------------------------------------------------------
export const doGetPlantImage = async (plantId: string, imageName: string): Promise<{ error: string | null; result: string | null }> => {
  try {
    const response = await fetch(`${apiBase}/api/plant/image/${plantId}/${imageName}`, {
      method: 'GET',
    });

    if (!response.ok) {
      return { error: `Failed to fetch image ${imageName} for plant ${plantId}`, result: null };
    }

    return { error: null, result: response.url };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doCreatePlant = async (plantData: IPlant): Promise<{ error: string | null; result: IPlant | null }> => {
  try {
    const token = await getToken();
    if (!token) {
      return { error: 'Authentication required. No token found.', result: null };
    }

    const response = await fetch(`${apiBase}/api/plant`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify(plantData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to create plant', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doUpdatePlant = async (plantId: string, plantData: IPlant): Promise<{ error: string | null; result: IPlant | null }> => {
  try {
    const token = await getToken();
    if (!token) {
      return { error: 'Authentication required. No token found.', result: null };
    }

    const response = await fetch(`${apiBase}/api/plant/${plantId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
      body: JSON.stringify(plantData),
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to update plant', result: null };
    }

    return { error: null, result: data.data };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doGetPlantsByLetter = async (letter: string): Promise<{ error: string | null; result: IPlant[] | null }> => {
    try {
      const response = await fetch(`${apiBase}/api/plant?letter=${letter}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      const data = await response.json();
  
      if (!response.ok || !data.success) {
        return { error: data.message || `Failed to fetch plants starting with letter ${letter}`, result: null };
      }
  
      return { error: null, result: data.data };
    } catch (err) {
      const errMessage = (err as Error).message;
      return { error: errMessage, result: null };
    }
  };

// ---------------------------------------------------------------------------------------------------------
export const doDeletePlant = async (plantId: string): Promise<{ error: string | null; result: string | null }> => {
  try {
    const token = await getToken();
    if (!token) {
      return { error: 'Authentication required. No token found.', result: null };
    }

    const response = await fetch(`${apiBase}/api/plant/${plantId}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        'x-auth-token': token,
      },
    });

    const data = await response.json();

    if (!response.ok || !data.success) {
      return { error: data.message || 'Failed to delete plant', result: null };
    }

    return { error: null, result: data.deleted };
  } catch (err) {
    const errMessage = (err as Error).message;
    return { error: errMessage, result: null };
  }
};

// ---------------------------------------------------------------------------------------------------------
export const doSubmitPlantReport = async (plantId: string,
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
        plantId,
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

