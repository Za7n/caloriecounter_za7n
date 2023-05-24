import React from "react";
import {View, StyleSheet, Text, Button, ScrollView} from 'react-native'

const ViewWeightPage = ({navigation, route}) => {

    const { id, cweight, fweight, cpicture, csweight, } = route.params;

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
                Current Weight:
            </Text>

            <Text style={styles.text}>
                {cweight}
            </Text>
            
            <Text style={styles.titleText}>
                Weight Goal:
            </Text>

            <Text style={styles.text}>
                {fweight}
            </Text>
            
            <Text style={styles.titleText}>
                Aim:
            </Text>

            <Text style={styles.text}>
                {cpicture}
            </Text>
            
            <Text style={styles.titleText}>
                Insperational quote of the day:
            </Text>

            <Text style={styles.text}>
                {csweight}
            </Text>

            <Button 
                    title="Edit Weight"
                    color= '#f59120'
                     onPress={(() => {
                        navigation.navigate('EditWeight', {id, id})        
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

export default ViewWeightPage;