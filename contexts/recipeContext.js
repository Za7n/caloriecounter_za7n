import React from "react";
import { useReducer, useEffect } from "react";
import { actionTypes } from "../helpers/actionHelpers";
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = "Secret_key";




const RecipeContext = React.createContext();

let initialItemState = [];

const reducer = (state, action) => {
    switch(action.type) {
            case actionTypes.create:
                 return [
                     ...state,
                            {
                                 id: Math.floor(Math.random()* 99999),
                                 recipe: action.payload.recipe,
                                 information: action.payload.information,
                                 ingredients: action.payload.ingredients,
                                 ecomments: action.payload.ecomments,
                             }
            ]
            case actionTypes.update:
                return state.map((e) => {
                    if (e.id == action.payload.id) {
                        return action.payload;
                    } else {
                        return e;
                    }
                });

            case actionTypes.delete:
                return state.filter((e) => e.id !== action.payload.id);

            case actionTypes.save:
                try {
                    AsyncStorage.setItem(STORAGE_KEY, JSON.stringify(state));
                }    catch (err) {

                } finally {
                    return state;
                }
                
            case actionTypes.load:
                return [
                    ...state,
                    {
                        id: action.payload.id,
                        recipe: action.payload.recipe,
                        information: action.payload.information,
                        ingredients: action.payload.ingredients,
                        ecomments: action.payload.ecomments,
                    }
                ]

                    default: 
                        return state;
            }
}



export const RecipeProvider = ({children}) => {
    const [state, dispatch] = useReducer(reducer, initialItemState);

    useEffect(() => {
        const loadStorage = async () => {
            const storage = await AsyncStorage.getItem(STORAGE_KEY);
            if (storage !== null && state.length === 0) {
                initialItemState = JSON.parse(storage);
                initialItemState.forEach((item) => {
                    dispatch({type: actionTypes.load, payload: item })
                });
            }
        }
        loadStorage();
    }, [STORAGE_KEY]);

    const addRecipe = (recipe, information, ingredients, ecomments, callback) => {
        dispatch({type:actionTypes.create, payload: {recipe, information, ingredients, ecomments, }})
        dispatch({type: actionTypes.save});
        if (callback){
            callback();
        }
    };

    const deleteRecipe =(id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id:id}})
        dispatch({type: actionTypes.save});
        if (callback) callback();
    }

    const updateRecipe = (id, recipe, information, ingredients, ecomments , callback) => {
        dispatch({type:actionTypes.update, payload: {id, recipe, information, ingredients, ecomments, }});
        dispatch({type: actionTypes.save});
        if (callback) callback();
    }



    return(
        <RecipeContext.Provider value={{
            state: state,
            create: addRecipe,
            remove: deleteRecipe,
            update: updateRecipe,
        }}>
            {children}
        </RecipeContext.Provider>
    )
};


export default RecipeContext;