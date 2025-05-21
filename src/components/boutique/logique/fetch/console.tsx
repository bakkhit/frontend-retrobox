import { useConsoleStore } from "@/context/Consoles.data";

const BACK_URL = process.env.NEXT_PUBLIC_BACKEND_WEBSITE_URL;
const BACK_VERSION = process.env.NEXT_PUBLIC_BACKEND_VERSION;

export const fetch_consoles = async (setConsole: (data: any) => void) => {
  try {
    const res = await fetch(`${BACK_URL}/api/${BACK_VERSION}/consoles`);
    const json = await res.json();
    setConsole(json); // ✅ Stocker ici
    console.log("Consoles fetched:", json);
  } catch (error) {
    console.error(error);
  }
};
