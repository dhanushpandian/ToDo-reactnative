import { View, Text, Button} from 'react-native'
import React, { useEffect } from 'react'
import { FIRESTORE_DB } from '../../firebaseConfig'
import { addDoc, collection } from 'firebase/firestore'

const List = ({ navigation }: any) => {

    useEffect(()=>{
        addDoc(collection(FIRESTORE_DB,'todos'),{title:'i am a test', done :false})
    },[]);
    const addTodo = async () => {
        
    };
  return (
    <View>
      <Text>List</Text>
      
    </View>
  )
}

export default List;