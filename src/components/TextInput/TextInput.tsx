/* eslint-disable react-native/no-inline-styles */
import React, {FC} from 'react';
import {View, TextInput, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import COLORS from '../../constants/colors/colors';

interface IProps {
  onChangeText: (text: string) => void;
  onFocus?: () => void;
  iconName: string;
  placeholder: string;
  label: string;
  error: string;
  password?: boolean;
  placeholderTextColor?: string;
}

/**
 * @author Nitesh Raj Khanal
 * @function @TextInput
 **/

const FormInput: FC<IProps> = ({
  label,
  iconName,
  error,
  password,
  onFocus = () => {},
  ...props
}: any) => {
  const {
    container,
    labels,
    inputContainer,
    iconStyle,
    textInputStyle,
    passwordShowHideIconStyle,
    errorText,
  } = styles;
  const [hidePassword, setHidePassword] = React.useState(password);
  const [isFocused, setIsFocused] = React.useState(false);
  return (
    <View style={container}>
      <Text style={labels}>{label}</Text>
      <View
        style={[
          inputContainer,
          {
            borderColor: error
              ? COLORS.red
              : isFocused
              ? COLORS.darkBlue
              : COLORS.light,
            alignItems: 'center',
          },
        ]}>
        <Icon name={iconName} style={iconStyle} />
        <TextInput
          autoCorrect={false}
          onFocus={() => {
            onFocus();
            setIsFocused(true);
          }}
          onBlur={() => setIsFocused(false)}
          secureTextEntry={hidePassword}
          style={textInputStyle}
          {...props}
        />
        {password && (
          <Icon
            onPress={() => setHidePassword(!hidePassword)}
            name={hidePassword ? 'eye-outline' : 'eye-off-outline'}
            style={passwordShowHideIconStyle}
          />
        )}
      </View>
      {error && <Text style={errorText}>{error}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {marginBottom: 10, height: 110},
  labels: {
    marginBottom: 5,
    fontSize: 14,
    color: COLORS.grey,
  },
  inputContainer: {
    height: 55,
    backgroundColor: COLORS.light,
    flexDirection: 'row',
    paddingHorizontal: 15,
    borderWidth: 0.5,
    borderRadius: 50,
  },
  iconStyle: {color: COLORS.darkBlue, fontSize: 22, marginRight: 10},
  textInputStyle: {color: COLORS.darkBlue, flex: 1},
  passwordShowHideIconStyle: {color: COLORS.darkBlue, fontSize: 22},
  errorText: {marginTop: 5, color: COLORS.red, fontSize: 12},
});

export default FormInput;
