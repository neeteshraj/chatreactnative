import axios from 'axios';

const getUser = async () => {
  try {
    const response = await axios.get('http://10.0.2.2:3000/users');
    return response.data;
  } catch (error) {
    console.log('Error while fetching data => ', error);
  }
};

export default getUser;
