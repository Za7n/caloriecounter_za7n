import React from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';

const ViewItemScreen = ({navigation, route}) => {
    const { id, datetime, pagesread } = route.params;
    
    //ScrollView was added so the user can see each field when scrolling down.
    return (
        <ScrollView style={styles.bc}>
            <View style={styles.bc}>
                <Text style={styles.textstyle}>Date:</Text>
                <Text style={styles.textstyle2}>{datetime}</Text>
                <Text style={styles.textstyle}>Calories had:</Text>
                <Text style={styles.textstyle2}>{pagesread}</Text>
                <Button 
                    title="Edit Entry" onPress={(() => {
                        navigation.navigate('EditCalorie', {id, id})        
                    })}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    textstyle: {
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 10,
    },
    textstyle2: {
        fontSize: 18,
        paddingLeft: 10,
        paddingBottom: 15,
    },
    bc: {
        backgroundColor: '#FFF',
        flex: 1,
        paddingTop: 5,
    },
    textInput: {
        fontSize: 20,
        padding: 10,
        margin: 5,
        borderWidth: 1,
    },
    textLabel: {
        fontSize: 18,
    },
});

export default ViewItemScreen;