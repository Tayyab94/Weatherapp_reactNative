import React from 'react'
import { StyleSheet, Text, Pressable } from "react-native"
const TodoItems = (props) => {

    const deleteTodoHandler = () => {
        props.onDeleteItemFunction(props.itemId)
    }
    return (
        <>
            <Pressable onPress={deleteTodoHandler}>
                <Text style={styles.todo}>{props.Text}</Text>
            </Pressable>
        </>
    )
}

export default TodoItems

const styles = StyleSheet.create({
    todo: {
        borderWidth: 1,
        borderColor: '#cccccc',
        textAlign: "center",
        marginTop: 20,
        backgroundColor: 'orange',
        marginVertical: 3,
        color: 'white',
        fontSize: 18,
        borderRadius: 18,
    },
})
