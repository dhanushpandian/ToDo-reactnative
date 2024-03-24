import { View, Text, Button, StyleSheet, TextInput, FlatList, Touchable, TouchableOpacity } from 'react-native';
import React, { useEffect, useState } from 'react';
import { FIRESTORE_DB } from '../../firebaseConfig';
import { addDoc, collection, deleteDoc, doc, Firestore, onSnapshot, updateDoc } from 'firebase/firestore';
import Ionicons from '@expo/vector-icons/Ionicons';
import { Entypo } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
export interface TODO{
  title:string,
  done:boolean,
  id:string
}

const List = ({ navigation }: any) => {
  const [todos, setTodos] = useState<TODO[]>([]);
  const [todo, setTodo] = useState('');
  const [c, setc] = useState(0);

  const incc = () => {
    setc(c + 1);
  };

  useEffect(() => {
    const todoRef = collection(FIRESTORE_DB, 'todos');
    const subs = onSnapshot(todoRef, {
      next: (snapshot) => {
        console.log("updatedd");
        const todos: any[] = [];
        snapshot.docs.forEach((doc) => {
          console.log(doc.data());
          todos.push({
            id: doc.id,
            ...doc.data()
          }as TODO);
        });
        setTodos(todos);
      },
    });
    return () => subs();
  }, []);

  useEffect(() => {
    if (c > 0) {
      addDoc(collection(FIRESTORE_DB, 'todos'), { title: todo, done: false });
    }
  }, [c]);

  const addTodo = async () => {
    incc();
    console.log(c);
  };

  const rendertodo=({item}:any)=>{
    const ref=doc(FIRESTORE_DB,`todos/${item.id}`);
    const toggleDone=async()=>{
      updateDoc(ref,{done: !item.done});
    }
    const deleteItem=async()=>{
      deleteDoc(ref);
    }
    return(
      <View style={styles.todocontainer}>
      <TouchableOpacity onPress={toggleDone} style={styles.todo}>
        {item.done && <AntDesign name="checkcircle" size={24} color="green" />}
        {!item.done && <Entypo name='circle' size={24} color="black" />}
        <Text style={styles.todotext}>{item.title}</Text>
      </TouchableOpacity>
      <Ionicons name="trash-bin-outline" size={24} color="red" onPress={deleteItem} />
    </View>
    )
  }
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TextInput placeholder='Add new Todo' onChangeText={(text: string) => setTodo(text)} value={todo} style={styles.input} />
        <Button title="add" onPress={addTodo} disabled={todo === ''} />
      </View>
      {todos.length > 0 &&(
        <FlatList data={todos} renderItem={(item) => rendertodo(item)} keyExtractor={(todo: TODO) => todo.id} />
      )}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 20,
  },
  form: {
    marginVertical: 18,
    flexDirection: 'row',
    alignItems: 'center',
  },
  input: {
    flex: 1,
    height: 40,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  todocontainer:{
    flexDirection: 'row',
    alignItems:'center',
    backgroundColor:'#ffff',
    padding:10,
    marginVertical:4
  },
  todotext:{
    flex:1,
    paddingHorizontal:8
  },
  todo:{
    flex:1,
    flexDirection:'row',
    alignItems:'center',

  }
});
