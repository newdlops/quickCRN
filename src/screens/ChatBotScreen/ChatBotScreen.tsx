import {
  Center,
  Input,
  Button,
  Box,
  KeyboardAvoidingView,
  ITextProps,
  Pressable,
  HStack,
  Icon,
} from 'native-base'
import React from 'react'

function ChatBotScreen(): JSX.Element {
  return (
    <Center flex={1} bg="white">
      <Center h="500" w="300" bgColor="primary.100">
        Chatbot
      </Center>
    </Center>
  )
}

export default ChatBotScreen
