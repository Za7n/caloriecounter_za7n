import React, { useContext, useState, useEffect } from 'react';
import { View, Text, StyleSheet, TextInput, Button, ScrollView, alert } from 'react-native';
import axios from 'axios'

const FoodCalcSearch = () => {  
    const [search, setsearch] = useState('');
    const [searchresult, setsearchresult] = useState(null);
    const [apidata, setapidata] = useState(null);

    let found = (searchresult !== null && searchresult !== undefined);
    //Add user feedback if the what you've sent doesnt come back   

    const options = {
        method: 'GET',
        url: 'https://calorieninjas.p.rapidapi.com/v1/nutrition',
        params: {query: search},
        headers: {
          'X-RapidAPI-Host': 'calorieninjas.p.rapidapi.com',
          'X-RapidAPI-Key': '11b583a91fmsh03770874f8896a9p171d31jsn62f8f3efcd66'
        }
      };  

    function FoodRequest() {
    axios.request(options)
    .then((response) => {
        //console.log(response.data);
        console.log(response.data.items[0]);
        setsearchresult(response.data.items[0]);
    })
    .catch(function (error) {
        console.error(error);
    });
    
};
//if statement below, terinary if statement
    return (
        <ScrollView style={styles.bc}>
            <View style={styles.bc}>
            <Text style={styles.textLabel}>Food Calorie search bar:</Text>
            <Text style={styles.textLabel}>Search the food you wish to find</Text>
            <Text style={styles.textlook}>You can search up almost any food you wish. The weight of the food is also considered e.g. 100g white Rice</Text>
                <TextInput
                    style={styles.textInput}
                    value={search}
                    onChangeText={search => setsearch(search)}
                />
                {
                    (found) ? <Text style={styles.textlook}>Calories: {searchresult.calories}</Text>: null 
                }
                <Text style={styles.textlook}>The serving size of the calories. The default is 100g if not specified:</Text>
                {
                    (found) ? <Text style={styles.textlook}>{searchresult.serving_size_g}g</Text>: null 
                }

                <Button 
                    title="Search"
                    onPress={() => { 
                        FoodRequest()
                }}/>
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    bc: {
        backgroundColor: '#FFF',
        flex: 1,
    },
    bold: {
        fontWeight: 'bold',
        paddingLeft: 10,
        fontSize: 18,
        paddingBottom: 13,
    },
    textlook: {
        paddingLeft: 10,
        fontSize: 14,
        paddingBottom:10,
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

export default FoodCalcSearch;