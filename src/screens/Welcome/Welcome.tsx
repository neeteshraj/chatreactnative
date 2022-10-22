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
import {StackNavigationProp} from '@react-navigation/stack';
import {RootStackParamList} from '../../navigation/Stack/StackNav';
import colors from '../../constants/colors/colors';

interface IProps {
  navigation: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Welcome
 **/

type welcomeScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

const Welcome: FC<IProps> = () => {
  const {
    container,
    logo,
    imageBackground,
    buttonsContainer,
    bgContainer,
    buttonPropsStyle,
  } = styles;
  const navigation = useNavigation<welcomeScreenProp>();

  return (
    <SafeAreaView style={container}>
      <ImageBackground source={BACKGROUND} style={imageBackground}>
        <View style={bgContainer}>
          <Image source={WELCOMELOGO} style={logo} />
        </View>
        <View style={buttonsContainer}>
          <Button
            text="Login"
            style={buttonPropsStyle}
            onPress={() => navigation.navigate('Login')}
            icon=""
          />
          <Button
            style={buttonPropsStyle}
            text="SignUp"
            onPress={() => navigation.navigate('Register')}
            icon=""
          />
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
  buttonPropsStyle: {
    width: WIDTH * 0.45,
    borderRadius: 5,
    backgroundColor: colors.buttonBackground,
  },
});

export default Welcome;
