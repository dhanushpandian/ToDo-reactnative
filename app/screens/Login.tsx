import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import React, { useState } from 'react'
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword } from '@firebase/auth';

export default function Login() {
        const[email,setEmail]=useState('');
        const[password,setpassword]=useState('');
        const auth=getAuth()
        const signUp=async() =>{
           const after = await createUserWithEmailAndPassword(auth,email,password);
           alert('check your emailss');
        }
        const signIn=async() =>{
           const user = await signInWithEmailAndPassword(auth,email,password);
           console.log("logging in: ",user);
        }


  return (
    <View style={styles.container}>
        <TextInput placeholder='Email:' onChangeText={(text: string) => setEmail(text)} value={email} style={styles.input} />
        <TextInput placeholder='Password:' textContentType='password'  onChangeText={(text: string) => setpassword(text)} value={password} style={styles.input} />
        <Button title="Sign Up" onPress={signUp}  />
        <Button title="Sign In" onPress={signIn}  />

    </View>
  )
}
const styles=StyleSheet.create(
    {
        input: {
            marginVertical:20,
            height: 50,
            borderWidth: 1,
            borderRadius:4,
            padding: 10,
            backgroundColor: '#fff',
          },
          container:{
            paddingVertical:20,
            marginHorizontal:20,
            flexDirection:'column',
          }
    }
)