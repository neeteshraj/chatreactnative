import React, {FC} from 'react';
import colors from '../../constants/colors/colors';
import styled from 'styled-components/native';

interface IProps {
  text: string;
  onPress?: () => void;
  style?: any;
}

/**
 * @author Nitesh Raj Khanal
 * @function @Button
 **/

const Button: FC<IProps> = props => {
  return (
    <ButtonWrapper onPress={props.onPress} style={props.style}>
      <ButtonText>{props.text}</ButtonText>
    </ButtonWrapper>
  );
};

const ButtonWrapper = styled.TouchableOpacity`
  background-color: ${colors.buttonBackground};
  padding: 10px;
  border-radius: 5px;
  min-width: 150px;
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
