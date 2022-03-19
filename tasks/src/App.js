import './App.css';
import{Route, Routes, BrowserRouter as Router} from 'react-router-dom'
import Heading from './components/Heading';
import TaskList from './components/TaskList';
import TaskForm from './components/TaskForm';
import { ContextProvider } from './contex/GlobalContext';;


function App() {
  return (
  
      <div className="h-screen text-white text-center p-10">
        {/* <img src={logo} className="App-logo" alt="logo" /> */}
        <div className="container mx-auto h-full">
          <ContextProvider>
          <Heading />
          <Routes>
            <Route path="/" element={<TaskList />} />
            <Route path="/add" element={<TaskForm />} />
            <Route path="/edit/:id" element={<TaskForm />} />
          </Routes>
          </ContextProvider>
        </div>
      </div>
    
  );
}

export default App;