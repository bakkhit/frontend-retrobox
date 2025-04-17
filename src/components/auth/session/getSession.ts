const BACK_URL = process.env.NEXT_PUBLIC_BACKEND_WEBSITE_URL;

export const getSession = async () => {
  try {
    const res = await fetch(`${BACK_URL}/api/auth/get-session`, {
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const session = await res.json();
    console.log(session);
    return session;
  } catch (error) {
    console.error(error);
  }
};
