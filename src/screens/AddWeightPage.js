import React, { useContext, useEffect } from "react"; 
import {View, Text, StyleSheet, TextInput, Button, ScrollView, Pressable, Image} from 'react-native';
import react, {useState} from 'react';
import {MaterialIcons} from '@expo/vector-icons';
import WeightContext from "../../contexts/WeightContext";



const AddWeightPage = ({navigation, route}) => {
    const {create} = useContext(WeightContext);
    const [cweight, setWeight] = useState("");
    const [fweight, setFuture] = useState("");
    const [cpicture, setCurrentPicture] = useState("");
    const [csweight, setCurrentWeight] = useState("");



    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => 
                    navigation.navigate('Camera')}>

                 <MaterialIcons name="camera-enhance" size={24} color={"black"} />

                 </Pressable>
            )
             })

  })

    return (
    <ScrollView>

        <View> 
            <Text style= {styles.textLabel}>Enter Current Weight:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={cweight}
             onChangeText={(text) => {setWeight(text);}}
             />

            <Text style= {styles.textLabel}>Enter Weight Goal:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={fweight}
             onChangeText={(text) => {setFuture(text);}}
             />

            <Text style= {styles.textLabel}>Aim:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={cpicture}
             onChangeText={(text) => {setCurrentPicture(text);}}
             />

            <Text style= {styles.textLabel}>Insperational quote of the day:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={csweight}
             onChangeText={(text) => {setCurrentWeight(text);}}
             />

             <Button
                title="Submit Item"
                color= '#f59120'
                onPress={() => {
                    create( cweight, fweight, cpicture, csweight,  () => navigation.pop());
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

export default AddWeightPage; 