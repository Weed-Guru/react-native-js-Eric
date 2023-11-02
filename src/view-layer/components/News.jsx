import { Text, StyleSheet } from 'react-native';
import dateFormat from 'dateformat';
import { Card, Avatar } from 'react-native-paper';

export const NewsItemCard = ({ item: newsItem, navigation }) => (
  <Card
    mode="outlined"
    style={NewsItemCardStyles.container}
		onPress={() => navigation.navigate('NewsDetail', { item: newsItem })}
    >
    <Card.Title
      title={newsItem.title}
      titleStyle={NewsItemCardStyles.titleStyles}
      titleNumberOfLines={Number(3)}
    />
		<Card.Content style={NewsItemCardStyles.content}>
      <Avatar.Image size={80} source={{ uri: newsItem.urlToImage }} />
      <Text style={NewsItemCardStyles.description}>{newsItem.description}</Text>
    </Card.Content>
    <Card.Actions>
      <Text style={NewsItemCardStyles.date}>
        {dateFormat(new Date(newsItem.publishedAt), 'dddd dS mmm yyyy @ h:MM TT')}
      </Text>
    </Card.Actions>
  </Card>
)

const DEFAULT_MARGIN = 5;
const NewsItemCardStyles = StyleSheet.create({
  container: {
    margin: DEFAULT_MARGIN,
  },
  titleStyles: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  content: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: DEFAULT_MARGIN,
  },
  description: {
    flex: 1,
    marginLeft: DEFAULT_MARGIN,
  },
  date: {
    marginLeft: DEFAULT_MARGIN,
    marginTop: DEFAULT_MARGIN,
    color: 'gray',
	}
});
