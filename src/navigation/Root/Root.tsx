import React, {FC} from 'react';
import StackNav from '../Stack/StackNav';
import {NavigationContainer} from '@react-navigation/native';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @RootNav
 **/

const RootNav: FC<IProps> = () => {
  return (
    <NavigationContainer>
      <StackNav />
    </NavigationContainer>
  );
};

export default RootNav;
