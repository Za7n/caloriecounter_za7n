import React from "react";
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native'

const ViewRecipePage = ({navigation, route}) => {

    const { id, recipe, information, ingredients, ecomments, } = route.params;

    return (
        <ScrollView>

        <View>

            <Text style={styles.titleText}>
                ID:
            </Text>

            <Text style={styles.text}>
                {id}
            </Text>
            
            <Text style={styles.titleText}>
                Recipe:
            </Text>

            <Text style={styles.text}>
                {recipe}
            </Text>
            
            <Text style={styles.titleText}>
                Recipe information:
            </Text>

            <Text style={styles.text}>
                {information}
            </Text>
            
            <Text style={styles.titleText}>
                Recipe ingredients:
            </Text>

            <Text style={styles.text}>
                {ingredients}
            </Text>
            
            <Text style={styles.titleText}>
                Additional comments:
            </Text>

            <Text style={styles.text}>
                {ecomments}
            </Text>

            <Button
                    title="Edit Recipe"
                    color= '#f59120'
                     onPress={(() => {
                        navigation.navigate('EditRecipe', {id, id}) 
                            
                    })}
            />


        </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    titleText: {
        fontSize: 25,
        paddingLeft: 15,
        flex: 1,
        fontWeight: 'bold',
        color: '#f59120',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        marginTop: 10,
    },
    
    text: {

        fontSize: 20,
        paddingLeft: 15,
        flex: 1,
        fontWeight: 'bold',
        justifyContent: 'space-between',
        flexDirection: 'row', 
        marginTop: 10,
    },
});


export default ViewRecipePage;