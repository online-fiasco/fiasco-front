import axios from 'axios';

export const getPlaysets = async (keyword?: string): Promise<Playset[]> => {
  const res = await axios.get(
    `${process.env.REACT_APP_API_ROOT_URI}/v1/playset`,
    {
      params: {
        keyword
      }
    }
  );

  return res.data.result;
};
