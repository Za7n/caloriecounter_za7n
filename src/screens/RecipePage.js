import React, { useContext, useEffect, useReducer } from "react";
import {View, StyleSheet, FlatList, Text, Pressable} from 'react-native';
import {MaterialIcons} from '@expo/vector-icons';
import RecipeContext from "../../contexts/recipeContext";


const RecipePage = ({navigation}) => {
const {state, remove} = useContext(RecipeContext);

    useEffect(() => {
            navigation.setOptions({
                headerRight: () => (
                    <Pressable onPress={() => 
                        navigation.navigate("AddRecipe")}>

                     <MaterialIcons name="add" size={24} color={"black"} />

                     </Pressable>
                )
                 })

    }, [state]);


    return(
        <View>
            <FlatList
                data={state}
                keyExtractor = {
                    (e) => {
                        return e.id.toString(); 
                    } }

                renderItem={({item}) => {

             return  (

        <Pressable onPress={() => {
                navigation.navigate('ViewRecipe', {
                    id: item.id,
                    recipe: item.recipe,
                    information: item.information,
                    ingredients: item.ingredients,
                    ecomments: item.ecomments,
                });
            }}>
            <View style={styles.itemContainer}>
            <View style={styles.dateContainer}>

            </View>
                 <Text style={styles.titleText}>{item.recipe} </Text>
                    <Pressable onPress={() => {
                          remove(item.id);     
                        }}>
                        <MaterialIcons name="delete" size={38} color={"#f59120"} />
                    </Pressable>
            </View>
        </Pressable>
             )
    } }
            />
        </View>
    );
};

const styles = StyleSheet.create({
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center'
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
    },
    titleText: {
        fontSize: 20,
        paddingLeft: 15,
        flex: 1,
        fontWeight: 'bold',
        alignSelf: 'flex-start',
        color: '#f59120',
    }
});

export default RecipePage;