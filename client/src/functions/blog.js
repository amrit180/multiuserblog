import axios from "axios";

export const createBlog = async (values, authtoken) => {
  const data = await axios.post(
    `${process.env.REACT_APP_URL}/createblog`,
    values,
    {
      headers: {
        authtoken: authtoken,
      },
    }
  );
  return data;
};
