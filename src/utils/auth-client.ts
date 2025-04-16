import { adminClient } from "better-auth/client/plugins";
import { createAuthClient } from "better-auth/react";

const SERVER_SIDE_URL = process.env.NEXT_PUBLIC_SERVER_SIDE_URL;

export const authClient = createAuthClient({
  /** the base url of the server (optional if you're using the same domain) */
  baseURL: SERVER_SIDE_URL,
  plugins: [adminClient()],
});
