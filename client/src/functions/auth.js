import axios from "axios";
export const createOrUpdateUser = async (authtoken) => {
  console.log(authtoken);
  const data = await axios.post(
    `${process.env.REACT_APP_URL}/create-or-update-user`,
    {},
    {
      headers: {
        authtoken: authtoken,
      },
    }
  );
  return data;
};
