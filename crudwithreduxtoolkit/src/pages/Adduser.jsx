import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from "../redux/slices/userSlice";
import { useNavigate } from "react-router-dom";

const Adduser = () => {

  const { loading, error, users } = useSelector((state) => state.users);

  const navigate = useNavigate()

  const dispatch = useDispatch();

  const [formData, setFormData] = useState({
    name: '',
    email: ''
  });

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  
  const handleFormSubmit = (e) => {
    e.preventDefault();
    dispatch(createUser(formData));
    setFormData({
      name: '',
      email: ''
    });
    if(loading === 'fulfilled'){
      navigate("/")
      
    }
  };


  return (
    <Form onSubmit={handleFormSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Control type="text" placeholder="Enter Name" 
          onChange={handleFormChange}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Control type="text" placeholder="Enter Email" 
          onChange={handleFormChange} />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Adduser;
