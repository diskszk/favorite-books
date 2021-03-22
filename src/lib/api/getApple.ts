import axios from 'axios';

type Res = {
  hoge: string;
};

export const getApple = async (): Promise<string> => {
  const url = 'http://localhost:8000/api/hello';
  const res = await axios.get<Res>(url);

  console.log(res.data.hoge);

  // const data = await res.

  return res.data.hoge;
};
