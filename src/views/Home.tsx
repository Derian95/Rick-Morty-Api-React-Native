import {View, Text, Button, StyleSheet} from 'react-native'
 import { CharacterList } from '../components/CharacterList'
export const Home = () => {
  return (
    <View style={styles.container}>
        <Text>home</Text>
        <Button
    title='aaaaaaaaaaaaaa'
    
    />
        <CharacterList/>
        
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'red',
      alignItems: 'center',
      justifyContent: 'center',
      marginHorizontal:50,
    },
  });