import { createContext, useReducer } from "react"
import appReducer from "./AppReducer";
import {v4} from 'uuid';
//esto es como crear el useState por afuera de los componentes
 
     const initialState ={
            tasks:[
                {
                id:"1",
                title:'title one',
                description: "some description",
                done:false
        
            },
            {
                id:"2",
                title:'title two',
                description: "some description",
                done:false
        
            },
        ],
    }
    export const GlobalContext = createContext(initialState);

//para almacenar el estado y pasarlo a sus componentes hijo
export const ContextProvider = ({children}) => {
    //dispatch actualiza el estado, reducer es un conjunto de condicionales
const [state, dispatch] = useReducer(appReducer,initialState)


    const addTask = (task) => {
        //dispatch dispara la funcion
        dispatch({type: 'ADD_TASK', payload:{...task, id: v4()}})
    };

    const deleteTask = (id) => {
        dispatch({type: 'DELETE_TASK', payload: id})
    }

    const updateTask = (task) => 
    //la tarea ya trae el id
        dispatch({type:'UPDATE_TASK', payload: task})

    const toggleTaskDone = (id) => 
        dispatch({type: 'TOGGLE_TASK_DONE', payload: id})   

    //va a ser un proveedor, aca voy a pasar el estado nuevo, no el initialSate
    return <GlobalContext.Provider value={{ ...state, addTask, deleteTask, updateTask, toggleTaskDone}}>
        {children}
    </GlobalContext.Provider>
}
