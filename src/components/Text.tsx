import styled from 'styled-components/native';
import {ThemeInterface} from 'styled-components';

interface TextProps {
  theme: ThemeInterface;
}

const CustomText = styled.Text<TextProps>`
  font-size: 30px;
  font-weight: bold;
  color: ${props => props.theme.primaryTextColor || '#000'};
`;

export default CustomText;
