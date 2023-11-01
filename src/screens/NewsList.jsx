import { View, Text, StyleSheet } from "react-native";
import News from "../components/News";
import { Searchbar } from 'react-native-paper';
import { useState } from 'react'

const NewsList = () => {
  const [search, setSearch] = useState('')
  const updatesearch = (search) => {
    setSearch(search)
  }

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Article List</Text>
        <Searchbar style={styles.search} placeholder='Search...' value={search} onChangeText={updatesearch} />
        <News/>
    </View> 
  )
}

const styles = StyleSheet.create({
    container: {
        paddingTop: 20,
        alignItems: 'center'
    },
    title: {
        fontWeight: 'bold',
        fontSize:'25px'
    },
    search: {
        width: '80%',
        marginBottom: 16
    }
})

export default NewsList;