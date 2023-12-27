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
import { PressableProps } from 'react-native'
import { useSelector } from 'react-redux'
import { toDateForm } from '@utils/dateformatter'
import { IRequestInformation } from '../../type'
import { useGetRequestInformationByUserQuery } from '../../service/requestinfo'

function RequestInformationListScreen({ navigation }): React.JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const { data ,isLoading, error} = useGetRequestInformationByUserQuery(loginUserInfo._id, {
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })
  return (
    <>
      <ScrollView>
        {data?.msg?.map((v, i) => (
          <RequestInfoDetail
            key={i}
            data={v}
          />
        ))}
        <Box h='100px' />
      </ScrollView>
    </>
  )
}

function RequestInfoDetail(props: PressableProps) {
  const data: IRequestInformation = props.data
  return (
    <Pressable onPress={props.onPress}>
      <Center m={3}>
        <Center alignItems={'center'}>
          <Box
            width={80}
            // height={56}
            bg={'white'}
            borderRadius={16}
            shadow={1}
            p={5}
          >
            <HStack mb={4}>
              <Box _text={{ fontSize: 18, fontWeight: 'bold' }}>
                {data.title}
              </Box>
            </HStack>
            <VStack>
              <Box mb={1} _text={{ fontSize: 16, fontWeight: 'normal' }}>{`제품명 : ${data.productName}`}</Box>
            </VStack>
            <VStack mt={2}>
              <Box _text={{ fontSize: 16, fontWeight: 'normal' }}>{data.content ?? ''}</Box>
            </VStack>
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <VStack mt={2}>
              <Box _text={{ fontSize: 16, fontWeight: 'normal' }}>{data.reply ?? '아직 등록된 답변이 없습니다.'}</Box>
            </VStack>
            <VStack mt={5}>
              <Box>
                <Text>문의일시 : {toDateForm(data.createdAt)}</Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default RequestInformationListScreen
