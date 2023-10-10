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
import { findByUser } from '../../api/project'
import { useSelector } from 'react-redux'
import { useFindProjectByUserIdQuery } from '../../service/project'
import { toDateForm } from '@utils/dateformatter'

function ProjectStatusList({ navigation }): JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const { data } = useFindProjectByUserIdQuery(loginUserInfo._id, {
    // pollingInterval: 300,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })
  return (
    <>
      <ScrollView>
        {data?.msg?.map((v, i) => (
          <ProductStatusDetailItem
            key={i}
            data={v}
            onPress={() => {
              navigation.navigate('ProjectStatusDetail', { projectId: v._id })
            }}
          />
        ))}
        <Box h='100px' />
      </ScrollView>
      {/*<Fab*/}
      {/*  renderInPortal={false}*/}
      {/*  shadow={3}*/}
      {/*  size="sm"*/}
      {/*  bg="blue.500"*/}
      {/*  // label="문의하기"*/}
      {/*  icon={*/}
      {/*    <Icon*/}
      {/*      as={MaterialCommunityIcons}*/}
      {/*      name="account-question"*/}
      {/*      color="white"*/}
      {/*      size="6"*/}
      {/*    />*/}
      {/*  }*/}
      {/*/>*/}
    </>
  )
}

function ProductStatusDetailItem(props: PressableProps) {
  const data = props.data
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
            <HStack mb={3}>
              {/* <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>베터리</Box> */}
              <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>
                {data.projectname}
              </Box>
              <Center
                position='absolute'
                right={0}
                borderRadius={'lg'}
                bg={'blueGray.400'}
                width={'12'}
                height={'6'}
                _text={{ color: 'white', fontWeight: 'bold' }}
              >
                {data.projectStatus ? '완료' : '진행중'}
              </Center>
            </HStack>
            <VStack>
              <Box _text={{ fontSize: 16, fontWeight: 'bold' }}>인증구분</Box>
              {data.certType?.map((v, i:number) => (
                <HStack alignItems={'center'} key={i}>
                  <Icon as={Entypo} name='dot-single' size='4' />
                  <Text>{v}</Text>
                </HStack>
              ))}
            </VStack>
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <VStack mt={5}>
              <Box>
                <Text>시작일자 : {toDateForm(data.projectStartDate)}</Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default ProjectStatusList
