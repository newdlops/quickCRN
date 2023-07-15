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

function ProjectStatusDetail(): JSX.Element {
  return (
    <ScrollView>
      <Center mt={3}>
        <Box
          width={80}
          // height={56}
          bg={'white'}
          borderRadius={16}
          shadow={1}
          p={5}
        >
          <HStack mb={3}>
            <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>기본정보</Box>
            <Center
              position="absolute"
              right={0}
              borderRadius={'lg'}
              bg={'blueGray.400'}
              width={'12'}
              height={'6'}
              _text={{ color: 'white', fontWeight: 'bold' }}
            >
              완료
            </Center>
          </HStack>
          <VStack mt={2}>
            <HStack
              alignItems={'center'}
              mb={1}
              justifyContent={'space-between'}
            >
              <Text>신청인</Text>
              <Text fontSize={16}>홍길동</Text>
            </HStack>
            <HStack
              alignItems={'center'}
              mb={1}
              justifyContent={'space-between'}
            >
              <Text>모델명</Text>
              <Text fontSize={16}>SBD-1</Text>
            </HStack>
            <HStack
              alignItems={'center'}
              mb={1}
              justifyContent={'space-between'}
            >
              <Text>제조사</Text>
              <Text fontSize={16}>QuckC Company Co. Ltd.</Text>
            </HStack>
          </VStack>
          <Box bg="gray.400" mt={5} h={2 / 3} w="100%" />
          <VStack mt={5}>
            <HStack
              alignItems={'center'}
              mb={1}
              justifyContent={'space-between'}
            >
              <Text>프로젝트 번호</Text>
              <Text fontSize={16}>PJT1038112909830123</Text>
            </HStack>
            <HStack
              alignItems={'center'}
              mb={1}
              justifyContent={'space-between'}
            >
              <Text>프로젝트 시작일</Text>
              <Text fontSize={16}>2023-01-01</Text>
            </HStack>
          </VStack>
        </Box>
      </Center>
      <ProjectSubItem title="적합성평가 적합성등록" />
      <ProjectSubItem title="전기용품 안전확인" />
    </ScrollView>
  )
}

function ProjectSubItem({ title }) {
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
            <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>{title}</Box>
            <Center
              position="absolute"
              right={0}
              borderRadius={'lg'}
              bg={'blueGray.400'}
              width={'12'}
              height={'6'}
              top={2}
              _text={{ color: 'white', fontWeight: 'bold' }}
            >
              완료
            </Center>
          </HStack>
          <Box display={isOpen ? null : 'none'}>
            <VStack mt={2}>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>견적 확인</Text>
                <Text fontSize={16}>2022-000323</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>시료 준비</Text>
                <Text fontSize={16}>완료</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>문서 준비</Text>
                <Text fontSize={16}>완료</Text>
              </HStack>
            </VStack>
            <Box bg="gray.400" mt={5} h={2 / 3} w="100%" />
            <HStack w="100%" h={20} pt={3}>
              {/* <Box bg={'gray.300'} w="90%" position={'absolute'} py={1} top={5} ml={3}></Box> */}
              <ProjectStepStatus status={'준비단계'} complete={true} />
              <ProjectStepStatus status={'시험대기'} complete={true} />
              <ProjectStepStatus status={'시험중'} complete={true} />
              <ProjectStepStatus status={'성적서\n작성중'} complete={true} />
              <ProjectStepStatus status={'성적서\n완료'} complete={true} />
              <ProjectStepStatus status={'인증완료'} complete={true} />
              <ProjectStepStatus status={'완료'} complete={false} />
            </HStack>
          </Box>
        </Box>
      </Center>
    </Pressable>
  )
}

function ProjectStepStatus({ status, complete }) {
  const color = complete ? 'blue.400' : 'gray.400'
  return (
    <VStack mr={2} alignItems={'center'} w={8}>
      <Icon
        as={MaterialCommunityIcons}
        name="check-circle"
        color={color}
        alignContent={'center'}
        justifyContent={'space-between'}
        size={7}
      />
      <Box
        _text={{
          fontSize: 9,
          textAlign: 'center',
          color: color,
          fontWeight: 'bold',
        }}
      >
        {status}
      </Box>
    </VStack>
  )
}

export default ProjectStatusDetail
