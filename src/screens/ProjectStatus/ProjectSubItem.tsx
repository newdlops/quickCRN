import {
  Center,
  Box,
  HStack,
  Icon,
  VStack,
  Text,
  Pressable,
} from 'native-base'
import React from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { toDateForm } from '@utils/dateformatter'

function ProjectSubItem({ title, data }) {
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
            <Box _text={{ fontSize: 22, fontWeight: 'bold' }}>{title}</Box>
            <Center
              position='absolute'
              right={0}
              borderRadius={'lg'}
              bg={'blueGray.400'}
              width={'12'}
              height={'6'}
              top={2}
              _text={{ color: 'white', fontWeight: 'bold' }}
            >
              {data?.status ? '완료' : '진행중'}
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
                <Text fontSize={16}>{toDateForm(data?.checkdate)}</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>시료 준비</Text>
                <Text fontSize={16}>{data?.sample ? '완료' : '진행중'}</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>문서 준비</Text>
                <Text fontSize={16}>{data?.document ? '완료' : '진행중'}</Text>
              </HStack>
            </VStack>
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <HStack w='100%' h={20} pt={3}>
              {/* <Box bg={'gray.300'} w="90%" position={'absolute'} py={1} top={5} ml={3}></Box> */}
              <ProjectStepStatus
                status={'준비단계'}
                complete={data?.processedStage > 0}
              />
              <ProjectStepStatus
                status={'시험대기'}
                complete={data?.processedStage > 1}
              />
              <ProjectStepStatus
                status={'시험중'}
                complete={data?.processedStage > 2}
              />
              <ProjectStepStatus
                status={'성적서\n작성중'}
                complete={data?.processedStage > 3}
              />
              <ProjectStepStatus
                status={'성적서\n완료'}
                complete={data?.processedStage > 4}
              />
              <ProjectStepStatus
                status={'인증완료'}
                complete={data?.processedStage > 5}
              />
              <ProjectStepStatus
                status={'완료'}
                complete={data?.processedStage > 6}
              />
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
        name='check-circle'
        color={color}
        alignContent={'center'}
        justifyContent={'space-between'}
        size={7}
      />
      <Box
        _text={{
          fontSize: 8,
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

export default ProjectSubItem
