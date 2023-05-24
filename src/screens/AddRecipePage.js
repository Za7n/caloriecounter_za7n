import React, { useContext, useEffect } from "react"; 
import {View, Text, StyleSheet, TextInput, Button, ScrollView, Pressable} from 'react-native';
import react, {useState} from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import RecipeContext from "../../contexts/recipeContext";
//import

const AddRecipePage = ({navigation, route}) => {
    const {create} = useContext(RecipeContext);
    const [recipe, setRecipe] = useState("");
    const [information, setInformation] = useState("");
    const [ingredients, setIngredients] = useState("");
    const [ecomments, setEcomments] = useState("");


    return (
    <ScrollView>

        <View> 
            <Text style= {styles.textLabel}>Enter the title of Recipe:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={recipe}
             onChangeText={(text) => {setRecipe(text);}}
             />

            <Text style= {styles.textLabel}>Information of the recipe:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={information}
             onChangeText={(text) => {setInformation(text);}}
             />

            <Text style= {styles.textLabel}>Enter ingredients for recipe:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={ingredients}
             onChangeText={(text) => {setIngredients(text);}}
             />

            <Text style= {styles.textLabel}>Enter extra comments about the recipe:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={ecomments}
             onChangeText={(text) => {setEcomments(text);}}
             />

             <Button
                title="Submit Item"
                color= '#f59120'
                onPress={() => {
                    create( recipe, information, ingredients, ecomments, () => navigation.pop());
                }} 
             />
        </View>
    </ScrollView>
    );
};

const styles = StyleSheet.create({
    TextInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 18,
        paddingLeft: 10,
        marginTop: 10,
    },
});

export default AddRecipePage; 