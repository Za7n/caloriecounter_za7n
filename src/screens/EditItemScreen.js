import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import ItemContext from '../../contexts/ItemContext';

const EditItemScreen = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(ItemContext);
    const currentItem = state.find((a) => a.id === id);
    const [datetime, setDatetime] = useState(currentItem.datetime);
    const [pagesread, setPagesread] = useState(currentItem.pagesread);

    //ScrollView was added so the user can see each field when scrolling down.
    return (
        <ScrollView style={styles.bc}> 
            <View style={styles.bc}>
                <Text style={styles.textLabel}>Enter the Date:</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="type here"
                    value={datetime} 
                    keyboardType='numbers-and-punctuation'
                    onChangeText={(text) => {
                        setDatetime(text);
                    }}
                />
                <Text style={styles.textLabel}>Enter the caloires had:</Text>
                <TextInput 
                    style={styles.textInput} 
                    placeholder="type here"
                    value={pagesread} 
                    //keyboardType='numbers-and-punctuation'
                    multiline
                    onChangeText={(text) => {
                        setPagesread(text);
                    }}
                />
                <Button 
                    title="Submit Item"
                    onPress={() => {
                        update(
                            currentItem.id, pagesread, datetime, () => navigation.pop()
                        );            
                    }}
                />
            </View>
            <View style={styles.space}>

            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bc: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    space: {
        marginBottom: 270,
    },
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 20,
        paddingLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default EditItemScreen; 