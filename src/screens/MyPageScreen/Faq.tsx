import {
  Center,
  Box,
  HStack,
  Icon,
  Fab,
  VStack,
  ScrollView,
  Text,
  Pressable,
} from 'native-base'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import { PressableProps } from 'react-native'
import { getDetail } from '../../api/project'
import { toDateForm } from '@utils/dateformatter'
import { useGetFaqsQuery } from '../../service/faq'

function FaqList({ route }): React.JSX.Element {
  const { data, isLoading, error } = useGetFaqsQuery('',{
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })

  return (
    <ScrollView>
      {data?.msg.map((v, i) => (
        <Faq data={v} title={v.question} key={i} />
      ))}
      <Box h='100px' />
    </ScrollView>
  )
}

function Faq({ title, data }) {
  const [isOpen, setOpen] = React.useState(false)
  const itemClick = () => {
    setOpen(!isOpen)
  }
  return (
    <Pressable onPress={itemClick}>
      <Center mt={3}>
        <Box
          width={80}
          height={isOpen ? null : 20}
          bg={'white'}
          borderRadius={16}
          shadow={1}
          p={5}
        >
          <HStack mb={3}>
            <Box _text={{ fontSize: 22, fontWeight: 'bold' }}>{`Q. ${title}`}</Box>
          </HStack>
          <Box display={isOpen ? null : 'none'}>
            <VStack mt={2}>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text fontSize={16}>A. {data?.answer}</Text>
              </HStack>
            </VStack>
          </Box>
        </Box>
      </Center>
    </Pressable>
  )
}

export default FaqList
