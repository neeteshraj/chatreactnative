import axios from 'axios';
import {Platform} from 'react-native';
const getUser = async () => {
  if (Platform.OS === 'ios') {
    try {
      const response = await axios.get('http://localhost:3000/users');
      return response.data;
    } catch (error) {
      console.log('Error while fetching data =>', error);
    }
  }

  if (Platform.OS === 'android') {
    try {
      const response = await axios.get('http://10.0.2.2:3000/users');
      return response.data;
    } catch (error) {
      console.log('Error while fetching data => ', error);
    }
  }
};

const loginApi = async (email: string, password: string) => {
  if (Platform.OS === 'ios') {
    try {
      const response = await axios.post('http://localhost:3000/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log('Error while logging in =>', error);
    }
  }
  if (Platform.OS === 'android') {
    try {
      const response = await axios.post('http://10.0.2.2:3000/login', {
        email,
        password,
      });
      return response.data;
    } catch (error) {
      console.log('Error while logging in => ', error);
    }
  }
};

export {getUser, loginApi};
