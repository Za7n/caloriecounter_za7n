import React, { useContext, useEffect, useReducer } from "react";
import { View, Text, StyleSheet, FlatList, Pressable} from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import ItemContext from '../../contexts/ItemContext';
import { Ionicons } from '@expo/vector-icons';

const ListViewScreen = ({navigation}) => {
const {state, remove} = useContext(ItemContext);
console.log (state)
    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Pressable onPress={() => navigation.navigate("AddCalorie")}>
                    <Ionicons name="ios-create" size={24} color="#FFF" style={styles.Test} />
                </Pressable>
            )
        })
    }, [state]);
    
    return (
        <View style={styles.bc}>
            <FlatList 
                data={state}
                keyExtractor={(a) => a.id.toString()}
                renderItem={({item}) => {
                    return (
                        <Pressable onPress={() => {
                            navigation.navigate("ViewCalorie", {
                                id: item.id,
                                datetime: item.datetime,
                                pagesread: item.pagesread,    
                            });
                        }}>
                            <View style={styles.itemContainer}>
                                <View style={styles.dateContainer}>
                                    <Text style={styles.dateText}>
                                        {item.datetime}
                                    </Text>
                                </View>
                            
                                <Pressable onPress={() => {
                                 remove(item.id);     
                                    }}>
                                            <MaterialIcons name="delete" size={38} color={"#f59120"} />
                                </Pressable>
                                


                            </View>
                        </Pressable>
                    )
                }}
            />
        </View>
    );
};
    
const styles = StyleSheet.create({
    f: {
        flex: 10,
    },
    bc: {
        backgroundColor: '#FFFFFF',
        flex: 1,
    },
    Test: {
        paddingRight: 5 
    },
    John: {
        backgroundColor: 'white',
    },
    itemContainer: {
        marginTop: 15,
        padding: 15,
        borderBottomWidth: 1,
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
    },
    dateContainer: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold',
        flex: 1,
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

export default ListViewScreen;