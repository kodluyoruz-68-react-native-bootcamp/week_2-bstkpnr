import React, { useState } from 'react';
import { Text, View, TextInput, TouchableOpacity, StyleSheet,Dimensions } from 'react-native';

const AddTo = ( props ) => {
    const [text, setText] = useState('') ;

    return (
        <View style={styles.container}>
            <View style={styles.inputContainer}>
                <TextInput
                    testID="input"
                    value={text}
                    placeholder="Add todo"
                    onChangeText={(value) => setText(value)}/>
            </View >
            <TouchableOpacity
                    testID="button"
                    style={styles.buttonContainer}
                    onPress={() => {
                    props.addTodoList(text);
                    setText('');
                }}>
                <Text style={styles.buttonText}>ADD</Text>
            </TouchableOpacity>
            </View>

    );


}
const styles=StyleSheet.create({
    inputContainer: {
        backgroundColor:'#b4a8a7',
        padding: 10,
        margin: 10,
        borderRadius: 10
    },
    container: {
        backgroundColor:'#7a2d47',
        padding: 10,
        margin: 15,
        borderRadius: 10
    },
    buttonContainer: {
        backgroundColor:'#fbf4ef',
        padding: 10,
        margin: 5,
        width: Dimensions.get('window').width /3,
        alignSelf: 'center',
        borderRadius:15,
        
    },
    buttonText: {
        color:'#7a2d47',
        fontWeight: 'bold',
        textAlign: 'center'
    
    }
    

});
export default AddTo;