// FishIndexServices.ts

import { apiBase } from '../config';
import { IFishIndex } from '../interfaces/IFish';

export async function doGetFishIndexes(): Promise<{ error: string | null; result: IFishIndex[] | null }> {
  try {
    const response = await fetch(`${apiBase}/api/fishIndex`);
    const data = await response.json();
    console.log(data);

    if (response.ok && data.success) {
      return { error: null, result: data.data };
    } else {
      return { error: data.message || 'Failed to fetch fish indexes', result: null };
    }
  } catch (error) {
    return { error: 'An unexpected error occurred', result: null };
  }
}