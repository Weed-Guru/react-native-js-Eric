import { useNavigation } from "@react-navigation/native"
import { View, Text, Button } from "react-native"

const NewsDetail = () => {
  const navigation = useNavigation()

  const gotoList = () => {
    navigation.navigate('NewsList');
  }

  return (<View>
    <Text>HI</Text>
    <Button onPress={gotoList}>Back</Button>
  </View>)
}

export default NewsDetail;