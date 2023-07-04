import {
  Center,
  HStack,
  Pressable,
  PresenceTransition,
  Icon,
} from 'native-base'
import type { BottomTabBarProps } from '@react-navigation/bottom-tabs'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import React from 'react'

export default function MainTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const colorFocused = `blue.500`
  const colorNotFocused = `gray.400`

  return (
    <HStack
      space={'15%'}
      pt="10px"
      pb="10px"
      bg="white"
      h="20"
      justifyContent="center"
      shadow={4}
    >
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key]
        const label = options.title !== undefined ? options.title : route.name
        const iconName = options.tabBarLabel?.toString()
        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({
              name: route.name,
              merge: true,
              params: undefined,
            })
          }
        }

        const onLongPress = () => {
          const event = navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          })
        }

        return (
          <Pressable
            size="16"
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {({ isPressed }) => (
              <PresenceTransition
                visible={isFocused}
                initial={{ scale: 1 }}
                animate={{ scale: 1, transition: { duration: 100 } }}
              >
                <Center
                  size="16"
                  _text={{
                    color: isFocused ? colorFocused : colorNotFocused,
                  }}
                >
                  <Icon
                    as={MaterialCommunityIcons}
                    name={iconName}
                    size="10"
                    color={isFocused ? colorFocused : colorNotFocused}
                  />
                  {label}
                </Center>
              </PresenceTransition>
            )}
          </Pressable>
        )
      })}
    </HStack>
  )
}
