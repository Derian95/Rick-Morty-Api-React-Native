import { View, Text, FlatList } from 'react-native';
import { useGetAllCharactersQuery } from '../store/api';
import { Card } from './Card'


export const CharacterList = () => {

    const{ data }=useGetAllCharactersQuery(undefined)
  console.log(data?.info)
 return (
    <View>
        <Text>Caracteres de rick and morty</Text>
    <FlatList
    data={data?.results}
    renderItem={item =>(<Card character={item.item}/>)}
    keyExtractor={item=>item.id}
    />
    
    </View>
  )
}
