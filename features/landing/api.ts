export const fetchCompanyCards = async () => {
  const response = await fetch(
    `https://67ae22f99e85da2f020c8b73.mockapi.io/registration`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Cards`);
  }
  return response.json();
};
