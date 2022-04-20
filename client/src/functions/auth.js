import axios from "axios";
export const createOrUpdateUser = async (authtoken) => {
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

export const currentUser = async (authtoken) => {
  const data = await axios.post(
    `${process.env.REACT_APP_URL}/current-user`,
    {},
    {
      headers: {
        authtoken: authtoken,
      },
    }
  );
  return data;
};
