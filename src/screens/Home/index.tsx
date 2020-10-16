import React, { useState, useEffect } from 'react'

import {
  Wrapper,
  TextLogo,
  TextMain,
  ButtonBottom,
  TitleContent,
  TextButtonBottom,
  IconLeftButtom,
  Header,
  Body,
  Footer,
  Icon
} from './styles'
import HumanIcon from '../../assets/human.svg'
import { useNavigation } from '@react-navigation/native'
import NetInfo from '@react-native-community/netinfo'
import { AlertAnimated } from '../../components/Alert'

export const Home: React.FC = () => {
  const navigation = useNavigation()
  const [isConnected, setIsConnected] = useState<boolean>()
  useEffect(() => {
    NetInfo.addEventListener(({ isInternetReachable }) => {
      setIsConnected(!!isInternetReachable)
    })
  }, [])

  const handleNavigate = () => {
    if (isConnected) {
      navigation.navigate('Maps')
      navigation.reset({
        index: 1,
        routes: [{ name: 'Maps' }]
      })
    }
  }
  return (
    <Wrapper>
      {!isConnected && (
        <AlertAnimated
          title="No connection"
          description="Verify you connection"
          backgroundColor="#f2cccc"
          colorActions="#FF0000"
          iconName="wifi-off"
        />
      )}
      <Header>
        <Icon source={require('../../assets/logo.png')} />
      </Header>
      <Body>
        <TextLogo>Descarte correto</TextLogo>
        <HumanIcon />
        <TitleContent>
          <TextMain color="grey">Bem vindo</TextMain>
          <TextMain color="green">Vamos ajudar o planeta</TextMain>
        </TitleContent>
      </Body>
      <Footer>
        <ButtonBottom disable={!!isConnected} onPress={() => handleNavigate()}>
          <TextButtonBottom>Buscar pontos de descartes</TextButtonBottom>
          <IconLeftButtom />
        </ButtonBottom>
      </Footer>
    </Wrapper>
  )
}
