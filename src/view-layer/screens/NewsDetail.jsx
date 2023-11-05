import React from 'react';
import dateFormat from 'dateformat';
import { StyleSheet, View, Image, Dimensions, Text, TouchableOpacity, Clipboard } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useToast } from 'react-native-toast-notifications';

const WIDTH = Dimensions.get('window').width;

const NewsDetail = ({ route, navigation }) => {

  const { author, content, description, publishedAt, title, urlToImage } = route.params.item;
  const toast = useToast()

  const copyToClipboard = () => {
    const articleDetails = `Title: ${title}\n\nAuthor: ${author}\n\nDescription: ${description}\n\nContent: ${content}`;
    Clipboard.setString(articleDetails);
    toast.show('This article is copied!')
  };

  return (
    <>
      <Image
        style={styles.image}
        source={{ uri: urlToImage }}
      />
      <TouchableOpacity style={styles.goBackButton} onPress={() => navigation.goBack()}>
        <Icon name='arrow-left' size={20} style={{ margin: 6 }} />
      </TouchableOpacity>

      <View style={styles.newsContainer}>
        <View style={styles.topNews}>
          <Text style={styles.dateText}>{dateFormat(new Date(publishedAt), 'dddd dS mmm yyyy @ h:MM TT')}</Text>
          <Text style={styles.titleText}>{title}</Text>
          <Text>{author}</Text>
        </View>

        <ScrollView style={styles.textContainer}>
          <Text style={styles.text}>{content}</Text>
        </ScrollView>
      </View>

      <TouchableOpacity style={styles.likeButton} onPress={copyToClipboard}>
        <Icon name='copy' size={30} style={styles.icon} />
      </TouchableOpacity>

    </>
  )
}

export default NewsDetail

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignContent: 'center',
    alignItems: 'center',
    marginTop: 38,
  },
  image: {
    width: 400,
    height: WIDTH + 25,
  },
  newsContainer: {
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    width: WIDTH,
    height: WIDTH + 63,
    position: 'absolute',
    bottom: 0,
    backgroundColor: '#FFF'
  },
  topNews: {
    flex: 1,
    width: WIDTH - 64,
    height: WIDTH - 234,
    position: 'absolute',
    top: '-15%',
    alignSelf: 'center',
    borderRadius: 16,
    backgroundColor: 'rgba(220, 220, 220, 0.8)',
    justifyContent: 'space-evenly',
    alignItems: 'flex-start',
    paddingHorizontal: 24,
    paddingVertical: 16,
  },
  textContainer: {
    marginTop: WIDTH - 287,
    paddingHorizontal: 15,
  },
  text: {
    fontWeight: '600',
    fontSize: 14,
    lineHeight: 21,
    textAlign: 'justify',
  },
  dateText: {
    fontWeight: '600',
    fontSize: 12,
    lineHeight: 20.8,
  },
  titleText: {
    marginTop: 8,
    fontWeight: '700',
    fontSize: 17,
    lineHeight: 19.2,
  },
  authorText: {
    marginTop: 8,
    fontWeight: '800',
    fontSize: 10,
    lineHeight: 13.64,
  },
  likeButton: {
    backgroundColor: '#3578e3',
    width: 56,
    height: 56,
    borderRadius: 32,
    bottom: '3%',
    position: 'absolute',
    right: '5%',
  },
  goBackButton: {
    backgroundColor: "rgba(245, 245, 245, 0.5)",
    width: 32,
    height: 32,
    borderRadius: 10,
    top: '5%',
    position: 'absolute',
    left: '4%',
  },
  icon: {
    margin: 11
  }
});