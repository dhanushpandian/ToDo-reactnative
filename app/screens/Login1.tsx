import { View, Text, TextInput, ActivityIndicator, Button, KeyboardAvoidingView } from 'react-native'
import React, { useState } from 'react'
import { FIREBASE_AUTH } from '../../firebaseConfig';
import { StyleSheet } from 'react-native';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
const Login1 = () => {
    const [email,setemail]=useState('');
    const [password, setpassword]=useState('');
    const [loading,setloading]=useState(false);
    const auth=FIREBASE_AUTH;
     
    const signIn=async()=>{
      setloading(true);
      try{
        const response=await signInWithEmailAndPassword(auth,email,password);
        console.log(response);
        alert('check your emails');
      }catch(error){
        console.log(error);
        alert("Registration failed: "+ error);
      }finally{
        setloading(false);
      }
    }
    const signUp=async()=>{
      setloading(true);
      try{
        const response=await createUserWithEmailAndPassword(auth,email,password);
        console.log(response);
        alert('check your emails');
      }catch(error: any){
        console.log(error);
        alert("Sign in failed: "+ error.message);
      }finally{
        setloading(false);
      }
    }

  return (
    <View style={styles.container}>
      <KeyboardAvoidingView behavior='padding'>

      <TextInput value={email} placeholder='Email' autoCapitalize='none' onChangeText={(value) => setemail(value)} style={styles.input}/>
      <TextInput value={password} placeholder='Password' autoCapitalize='none' onChangeText={(value) => setpassword(value)} style={styles.input} secureTextEntry={true}/>
      {loading ? <ActivityIndicator size="large" color="#0000ff" />:
      <>
      <Button title='Log in' onPress={()=>signIn()}/>  
      <Button title='Sign Up' onPress={()=>signUp()}/>  
      </>
    }

    </KeyboardAvoidingView>
    </View>
  )
}

export default Login1

const styles=StyleSheet.create({
  container:{
    marginHorizontal:20,
    flex:1,
    justifyContent:'center',
  },
  input:{
    marginVertical:4,
    height:50,
    borderWidth:1,
    borderRadius:10,
    padding:10,
    backgroundColor:"#ffff"
  }
})