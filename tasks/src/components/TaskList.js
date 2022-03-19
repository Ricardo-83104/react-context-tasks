import React, {useContext} from 'react'
import {GlobalContext} from '../contex/GlobalContext'
import {Link} from 'react-router-dom'

const TaskList = () => {
//recorre las tareas que vienen del global context
    const {tasks, deleteTask, toggleTaskDone} = useContext(GlobalContext);
    
    

    return(
        <div className='flex justify-center'>
    <button onClick={() => deleteTask()}>
    DELETE ALL
    </button>

            <div className="w-6/12">
            {tasks.map(task => (
                <div className="bg-gray-900 px-20 py-7 text-white shadow-3xl mb-4 flex justify-between"
                key={task.id}>
                <div className='text-left'>
                    <h1 className="text-2xl uppercase">{task.title}</h1>
                    {/* <h6 className="text-gray-500">{task.id}</h6> */}
                    <p>{task.description}</p>
                <button 
                className="bg-green-600 hover:bg-green-400 py-1 px-3 mt-2"
                onClick={() => toggleTaskDone(task.id)}
                >
                    {task.done ? 'Undone' : 'Done'}
                </button>
                </div >
                <div>
                    <Link 
                    //acceder al id especifico
                    to={`/edit/${task.id}`}
                    className='bg-gray-600 hover:bg-gray-500 py-2 px-4 mr-2'>
                    Edit
                    </Link>
                    <button className='bg-red-600 hover:bg-red-400 py-2 px-4 mr-2'
                    onClick={
                        () => deleteTask(task.id)
                    }
                    >Delete
                    </button>
                    </div>
                </div>

            ))}
        </div>
        </div>
    );
}
export default TaskList;