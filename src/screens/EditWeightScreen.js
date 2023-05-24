import React, { useContext } from "react"; 
import {View, Text, StyleSheet, TextInput, Button,} from 'react-native';
import react, {useState} from 'react';
import WeightContext from "../../contexts/WeightContext";


const EditWeightPage = ({navigation, route}) => {
    const {id} = route.params;
    const {state, update} = useContext(WeightContext);
    const currentItem = state.find((e) => e.id === id);
    const [cweight, setWeight] = useState(currentItem.cweight);
    const [fweight, setFuture] = useState(currentItem.fweight);
    const [cpicture, setCurrentPicture] = useState(currentItem.cpicture);
    const [csweight, setCurrentWeight] = useState(currentItem.csweight);

    return (
        <View> 
            <Text style= {styles.textLabel}>Type in current weight:</Text>
            <TextInput
             style={styles.TextInput} 
             placeholder="Type here"
             value={cweight}
             onChangeText={(text) => {setWeight(text);}}
             />
            <Text style= {styles.textLabel}>Weight Goal:</Text>
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
                    update(
                   currentItem.id, cweight, fweight, cpicture, csweight, () => navigation.pop()
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

export default EditWeightPage; 