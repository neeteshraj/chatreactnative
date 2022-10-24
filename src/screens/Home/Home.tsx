import React, {FC} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';
import {authToken} from '../../redux/features/authSlice';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Home
 **/

const Home: FC<IProps> = () => {
  const {container} = styles;
  const token = useSelector(authToken);
  console.log('token =>', token);
  return (
    <View style={container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default Home;
