import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './app/screens/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from './app/screens/Details';
import { onAuthStateChanged } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';

const Stack = createNativeStackNavigator();

export default function App() {
  // onAuthStateChanged(FIREBASE_AUTH,(user)=>{
  //   if(user){
  
  //   }
  //   else{
  
  //   }
  // })
  return (
    <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen name="todo" component={List} />
      <Stack.Screen name="details" component={Details} />
      </Stack.Navigator>

    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
