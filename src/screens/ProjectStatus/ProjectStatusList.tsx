import {
  Center,
  Box,
  HStack,
  Icon,
  VStack,
  ScrollView,
  Text,
  Pressable,
} from 'native-base'
import React from 'react'
import Entypo from 'react-native-vector-icons/Entypo'
import { PressableProps } from 'react-native'
import { useSelector } from 'react-redux'
import { useFindProjectByUserIdQuery } from '../../service/project'
import { toDateForm } from '@utils/dateformatter'

function ProjectStatusList({ navigation }): React.JSX.Element {
  const loginUserInfo = useSelector(state => state.user.user)
  const { data } = useFindProjectByUserIdQuery(loginUserInfo._id, {
    // pollingInterval: 300,
    refetchOnFocus: true,
    refetchOnMountOrArgChange: true,
  })
  return (
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
  )
}

function ProductStatusDetailItem(props: PressableProps) {
  const data = props.data
  function title(string) {
    if(string.length>10){
      return string.slice(0, 10).concat('...')
    }
    return string
  }

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
            <VStack mb={3}>
              {/* <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>베터리</Box> */}
              <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>
                {title(data.projectname)}
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
            </VStack>
            <VStack>
              <Box _text={{ fontSize: 16, fontWeight: 'bold' }}>인증구분</Box>
              {data.certType?.map((v, i: number) => (
                <HStack alignItems={'center'} key={i}>
                  <Icon as={Entypo} name='dot-single' size='4' />
                  <Text>{v}</Text>
                </HStack>
              ))}
            </VStack>
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <VStack mt={5}>
              <Box>
                <Text>
                  시작일자 :{' '}
                  {toDateForm(data.projectStartDate) ?? '시작일 미정'}
                </Text>
              </Box>
            </VStack>
          </Box>
        </Center>
      </Center>
    </Pressable>
  )
}

export default ProjectStatusList
