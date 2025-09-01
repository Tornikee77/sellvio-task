export const fetchCompanyCards = async ({ dataName }: { dataName: string }) => {
  const response = await fetch(
    `https://68b5a9b1e5dc090291afd5d3.mockapi.io/${dataName}`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch Cards`);
  }
  return response.json();
};
