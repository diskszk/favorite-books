export const getApple = async (): Promise<string> => {
  const res = await fetch('http://localhost:8000/api/hello', { method: 'GET' });
  const data = await res.json();

  return data.data;
};
