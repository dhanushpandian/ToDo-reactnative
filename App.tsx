import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import List from './app/screens/List';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Details from './app/screens/Details';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from './firebaseConfig';
import Login from './app/screens/Login';
import { useEffect, useState } from 'react';
import Login1 from './app/screens/Login1';

const Stack = createNativeStackNavigator();
const Inside=createNativeStackNavigator();

// function InsideLayout(){
//   return (
//     <Inside.Navigator>
//       <Inside.Screen name="My Todos" component={List} />
//       <Inside.Screen name="Details" component={Details} />
//     </Inside.Navigator>
//   )
// }
// export default function App() {
//   // const [authenticated,setauthenticated]=useState(false);  
//   // useEffect(()=>{
//   //   onAuthStateChanged
//   // })
//   const[user,setuser]=useState<User|null>(null);
//   useEffect(()=>{
//     onAuthStateChanged(FIREBASE_AUTH,(user)=>{
//       console.log('user',user);
//       setuser(user);
//     })
//   })
//   return (
//     <NavigationContainer>
//       <Stack.Navigator initialRouteName='Login1'>
//         {user ? <Stack.Screen name="Inside" component={InsideLayout} /> :
//           <Stack.Screen name="todo" component={List} />
//           <Stack.Screen name="Login" component={Login} />
//         }
        
//       </Stack.Navigator>

//     </NavigationContainer>
//   );
// }


export default function App() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user);
    });

    // Unsubscribe from the auth state listener when component unmounts
    return unsubscribe;
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={user ? 'Inside' : 'todo'}>
        {user ? (
          <Stack.Screen name="Inside" component={InsideLayout} />
        ) : (
          <>
            <Stack.Screen name="Login" component={Details} />
            {/* <Stack.Screen name="todo" component={List} /> */}
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

function InsideLayout() {
  return (
    <Stack.Navigator>
       <Stack.Screen name="Login" component={Login1} />
      <Stack.Screen name="Details" component={Details} />
      {/* <Stack.Screen name="My Todos" component={List} /> */}
    </Stack.Navigator>
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
