import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, FlatList, Alert} from 'react-native';
import AddTodo from './components/AddTodo';
import Header from './components/Header'
import TodoItem from './components/TodoItem';

export default function App() {
  const [ todos, setTodos] = useState([
    {text: 'Buy coffee', key: 1},
    {text: 'Create a website', key: 2},
    {text: 'Play cricket', key: 3}
  ]);

  const pressHandler =(key) =>{
      setTodos((prevTodos)=>{
        return prevTodos.filter(todo => todo.key != key)
      });
  }

  const submitHandler =(text) =>{

    if(text.length > 2){
        setTodos((prevTodos)=> {
        return [
          {text: text, key: Math.random().toString()},
          ...prevTodos
        ];
      });
    } else {
      Alert.alert('OOPS !', 'ADD MUST TWO WORD');
    }
  }
 
  return (
    <View style={styles.container}>
      <Header/>
    <View style={styles.content}>
      <AddTodo submitHandler={submitHandler}/>
      <View style={styles.list}>
        <FlatList
        data={todos}
        renderItem={({item})=>(
       <TodoItem item={item} pressHandler={pressHandler} />
        )}
        />
      </View>
    </View>
       </View>  
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content:{
    padding: 40,
  },
  list:{
    marginTop:20,
  }
});
