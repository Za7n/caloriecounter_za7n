import React from 'react';
import { useReducer, useEffect } from "react";
import { actionTypes } from "../helpers/actionHelpers";
import AsyncStorage from '@react-native-async-storage/async-storage';

const AS_STORAGE_KEY = "super_secret_key";

const ItemContext = React.createContext();

let dummydata = [];

const reducer = (state, action) => {
    switch (action.type) {
        case actionTypes.create:
            return [
                ...state,
                {
                    id: Math.floor(Math.random() * 1000000),
                    pagesread: action.payload.pagesread,  
                    datetime: action.payload.datetime,
                }    
            ]
        case actionTypes.update:
            return state.map((a) => {
                if (a.id === action.payload.id) {
                    return action.payload;
                } else {
                    return a;
                }
            });
        case actionTypes.delete: 
            return state.filter((a) => a.id !== action.payload.id);
        case actionTypes.save:
            try {
                AsyncStorage.setItem(AS_STORAGE_KEY, JSON.stringify(state));              
            } catch (err) {
                console.log(err);
            } finally {
                return state;    
            }
        case actionTypes.load:
            return [
                ...state,
                {
                    datetime: action.payload.datetime,
                    id: action.payload.id,
                    pagesread: action.payload.pagesread, 
                }
            ];
        default:
            return state;
    }    
} 

export const ItemProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, dummydata);
    
    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(AS_STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                dummydata = JSON.parse(storage);
                dummydata.forEach((item) => {
                    dispatch({type: actionTypes.load, payload: item})         
                });
            }
        }
        loadStorage();    
    }, [AS_STORAGE_KEY]);

    const addItem = (datetime, pagesread, callback) => {
        dispatch({type: actionTypes.create, payload: { datetime, pagesread }})
        dispatch({type: actionTypes.save});
        if (callback) {
            callback(); 
        }
    };

    const deleteItem = (id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id:id}})    
        dispatch({type: actionTypes.save});
        if (callback) callback();    
    }  

    const UpdateItem = (id, pagesread, datetime, callback) => {
        dispatch({type:actionTypes.update, payload: {id, pagesread, datetime}});        
        dispatch({type: actionTypes.save});
        if (callback) callback();
    }

    return (
        <ItemContext.Provider value={{
            state: state,
            create: addItem,
            remove: deleteItem,
            update: UpdateItem,   
        }}>
            {children}
        </ItemContext.Provider>    
    ) 
};

export default ItemContext; 
