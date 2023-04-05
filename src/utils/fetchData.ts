const HOST = 'http://localhost:3000';

export const fetchData = async (url: string) => {
  try {
    const response = await fetch(`${HOST}/api/v1/parsedhtml?url=${url}`);
    if (!response.ok) {
      throw new Error(`Request failed with status ${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error(error);
    return null;
  }
}