import React, {FC, useState} from 'react';
import {
  View,
  StyleSheet,
  SafeAreaView,
  ImageBackground,
  Image,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {Text} from 'react-native-paper';

//CUSTOM IMPORTS
import BACKGROUND from '../../assets/images/chat-back.png';
import WELCOMELOGO from '../../assets/logo/logo-nobg.png';
import Button from '../../components/Button/Button';
import FormInput from '../../components/TextInput/TextInput';
import COLORS from '../../constants/colors/colors';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Login
 **/

const Login: FC<IProps> = () => {
  const {
    container,
    backgroundImg,
    logo,
    bgContainer,
    loginSection,
    h1,
    small,
    head1,
    head2,
    fieldContainer,
    dontHaveTextStyle,
    registerTextStyle,
    forgotPassword,
    buttonStyle,
    loginButtonContainer,
  } = styles;
  const [inputs, setInputs] = useState({email: '', password: ''});
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });

  const validate = async () => {
    Keyboard.dismiss();
    let isValid = true;
    if (!inputs.email) {
      handleError('Please input email', 'email');
      isValid = false;
    }
    if (!inputs.password) {
      handleError('Please input password', 'password');
      isValid = false;
    }
    if (isValid) {
      login();
    }
  };

  const login = () => {
    console.log('Login success');
  };

  const handleOnchange = (text: any, input: any) => {
    setInputs(prevState => ({...prevState, [input]: text}));
  };

  const handleError = (error: any, input: any) => {
    setErrors(prevState => ({...prevState, [input]: error}));
  };

  return (
    <SafeAreaView style={container}>
      <ImageBackground style={backgroundImg} source={BACKGROUND}>
        <View style={bgContainer}>
          <Image source={WELCOMELOGO} style={logo} />
          <Text style={h1}>TALK-A-TIVE Inc.</Text>
          <Text style={small}>Let's chat</Text>
        </View>
        <View style={loginSection}>
          <Text style={head1}>Login</Text>
          <Text style={head2}>Sign in to continue</Text>

          <View style={fieldContainer}>
            <FormInput
              onChangeText={text => handleOnchange(text, 'email')}
              onFocus={() => handleError(null, 'email')}
              iconName="email-outline"
              label="Email"
              placeholder="Enter your email address"
              placeholderTextColor={COLORS.grey}
              error={errors.email}
            />
            <FormInput
              onChangeText={text => handleOnchange(text, 'password')}
              onFocus={() => handleError(null, 'password')}
              iconName="lock-outline"
              label="Password"
              placeholder="Enter your password"
              placeholderTextColor={COLORS.grey}
              error={errors.password}
              password
            />
            <View style={loginButtonContainer}>
              <Button
                text="Log In"
                onPress={validate}
                style={{width: WIDTH * 0.45}}
              />
            </View>
            <View style={forgotPassword}>
              <Text
                onPress={() => console.log('Register')}
                style={dontHaveTextStyle}>
                Don't have account ?
              </Text>
              <TouchableOpacity style={buttonStyle}>
                <Text style={registerTextStyle}>Register</Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </ImageBackground>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImg: {
    position: 'absolute',
    width: WIDTH,
    height: HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  bgContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    height: HEIGHT * 0.35,
  },
  logo: {
    height: HEIGHT * 0.23,
    aspectRatio: 1,
    resizeMode: 'contain',
  },
  loginSection: {
    borderTopRightRadius: 30,
    borderTopLeftRadius: 30,
    backgroundColor: COLORS.white,
    width: WIDTH,
    height: HEIGHT * 0.65,
    padding: 20,
  },
  h1: {
    fontSize: 25,
    fontWeight: 'bold',
    color: COLORS.white,
  },
  small: {
    fontSize: 20,
    color: COLORS.white,
  },
  head1: {
    fontSize: 30,
    color: COLORS.black,
    textAlign: 'center',
    marginTop: 10,
    fontWeight: 'bold',
    letterSpacing: 0.5,
  },
  head2: {
    fontSize: 15,
    color: COLORS.black,
    textAlign: 'center',
  },
  fieldContainer: {marginVertical: 20},
  dontHaveTextStyle: {
    marginTop: 20,
    color: COLORS.grey,
    textAlign: 'center',
    fontSize: 12,
  },
  registerTextStyle: {
    marginTop: 20,
    color: COLORS.buttonBackground,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotPassword: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginLeft: 5,
  },
  loginButtonContainer: {
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Login;
