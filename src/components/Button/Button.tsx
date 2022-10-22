import React, {FC} from 'react';
import colors from '../../constants/colors/colors';
import styled from 'styled-components/native';

interface IProps {
  text: string;
  onPress?: () => void;
  style?: any;
  icon?: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Button
 **/

const Button: FC<IProps> = props => {
  return (
    <ButtonWrapper onPress={props.onPress} style={props.style}>
      {props.text && <ButtonText>{props.text}</ButtonText>}
      {props.icon && props.icon}
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity`
  padding: 10px;
  align-items: center;
  justify-content: center;
`;
const ButtonText = styled.Text`
  color: ${colors.white};
  font-size: 20px;
  text-align: center;
  font-weight: 600;
`;

export default Button;
