import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Chip } from 'react-native-paper';
import { useArticleContext } from '../../contexts/ArticleContext';

const FilterButton = ({ onPressFilter }) => {
  const { filterMeta } = useArticleContext()

  const [selectedFilter, setSelectedFilter] = useState('all');

  const handleFilterSelection = (filter) => {
    filterMeta.setSource(filter)
    setSelectedFilter(filter);
  };

  return (
    <>
      <Text style={styles.sourceText}>Sources</Text>
      <View style={styles.container}>
        <Chip
          mode="flat"
          style={[styles.button, selectedFilter == 'all' ? styles.selectedButton : null]}
          onPress={() => handleFilterSelection('all')}
        >
          <Text style={styles.buttonText}>All Sources</Text>
        </Chip>
        <Chip
          mode="flat"
          style={[styles.button, selectedFilter == 'bbc-news' ? styles.selectedButton : null]}
          onPress={() => handleFilterSelection('bbc-news')}
        >
          <Text style={styles.buttonText}>BBC</Text>
        </Chip>
        <Chip
          mode="flat"
          style={[styles.button, selectedFilter == 'cat2' ? styles.selectedButton : null]}
          onPress={() => handleFilterSelection('cat2')}
        >
          <Text style={styles.buttonText}>Cat2</Text>
        </Chip>

      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    marginBottom: 20,
    width: '95%',
    overflow: 'scroll'
  },
  sourceText: {
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    fontWeight: 'bold',
    width: '95%'
  },
  button: {
    margin: 3,
  },
  selectedButton: {
    backgroundColor: '#3578e3',
    margin: 3
  },
  buttonText: {
    fontSize: 16,
    color: '#000',
  },
});

export default FilterButton;
