'use server';
import { revalidatePath } from 'next/cache';

export const searchActions = () => {
  revalidatePath('/');
};
