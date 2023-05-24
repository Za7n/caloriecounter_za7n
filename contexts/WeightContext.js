import React from "react";
import { useReducer, useEffect } from "react";
import { actionTypes } from "../helpers/actionHelpers";
import AsyncStorage from '@react-native-async-storage/async-storage';


const STORAGE_KEY = "Secret_key";




const WeightContext = React.createContext();

let initialItemState = [];

const reducer = (state, action) => {
    switch(action.type) {
            case actionTypes.create:
                 return [
                     ...state,
                            {
                                 id: Math.floor(Math.random()* 99999),
                                 cweight: action.payload.cweight,
                                 fweight: action.payload.fweight,
                                 cpicture: action.payload.cpicture,
                                 csweight: action.payload.csweight,
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
                        cweight: action.payload.cweight,
                        fweight: action.payload.fweight,
                        cpicture: action.payload.cpicture,
                        csweight: action.payload.csweight,
                    }
                ]

                    default: 
                        return state;
            }
}



export const WeightProvider = ({children}) => {
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

    const addWeight = (cweight, fweight, cpicture, csweight, callback) => {
        dispatch({type:actionTypes.create, payload: {cweight, fweight, cpicture, csweight, }})
        dispatch({type: actionTypes.save});
        if (callback){
            callback();
        }
    };

    const deleteWeight =(id, callback) => {
        dispatch({type: actionTypes.delete, payload: {id:id}})
        dispatch({type: actionTypes.save});
        if (callback) callback();
    }

    const updateWeight = (id, cweight, fweight, cpicture, csweight , callback) => {
        dispatch({type:actionTypes.update, payload: {id, cweight, fweight, cpicture, csweight, }});
        dispatch({type: actionTypes.save});
        if (callback) callback();
    }



    return(
        <WeightContext.Provider value={{
            state: state,
            create: addWeight,
            remove: deleteWeight,
            update: updateWeight,
        }}>
            {children}
        </WeightContext.Provider>
    )
};


export default WeightContext;