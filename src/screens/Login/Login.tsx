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
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';

//CUSTOM IMPORTS
import BACKGROUND from '../../assets/images/chat-back.png';
import WELCOMELOGO from '../../assets/logo/logo-nobg.png';
import Button from '../../components/Button/Button';
import FormInput from '../../components/TextInput/TextInput';
import COLORS from '../../constants/colors/colors';
import {HEIGHT, WIDTH} from '../../utils/Dimensions';
import {RootStackParamList} from '../../navigation/Stack/StackNav';
import {loginApi} from '../../services/api/api';
import {setToken} from '../../redux/features/authSlice';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface IProps {}

/**
 * @author Nitesh Raj Khanal
 * @function @Login
 **/

type loginScreenProp = StackNavigationProp<RootStackParamList, 'Welcome'>;

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
    forgotPasswordContainer,
    forgotPasswordText,
    forgotPassword,
    buttonStyle,
    loginButtonContainer,
    socialSignInContainer,
    buttonPropsStyle,
    signInButtons,
    facebookStyle,
    googleStyle,
    twitterStyle,
  } = styles;

  const dispatch = useDispatch();

  const [inputs, setInputs] = useState({
    email: '',
    password: '',
  });
  const [errors, setErrors] = useState({
    email: '',
    password: '',
  });
  const navigation = useNavigation<loginScreenProp>();
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
  const loginUser = () => {
    loginApi(inputs.email, inputs.password)
      .then(res => {
        const tokenInfo = res.tokenData?.token;
        dispatch(setToken(tokenInfo));
        AsyncStorage.setItem('token', tokenInfo);
        if (tokenInfo) {
          navigation.navigate('Home');
        }
      })
      .catch(err => {
        console.log('Error =>', err);
      });
  };

  const login = () => {
    loginUser();
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
              iconName="email"
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
            <TouchableOpacity style={forgotPasswordContainer}>
              <Text style={forgotPasswordText}>Forgot Password?</Text>
            </TouchableOpacity>
            <View style={loginButtonContainer}>
              <Button
                text="Log In"
                onPress={validate}
                style={buttonPropsStyle}
              />
            </View>
            <View style={forgotPassword}>
              <Text
                onPress={() => console.log('Register')}
                style={dontHaveTextStyle}>
                Don't have account ?
              </Text>
              <TouchableOpacity
                style={buttonStyle}
                onPress={() => navigation.navigate('Register')}>
                <Text style={registerTextStyle}>Register</Text>
              </TouchableOpacity>
            </View>
            <View style={socialSignInContainer}>
              <Text style={forgotPasswordText}>Or Sign in with</Text>
              <View style={signInButtons}>
                <Button
                  text=""
                  onPress={() => console.log('Facebook')}
                  style={facebookStyle}
                  icon={
                    <MaterialIcons
                      name="facebook"
                      color={COLORS.white}
                      size={20}
                    />
                  }
                />
                <Button
                  text=""
                  onPress={() => console.log('Google')}
                  style={googleStyle}
                  icon={
                    <AntDesign
                      name="googleplus"
                      color={COLORS.white}
                      size={20}
                    />
                  }
                />
                <Button
                  text=""
                  onPress={() => console.log('Twitter')}
                  style={twitterStyle}
                  icon={
                    <AntDesign name="twitter" color={COLORS.white} size={20} />
                  }
                />
              </View>
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
    height: HEIGHT * 0.15,
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
    marginTop: 5,
    color: COLORS.grey,
    textAlign: 'center',
    fontSize: 12,
  },
  registerTextStyle: {
    marginTop: 5,
    color: COLORS.buttonBackground,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
  },
  forgotPasswordContainer: {
    alignItems: 'flex-end',
  },
  forgotPasswordText: {
    color: COLORS.buttonBackground,
    textAlign: 'center',
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  forgotPassword: {
    marginTop: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  buttonStyle: {
    marginLeft: 5,
  },
  loginButtonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  socialSignInContainer: {
    justifyContent: 'center',
    marginTop: 10,
  },
  buttonPropsStyle: {
    width: WIDTH * 0.45,
    borderRadius: 5,
    backgroundColor: COLORS.buttonBackground,
  },
  signInButtons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  facebookStyle: {
    backgroundColor: COLORS.facebookThemeColor,
    width: WIDTH * 0.2,
    borderRadius: 5,
  },
  googleStyle: {
    backgroundColor: COLORS.googleThemeColor,
    width: WIDTH * 0.2,
    borderRadius: 5,
  },
  twitterStyle: {
    backgroundColor: COLORS.twitterThemeColor,
    width: WIDTH * 0.2,
    borderRadius: 5,
  },
});

export default Login;
