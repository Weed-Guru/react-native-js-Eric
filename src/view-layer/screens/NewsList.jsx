import { View, Text, StyleSheet, FlatList } from "react-native";
import { Searchbar } from 'react-native-paper';
import * as React from 'react'
import { NewsItemCard } from "../components/News";
import FilterButton from "../components/FIlterButton";
import { useArticleContext } from "../contexts/ArticleContext";
import SpinnerLoading from "../components/Spinner";

const NewsList = (props) => {
  const { filterMeta, articles, loading, loadMore } = useArticleContext()

  const windowHeight = useWindowDimensions().height;

  const handleScroll = ({ nativeEvent }) => {
    const { contentOffset, layoutMeasurement, contentSize } = nativeEvent;
    const scrollPosition = contentOffset.y;
    const scrollViewHeight = layoutMeasurement.height;
    const scrollContentHeight = contentSize.height;

    if (scrollPosition + scrollViewHeight >= scrollContentHeight - 1) {
      loadMore(); // Implement your own loadMore function
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Article List</Text>
      <Searchbar style={styles.search} placeholder='Search...' onChange={(e) => filterMeta.setKeyword(e.target.value)} />
      <FilterButton />
      {loading ?
        <SpinnerLoading /> :
        <FlatList
          style={{ padding: 10 }}
          data={articles}
          renderItem={({ item }) => <NewsItemCard item={item} navigation={props.navigation}
            keyExtractor={item.source.id}
            onEndReached={console.log('end')}
            onEndReachedThreshold={0.5}
          />}
        />}
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
    fontSize: '25px'
  },
  search: {
    width: "80%",
    marginBottom: 16
  }
})

export default NewsList;