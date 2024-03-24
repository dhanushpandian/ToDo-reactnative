import { View, Text, Button } from 'react-native'
import React from 'react'
import { NavigationProp } from '@react-navigation/native'
import { FIREBASE_AUTH } from '../../firebaseConfig';

interface routerprop{
  navigation:NavigationProp<any,any>;
}
export default function Details({navigation}:routerprop) {
  return (
    <View style={{ flex:1, justifyContent: 'center' ,alignItems:'center'}}>
      <Button onPress={() => navigation.navigate('todo')} title="Go to Todo" />
      <Button onPress={() => FIREBASE_AUTH.signOut()} title="Logout" />
   </View>
  )
}