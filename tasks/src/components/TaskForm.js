import React, {useState, useContext, useEffect} from 'react'
import { GlobalContext} from '../contex/GlobalContext';
import {useNavigate, useParams} from 'react-router-dom'

const TaskForm = () => {
    const {addTask, tasks, updateTask} = useContext(GlobalContext);
    const navigate = useNavigate()
    const params = useParams()



    //estado incial del componente
const[task, setTask] = useState({
    title:'',
    description:''
});

//funcion que maneja el evento en las casillas
const handleChange = e => 
    //primero copia lo que esta en task y despues actualiza
    setTask({...task, [e.target.name]: e.target.value});

const handleSubmit = (e) => {
    e.preventDefault();
//si existe la tarea edita si no existe crea
    if(task.id){
        updateTask(task);
    }else{
       addTask(task);
    }
    
    //me envía a la pagina principal
   navigate("/");
};   

useEffect(() => {
    const taskFound = tasks.find((task) => task.id === params.id);
    console.log(taskFound);

    if(taskFound){
        //el set es para cambiar el estado con lo que teniamos
        setTask(taskFound);
    }else{
        console.log("creating");
    }
}, [params.id, tasks]);

    return(
        <div className='flex justify-center items-center h-3/4'>
            <form className='bg-gray-900 p-10' onSubmit={handleSubmit}>
            <h2 className='mb-7 text-3x1'>
                { task.id ? "Editing" : "Creating"}
                </h2>
            <div className='mb-5'>
                <input
                type="text"
                name="title"
                placeholder="Write a title"
                onChange={handleChange}
                value={task.title}
                className='py-3 px-4  focus:text-gray-100 bg-gray-700 w-full'
                />
            </div>
            <div className='mb-5'>
                <textarea
                name="description"
                rows="2"
                placeholder='Write a description'
                onChange={handleChange}
                value={task.description}
                className='py-3 px-4  focus:text-gray-100 bg-gray-700 w-full'
                ></textarea>
            </div>
            <button className='bg-pink-600 w-full hover:bg-pink-400 py-2 px-4 mt-5'>
                {task.id ? 'Edit Task' : 'Create Task'} 
            </button>
        
        </form>
     </div>
    );
}
export default TaskForm