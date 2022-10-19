import React, {FC} from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Provider as PaperProvider} from 'react-native-paper';

import {useSelector} from 'react-redux';
import {selectUser} from './redux/features/userSlice';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Root
 **/

const Root: FC<IProps> = () => {
  const {container, buttonStyle} = styles;
  const userList = useSelector(selectUser);
  const handlePress = () => {
    console.log('test');
    userList && console.log(userList);
  };
  return (
    <PaperProvider>
      <View style={container}>
        <TouchableOpacity style={buttonStyle} onPress={handlePress}>
          <Text>Root</Text>
        </TouchableOpacity>
      </View>
    </PaperProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonStyle: {
    backgroundColor: 'red',
    padding: 10,
    borderRadius: 5,
    elevation: 5,
  },
});

export default Root;
