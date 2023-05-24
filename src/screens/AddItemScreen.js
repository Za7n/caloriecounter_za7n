import React, { useContext, useState } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView } from 'react-native';
import ItemContext from '../../contexts/ItemContext';
      
const AddItemScreen = ({navigation, route}) => {
    const {create} = useContext(ItemContext);
    const [datetime, setDatetime] = useState("");
    const [pagesread, setPagesread] = useState("");

    //ScrollView was added so the user can see each field when scrolling down.

//Date scroller 
    
    return (
        <ScrollView style={styles.bc}>
            <View style={styles.bc}>
                <Text style={styles.textLabel}>Enter the Date:</Text>
                <TextInput       
                    style={styles.textInput} 
                    placeholder="type here"
                    value={datetime} 
                    //keyboardType='numbers-and-punctuation' // The keyboardtype was added to textinput fields that may require numerical input, allowing for users to easily access numbers.
                    onChangeText={(text) => {
                        setDatetime(text);
                    }}
                />
                <Text style={styles.textLabel}>Enter the calories you have had:</Text>
                <TextInput 
                    multiline
                    style={styles.textInput} 
                    placeholder="type here"
                    value={pagesread} 
                    //keyboardType='numbers-and-punctuation'
                    onChangeText={(text) => {
                        setPagesread(text);
                    }}
                />
            
                <Button 
                    title="Submit Item"
                    onPress={() => {
                        create( datetime, pagesread, () => navigation.pop());            
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
        marginBottom: 270 // The marginBottom was added to create space so the user can see all the fields, without this the user would not be able to see what they are typing at the bottom field. 
    },
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
        fontWeight: 'bold',
    },
});

export default AddItemScreen;