import styled from 'styled-components/native'
import { Dimensions, Platform } from 'react-native'
import Constants from 'expo-constants'
import { colors } from '../../styles/colors'
import { RectButton } from 'react-native-gesture-handler'
import { MaterialCommunityIcons } from '@expo/vector-icons'

const { height, width } = Dimensions.get('window')
const statusBarHeight =
  Platform.OS === 'android' ? Constants.statusBarHeight : 0

export const Wrapper = styled.SafeAreaView`
  background: ${colors.background};
  padding-top: ${statusBarHeight}px;
  height: ${height}px;
  width: ${width}px;
  align-items: center;
  justify-content: center;
`

export const Header = styled.View`
  height: 15%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Body = styled.View`
  height: 70%;
  width: 100%;
  justify-content: space-between;
  align-items: center;
`

export const Footer = styled.View`
  height: 15%;
  width: 100%;
  align-items: center;
  justify-content: center;
`

export const Icon = styled.Image.attrs({
  resizeMode: 'contain'
})`
  flex: 1;
`
export const TextLogo = styled.Text`
  color: ${colors.primary};
  font-family: 'roboto_500';
  font-size: 25.89px;
  font-weight: bold;
`

export const TitleContent = styled.View`
  width: 100%;
  height: 57px;
  align-items: center;
`

export const TextMain = styled.Text<{ color: 'green' | 'grey' }>`
  color: ${({ color }) =>
    color === 'green' ? colors.secundary : colors.secundaryLight};
  font-size: 22px;
  font-family: 'roboto_500';
  font-weight: bold;
  letter-spacing: 2px;
`

export const ButtonBottom = styled(RectButton)<{ disable: boolean }>`
  width: 80%;
  height: 52px;
  border-radius: 10px;
  background: ${props =>
    props.disable ? colors.primary : colors.actions.disable.dark};
  justify-content: space-around;
  align-items: center;
  flex-direction: row;
`

export const TextButtonBottom = styled.Text`
  font-size: 16px;
  font-family: 'roboto_500';
  color: ${colors.text.light};
  text-transform: uppercase;
`

export const IconLeftButtom = styled(MaterialCommunityIcons).attrs(() => ({
  name: 'arrow-right',
  size: 28,
  color: colors.text.light
}))``
