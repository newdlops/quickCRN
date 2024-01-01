import {
  Center,
  Box,
  HStack,
  VStack,
  ScrollView,
  Text,
  Pressable,
  Image,
} from 'native-base'
import React, { useState } from 'react'
import { toDateForm } from '@utils/dateformatter'
import ImageView from 'react-native-image-viewing'
import { RootStackScreenProp } from '@navigators/RootNavigator.tsx'
import { useFindProjectByIdQuery } from '../../service/project.ts'
import ProjectSubItem from '@screens/ProjectStatus/ProjectSubItem.tsx'

// TODO: 공지사항 팝업창 만들기
function ProjectStatusDetail({ route }: RootStackScreenProp) {
  const [imgModal, setImgModal] = useState({
    open: false,
    index: 0,
  })
  const { data } = useFindProjectByIdQuery(route.params?.projectId)
  const zoomImage = (index: number) => {
    setImgModal({
      open: true,
      index: index,
    })
  }

  return (
    <>
      <ImageView
        images={data?.msg?.photos?.map(v => ({ uri: v })) ?? []}
        imageIndex={imgModal.index}
        visible={imgModal.open}
        onRequestClose={() => setImgModal({ ...imgModal, open: false })}
      />
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
              <Box _text={{ fontSize: 24, fontWeight: 'bold' }}>
                {data?.msg.projectname}
              </Box>
            </HStack>
            <VStack mt={2}>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>상태</Text>
                <Text fontSize={16}>
                  {data?.msg.projectStatus ? '완료' : '진행중'}
                </Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>신청인</Text>
                <Text fontSize={16}>{data?.msg.requestUser?.email}</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>모델명</Text>
                <Text fontSize={16}>{data?.msg.modelName}</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>제조사</Text>
                <Text fontSize={16}>{data?.msg.manufacture}</Text>
              </HStack>
            </VStack>
            <Box bg='gray.400' mt={5} mb={5} h={2 / 3} w='100%' />
            <VStack mb={1} justifyContent={'space-between'}>
              <Text fontSize={18} fontWeight={'bold'} mb={2}>
                문의 내용
              </Text>
              <Text fontSize={16}>{data?.msg.content}</Text>
            </VStack>
            {(data?.msg?.photos.length ?? 0) > 0 && (
              <>
                <Box bg='gray.400' mt={5} mb={5} h={2 / 3} w='100%' />
                <VStack mb={1} justifyContent={'space-between'}>
                  <Text fontSize={18} fontWeight={'bold'} mb={2}>
                    첨부 이미지
                  </Text>
                  <ScrollView horizontal>
                    {data?.msg?.photos?.map((v, i) => (
                      <Pressable key={i} mr={3} onPress={() => zoomImage(i)}>
                        <Image
                          borderRadius={10}
                          h='200px'
                          w='200px'
                          source={{ uri: v }}
                          alt={'첨부이미지'}
                        />
                      </Pressable>
                    ))}
                  </ScrollView>
                </VStack>
              </>
            )}
            <Box bg='gray.400' mt={5} h={2 / 3} w='100%' />
            <VStack mt={5}>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>프로젝트 번호</Text>
                <Text fontSize={16}>{data?.msg.projectNumber}</Text>
              </HStack>
              <HStack
                alignItems={'center'}
                mb={1}
                justifyContent={'space-between'}
              >
                <Text>프로젝트 시작일</Text>
                <Text fontSize={16}>
                  {toDateForm(`${data?.msg?.projectStartDate}`) ??
                    '시작일 미정'}
                </Text>
              </HStack>
            </VStack>
          </Box>
        </Center>
        {data?.msg?.projectItems.map((v, i) => (
          <ProjectSubItem data={v} title={v.projectItemName} key={i} />
        ))}
        <Box h='100px' />
      </ScrollView>
    </>
  )
}

export default ProjectStatusDetail
