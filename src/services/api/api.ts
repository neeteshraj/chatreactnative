import axios from 'axios';
const getUser = async () => {
  try {
    const response = await axios.get(
      'https://evening-anchorage-59874.herokuapp.com/users',
    );
    return response.data;
  } catch (error) {
    console.log('Error while fetching data =>', error);
  }
};

const loginApi = async (email: string, password: string) => {
  try {
    const response = await axios.post(
      'https://evening-anchorage-59874.herokuapp.com/login',
      {
        email,
        password,
      },
    );
    return response.data;
  } catch (error) {
    console.log('Error while logging in => ', error);
  }
};

export {getUser, loginApi};
