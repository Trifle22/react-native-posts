import React from 'react'
import { View, Text, StyleSheet, Image, Button, ScrollView, Alert } from 'react-native'
import {DATA} from '../data'
import { theme } from '../theme'

export const PostScreen = ({navigation}) => {
  const postId = navigation.getParam('postId')

  const post = DATA.find(p => p.id === postId)

  const removeHandler = () => {
    Alert.alert(
      "Удаление поста",
      "Вы точно хотите удалить пост?",
      [
        {
          text: "Отменить",
          style: "cancel",
        },
        {text: "Удалить", onPress: () => {}, style: 'destructive'}
      ],
      {cancelable: false},
    );
  }

  return (
    <ScrollView>
      <Image source={{uri: post.img}} style={styles.image}></Image>
      <View style={styles.textWrap}>
        <Text style={styles.title}>{post.text}</Text>
      </View>
      <Button title="Удалить" color={theme.danger_color} onPress={removeHandler}></Button>
    </ScrollView>
  )
}

PostScreen.navigationOptions = ({navigation}) => {
  const date = navigation.getParam('date')
  return {
    headerTitle: 'Мой пост ' + new Date(date).toLocaleDateString(),
  }
}

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: 200,
  },
  textWrap: {
    padding: 10,
  },
  title: {
    fontFamily: 'open-regular',

  }
})
