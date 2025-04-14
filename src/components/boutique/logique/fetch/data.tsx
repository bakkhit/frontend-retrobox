import { String } from "@/_types/string_type";

const BACK_URL = process.env.NEXT_PUBLIC_BACKEND_WEBSITE_URL;
const BACK_VERSION = process.env.NEXT_PUBLIC_BACKEND_VERSION;

interface DataProps {
  src: String;
}

export const fetchFilterData = async ({ src }: DataProps) => {
  try {
    const response = await fetch(`${BACK_URL}/api/${BACK_VERSION}/${src}`);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();

    return data;
  } catch (error) {
    console.error("Error fetching games:", error);
    throw error;
  }
};
