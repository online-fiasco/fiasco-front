import axios from 'axios';

export const getPlaysets = async (): Promise<Playset[]> => {
  const res = await axios.get(`${process.env.REACT_APP_API_ROOT_URI}/v1/playset`);

  return res.data.result;
};
