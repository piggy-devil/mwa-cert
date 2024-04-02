export const getUserByToken = async (token: string) => {
  try {
    const response = await fetch(`${process.env.BACKEND_API}/users/me`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        authorization: `Bearer ${token}`,
      },
    });

    return await response.json();
  } catch (error) {
    return error;
  }
};
