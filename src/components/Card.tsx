import { FC } from 'react';
import { View, Text } from 'react-native'
import { Character } from '../interfaces';



interface Props{
  character:Character
}

export const Card:FC<Props> = ({ character }) => {
  const { name, gender }= character
  return (
    <View>
        <Text>{name}</Text>
    </View>
  )
}
