import { groq } from 'next-sanity';

export const settingsQuery = groq`*[_type == "settings"][0]`;

export interface Settings {
  title?: string;
  description?: any[];
  ogImage?: {
    title?: string;
  };
}
