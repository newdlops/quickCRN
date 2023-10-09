import { Center, Box, Text, Icon, Fab, VStack, ScrollView } from 'native-base'
import React, { useEffect } from 'react'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { ProductDetails } from '../../type'

function SearchProductDetailScreen({ navigation, route }): JSX.Element {
  const data: ProductDetails = route.params.data
  useEffect(() => {
    navigation.setOptions({
      title: data?.productname,
    })
  }, [])
  console.log('show data', data)
  return (
    <>
      <ScrollView>
        <Center>
          <Center alignItems={'center'} mt={2}>
            <Box
              width={80}
              // height={56}
              bg={'white'}
              borderRadius={16}
              shadow={1}
              p={5}
            >
              <VStack>
                <Box _text={{ fontSize: 18, fontWeight: 'bold' }} mb={3}>
                  상세정보
                </Box>
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  인증구분
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.certificationCategory}
                </Box>
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  품목
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.category}
                </Box>

                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  구매대행 가능여부
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.substitution}
                </Box>
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  샘플
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.sample}
                </Box>
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  기간
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.period}
                </Box>
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  예상비용
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.expectedCost}
                </Box>
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mb={1}
                >
                  필요문서
                </Box>
                {data?.requiredDocument.map(doc => {
                  return (
                    <Box
                      _text={{ fontSize: 12, fontWeight: 'normal' }}
                      key={doc._id}
                    >
                      <Text> - {doc.documentName}</Text>
                    </Box>
                  )
                })}
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mt={4}
                  mb={1}
                >
                  시험소
                </Box>
                {data?.testingLaboratory.map(lab => {
                  return (
                    <Box
                      _text={{ fontSize: 12, fontWeight: 'normal' }}
                      key={lab._id}
                    >
                      <Text> - {lab.laboratoryName}</Text>
                    </Box>
                  )
                })}
                <Box
                  _text={{
                    fontSize: 14,
                    fontWeight: 'normal',
                    color: 'gray.400',
                  }}
                  mt={4}
                  mb={1}
                >
                  팁
                </Box>
                <Box _text={{ fontSize: 12, fontWeight: 'normal' }} mb={4}>
                  {data?.tip}
                </Box>
                {/*<Box _text={{fontSize:12, fontWeight:'normal', color:'blue.200'}} mb={2}>근거법령</Box>*/}
              </VStack>
            </Box>
          </Center>
        </Center>
        <Box h={100}></Box>
      </ScrollView>
      <Fab
        renderInPortal={false}
        shadow={2}
        size='sm'
        // label="문의하기"
        icon={
          <Icon
            as={MaterialCommunityIcons}
            name='account-question'
            color='primary.200'
            size='6'
          />
        }
      />
    </>
  )
}

export default SearchProductDetailScreen
