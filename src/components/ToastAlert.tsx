import { Alert, CloseIcon, HStack, IconButton, Text, VStack } from 'native-base'
import React from 'react'

interface ToastAlertProp {
  id?: string
  status?: string
  variant?: string
  title?: string
  description?: string
  isClosable?: boolean
  toast?: any
}

export const ToastAlert = ({
  id,
  status,
  variant,
  title,
  description,
  isClosable,
  toast,
  ...rest
}: ToastAlertProp) => {
  const close = () => {
    toast.close(id)
  }
  return (
    <Alert
      maxWidth='95%'
      // w="80%
      alignSelf='center'
      flexDirection='row'
      status={status ? status : 'info'}
      variant={variant}
      {...rest}
    >
      <VStack w='100%'>
        <HStack alignItems='center' justifyContent='space-between'>
          <HStack alignItems='center'>
            <Alert.Icon />
            <Text
              ml='3'
              fontSize='md'
              fontWeight='medium'
              color={
                variant === 'solid'
                  ? 'lightText'
                  : variant !== 'outline'
                  ? 'darkText'
                  : null
              }
            >
              {title}
            </Text>
          </HStack>
          {isClosable ? (
            <IconButton
              variant='unstyled'
              icon={<CloseIcon size='3' />}
              _icon={{
                color: variant === 'solid' ? 'lightText' : 'darkText',
              }}
              onPress={close}
            />
          ) : null}
        </HStack>
        <Text
          px='6'
          color={
            variant === 'solid'
              ? 'lightText'
              : variant !== 'outline'
              ? 'darkText'
              : null
          }
        >
          {description}
        </Text>
      </VStack>
    </Alert>
  )
}
