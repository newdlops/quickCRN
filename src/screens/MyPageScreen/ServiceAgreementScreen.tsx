import {
  Box,
  VStack,
  ScrollView,
} from 'native-base'
import React, { useEffect, useState } from 'react'
import axios from 'axios/index'

function ServiceAgreementScreen(): JSX.Element{
  const [content, setContent] = useState('')
  useEffect(() => {
    axios.post('http://10.0.2.2:3000/terms/find', { version: 'c' }).then(r => {
      console.log('content', r)
      setContent(r?.data?.msg?.content)
    })
  }, [])

  return (
    <ScrollView>
      <VStack>
        <Box _text={{ fontSize: 16}} bgColor='white' mb={3} p={5} pl={5} pr={5}>
          <Box _text={{ fontSize: 18, fontWeight:'bold'}} mb={2}>서비스 이용 약관</Box>
          <Box borderColor={'black'} borderWidth={1} p={2}>{content}</Box>
        </Box>
      </VStack>
    </ScrollView>
  )
}

export default ServiceAgreementScreen
