import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const AddTodoForm = () => {

    const [todo,setTodo] = useState({title:'',description:''})
 
      const handleChange = (e)=>{
        const {name,value} = e.target
        console.log("form values before..", todo)
        setTodo({...todo,[name]:value})
        console.log("form values after", todo)
      }
  return (
    <div className="add-todo-form shadow p-4">
    <Form>
      <Form.Group controlId="title">
        <Form.Label>Title</Form.Label>
        <Form.Control
          name='title'
          type="text"
          placeholder="Enter title"
          value={todo.title}
          onChange={handleChange}
        />
      </Form.Group>
      <Form.Group controlId="description">
        <Form.Label>Description</Form.Label>
        <Form.Control className='mb-2'
          name='description'
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={todo.description}
          onChange={handleChange}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Add Todo
      </Button>
    </Form>
  </div>
  );
};

export default AddTodoForm;
