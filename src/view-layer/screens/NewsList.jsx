import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import * as React from 'react'
import { articles } from '../utils/sample.json'
import { NewsItemCard } from "../components/News";

const NewsList = (props) => {
  const [search, setSearch] = React.useState('')
  const updatesearch = (search) => {
    setSearch(search)
  }

  React.useEffect(() => {
  }, [])

  return (
    <View style={styles.container}>
        <Text style={styles.title}>Article List</Text>
        <Searchbar style={styles.search} placeholder='Search...' value={search} onChangeText={updatesearch} />
        <FlatList
          style={{ padding: 10 }}
          data={articles}
          renderItem={({ item }) => <NewsItemCard item={item} navigation={props.navigation} />}
        />
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
      width: "80%",
      marginBottom: 16
  }
})

export default NewsList;