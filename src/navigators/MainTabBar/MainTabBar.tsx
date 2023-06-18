import { Center, HStack, Pressable, PresenceTransition } from 'native-base'
import React from 'react'

export default function MainTabBar({ state, descriptors, navigation }) {
  return (
    <HStack
      space={'10%'}
      pt="10px"
      pb="10px"
      bg="yellow.100"
      h="120"
      justifyContent="center"
    >
      {state.routes.map((route, index: number) => {
        const { options } = descriptors[route.key]
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name

        const isFocused = state.index === index
        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          })

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate({ name: route.name, merge: true })
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
            size="100"
            key={index}
            onPress={onPress}
            onLongPress={onLongPress}
          >
            {({ isPressed }) => (
              <PresenceTransition
                visible={isFocused}
                initial={{ scale: 0.8 }}
                animate={{ scale: 1, transition: { duration: 100 } }}
              >
                <Center
                  size="100"
                  bg={
                    isPressed
                      ? `primary.${index + 1}00`
                      : `green.${index + 1}00`
                  }
                >
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
