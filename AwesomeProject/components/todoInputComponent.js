import React from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'
const TodoInputComponent = (props) => {
    return (
        <>
            <View style={styles.flexForTodo}>
                <TextInput style={styles.textInputStyle} placeholder='Add Your Todo'
                    onChangeText={props.onChangeInputFunction} value={props.valInpout} />
                <Button color={'orange'} title='Add todo' onPress={props.onAddInputFunction} />
            </View>

        </>
    )
}

export default TodoInputComponent

const styles = StyleSheet.create({
    flexForTodo: {
        marginTop: 30,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 7,
        paddingBottom: 10,
        borderBottomColor: '#cccccc',

    },
    textInputStyle: {
        borderWidth: 1,
        borderColor: '#cccccc',
        width: '75%',
        padding: 6,
        borderRadius: 200,
        fontSize: 18,
        color: 'orange',
        paddingLeft: 13
    },
})
