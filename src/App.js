import React, { useState } from "react";
import { StyleSheet,FlatList, View, SafeAreaView, Text} from "react-native";
import AddTo from './components/AddTo';
import TodoItem from './components/TodoItem';

const App = () => {
    const [todos, setTodos] = useState([])

    function addToDo(text) {
        if (text != ''){
            const val = {
            id: todos.length,
            todo: text,
            isDone: false
        }
        const myArray = [val, ...todos]
        setTodos(myArray);
    }}

    function done(todoId) {
        const myArray = [...todos];
        const todoIndex = myArray.findIndex(item => item.id == todoId);

        myArray[todoIndex].isDone = !myArray[todoIndex].isDone;

        setTodos(myArray);
    }

    function remove(todoId) {
        const myArray = [...todos];
        const todoIndex = todos.findIndex(t => t.id == todoId);

        myArray.splice(todoIndex, 1);
        todos(myArray);
    }
                                                                     

    const renderTodo = ({ item }) => { 
        return (
            <TodoItem
                data={item}                            
                onDone={() => done(item.id)}     
                onRemove={() => remove(item.id)}       
            />
        )
    };

    return ( 
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.text}>TODO</Text>
                <Text style={styles.counter}>{todos.filter(t => t.isDone === false).length}</Text>
            </View>
            <AddTo
                addTodoList={(text) => addToDo(text)}
            />
            <FlatList
                testID="list"
                keyExtractor={(item, index) => index.toString()}
                data={todos}
                renderItem={renderTodo}/>
            </SafeAreaView>
    );
}
const styles=StyleSheet.create({
    container: {
        borderRadius:10,
        flex: 1,
        backgroundColor: '#fbf4ef'
    },
    header: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        padding: 5,
        borderColor:'#7a2d47',
        alignItems: 'center'
    },
    text: {
        fontSize: 50,
        fontWeight: 'bold',
        color: "#7a2d47",
        fontStyle:'italic'
    },
    counter: {
        fontSize: 35,
        color: "#7a2d47",
        fontWeight:'bold'
    },
   
});
export default App;
                  
                  
                  
/**
 * TextInput: testID="input" (component which is user types the todo text)
 * TouchableOpacity: testID="button" (component which is saves the todo to list)
 * FlatList: testID="list" (list of todo)
 */

 
    // ...
  
    
   