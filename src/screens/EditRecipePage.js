import React, { useContext } from "react"; 
import {View, Text, StyleSheet, TextInput, Button,} from 'react-native';
import react, {useState} from 'react';
import RecipeContext from "../../contexts/recipeContext";


const EditRecipePage = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(RecipeContext);
    const currentItem = state.find((e) => e.id === id);
    const [recipe, setRecipe] = useState(currentItem.recipe);
    const [information, setInformation] = useState(currentItem.information);
    const [ingredients, setIngredients] = useState(currentItem.ingredients);
    const [ecomments, setEcomments] = useState(currentItem.ecomments);

    return (
        <View> 
            <Text style= {styles.textLabel}>Enter Name of Recipe:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={recipe}
             onChangeText={(text) => {setRecipe(text);}}
             />
            <Text style= {styles.textLabel}>Recipe Information:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={information}
             onChangeText={(text) => {setInformation(text);}}
             />
            <Text style= {styles.textLabel}>Enter Recipe ingredients:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={ingredients}
             onChangeText={(text) => {setIngredients(text);}}
             />
            <Text style= {styles.textLabel}>Additional Comments:</Text>
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
                    update(
                   currentItem.id, recipe, information, ingredients, ecomments, () => navigation.pop()
                   );
                }} 
             />
        </View>
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

export default EditRecipePage; 