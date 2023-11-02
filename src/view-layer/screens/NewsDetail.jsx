import React from 'react';
import { View, Text, StyleSheet, Image, Button, Clipboard } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import dateFormat from 'dateformat';

const NewsDetail = ({ route, navigation }) => {
  const { author, content, description, publishedAt, title, urlToImage } = route.params.item;

  const copyToClipboard = () => {
    const articleDetails = `Title: ${title}\n\nAuthor: ${author}\n\nDescription: ${description}\n\nContent: ${content}`;
    Clipboard.setString(articleDetails);
    alert('Article details copied to clipboard!');
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Text style={styles.backButton}>Back</Text>
      </TouchableOpacity>
      <Text style={styles.title}>{title}</Text>
      <Image source={{ uri: urlToImage }} style={styles.image} />
      <Text style={styles.author}>Author: {author}</Text>
      <Text style={styles.publishedAt}>Published at: {dateFormat(new Date(publishedAt), 'dddd dS mmm yyyy @ h:MM TT')}</Text>
      <Text style={styles.content}>{content}</Text>
      <Button title="Copy to Clipboard" onPress={copyToClipboard} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  backButton: {
    fontSize: 18,
    color: 'blue',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  image: {
    width: 300,
    height: 200,
    resizeMode: 'cover',
    marginBottom: 10,
  },
  author: {
    fontSize: 16,
    marginBottom: 5,
  },
  publishedAt: {
    fontSize: 14,
    marginBottom: 15,
  },
  content: {
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 20,
  },
});

export default NewsDetail;