import React from 'react';
import {Text, TouchableOpacity,StyleSheet} from 'react-native';

const TodoItem = ( props ) => { 
    return ( 
        <TouchableOpacity
            testID="button"
            style={styles.container}
            onPress={() => props.onDone()}
            onLongPress={()=> props.onRemove()}>
            <Text style={[ styles.text, { textDecorationLine: props.data.isDone ? 'line-through' : null }]}>{props.data.todo}</Text>
        </TouchableOpacity>

    );
}
const styles=StyleSheet.create({
    container: {
        backgroundColor: '#b4a8a7',
        padding:5,
        margin:10,
        borderRadius:12,
    },
    text: {
        fontSize: 18
        
    
    }
});
export default TodoItem;