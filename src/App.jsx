
import './App.css'
import AddTodoForm from './components/AddTodoFrom';
import EditTodoForm from './components/EditTodoForm';
import TodoCard from './components/TodoCard'
import 'bootstrap/dist/css/bootstrap.min.css';
import TodoList from './components/TodoList';
import { Route, Routes } from 'react-router-dom';
function App() {


  return (
    <>
      <Routes>
          <Route path='/' element={<TodoList/>}/>
          <Route path='/addtodo' element={<AddTodoForm/>}/>
          <Route path='/edit-todo/:id' element={<EditTodoForm/>}/>
      </Routes>
    </>
  )
}

export default App
