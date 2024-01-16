import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LoginScreen from "./LoginScreen";
import RegisterScreen from './RegisterScreen ';
import { StyleSheet, View, Text, Button, TouchableOpacity, TextInput, ScrollView, FlatList } from 'react-native';
import { useState } from 'react';
import TodoItems from './components/todoItems';
import TodoInputComponent from './components/todoInputComponent';
import SearchBar from './components/weatherComponents/searchBar';
import Weather from './components/weatherComponents/weather';

const Stack = createStackNavigator();

import Spinner from 'react-native-loading-spinner-overlay';



export default function App() {

  const [todoTxtInpout, setTodoTxtInput] = useState('')
  const [todosList, setTodosList] = useState([])

  const [loading, setLoading] = useState(false);

  const [cityNameSaved, setCityNameSaved] = useState('')
  const startLoading = () => {
    console.log("hela")
    setLoading(true);

    // Simulate an asynchronous operation
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  };

  const enterTodotext = (ar) => {
    setTodoTxtInput(ar);
  }

  const addTodoText = () => {
    if (todoTxtInpout !== '') {

      // setTodosList([...todosList, todoTxtInpout])
      setTodosList([...todosList, { text: todoTxtInpout, id: (todosList.length + 1).toString() }])
      // setTodoTxtInput('')
    } else {
      alert('Writer do first')
    }
  }


  const deleteTodo = (id) => {
    var todos = todosList.filter((item) => item.id != id);
    if (!todos) {
      alert("Todo with Id " + id + " Not found");
    }
    else {
      setTodosList(todos)
    }
  };


  function cityNameHandler(cityName) {
    setCityNameSaved(cityName)
  }
  return (
    // <NavigationContainer>
    //   <Stack.Navigator initialRouteName='Login'>
    //     <Stack.Screen name='login' component={LoginScreen}></Stack.Screen>
    //     <Stack.Screen name='Register' component={RegisterScreen} />
    //   </Stack.Navigator>
    // </NavigationContainer>


    // <View style={styles.container}>

    //   <TodoInputComponent onChangeInputFunction={enterTodotext} onAddInputFunction={addTodoText} valInpout={todoTxtInpout} />

    //   {/* <ScrollView>
    //     {
    //       todosList.map((item, index) => {
    //         return <Text style={styles.todo} key={index}>{item} </Text>
    //       })
    //     }
    //   </ScrollView> */}

    //   <FlatList style={styles.todoListView} data={todosList} renderItem={(dotoItem) => {
    //     return (
    //       <TodoItems Text={dotoItem.item.text} itemId={dotoItem.item.id} onDeleteItemFunction={deleteTodo} />
    //     );
    //   }} keyExtractor={(item, index) => {
    //     return (
    //       item.id
    //     )
    //   }}>

    //   </FlatList>
    // </View>


    <View style={styles.container}>
      <SearchBar cityName={cityNameHandler} />
      <Weather cityName={cityNameSaved} />

      {/* Spinner component */}
      <Spinner
        visible={loading}
        textContent={'Loading...'}
        textStyle={{ color: '#FFF' }}
      />
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: "center"
  },

  todoListView: {
    height: '65%',
  }
})
