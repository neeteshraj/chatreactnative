import React, {FC} from 'react';
import {
  StyleSheet,
  Image,
  View,
  SafeAreaView,
  ImageBackground,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

//CUSTOM IMPORTS
import BACKGROUND from '../../assets/images/chat-back.png';
import WELCOMELOGO from '../../assets/logo/welcome-logo.png';
import Button from '../../components/Button/Button';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

interface IProps {
  navigation: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Welcome
 **/

const Welcome: FC<IProps> = () => {
  const {container, logo, imageBackground, buttonsContainer, bgContainer} =
    styles;
  const navigation = useNavigation();
  const handleNavigation = () => {
    navigation.navigate('Login');
  };
  const handleRegisterNavigation = () => {
    navigation.navigate('Register', {});
  };

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={BACKGROUND} style={imageBackground}>
        <View style={bgContainer}>
          <Image source={WELCOMELOGO} style={logo} />
        </View>
        <View style={buttonsContainer}>
          <Button text="Login" onPress={handleNavigation} />
          <Button text="SignUp" onPress={handleRegisterNavigation} />
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: WIDTH,
    height: HEIGHT,
  },
  imageBackground: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo: {
    height: HEIGHT * 0.3,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  bgContainer: {
    alignItems: 'center',
  },
  buttonsContainer: {
    marginTop: 10,
    justifyContent: 'space-around',
    height: HEIGHT * 0.17,
  },
});

export default Welcome;
