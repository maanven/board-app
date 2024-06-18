import React from "react";
import { NavLink } from "react-router-dom";
import { useState } from "react";
import Form from 'react-bootstrap/Form';
import { FormGroup,Row,Col, Button } from "react-bootstrap";

import '../Styles/index.css'

function Home(){
    const [blocks,setBlocks]=useState();
    const [initialLoad , setInitialLoad] =useState(true);
    const [error,setError]=useState(false);

    // Function to check if app is loaded for the first time
    const handleClick = (e) =>{
        if(initialLoad)
            e.preventDefault();
    }

    //Function to check the entered value is a number or not
    const handleChange = (e) => {
        setInitialLoad(false);
        if(isNaN(e.target.value) || e.target.value < 2 || e.target.value > 31)
        {   
            setError(true);
        }   
        else
        {
            setBlocks(e.target.value);
            setError(false);
        }   
    }
    return( 
        <div className="container-fluid">
            <div className="row" style={{marginTop : '200px'}}>
                <div className="col-md-3">
                    
                </div>
                <div className="col-md-6">
                    <FormGroup as ={Row}>
                        <Form.Label column sm="3">Enter the value of n (between 2 and 31): </Form.Label>
                        <Col sm="9">
                            <Form.Control type='text' placeholder="0" onChange={(e)=>handleChange(e)} ></Form.Control>
                            <Form.Label className='error-label' style={{display : error ? 'block' : 'none'}}> Invalid Value </Form.Label>
                        </Col>
                    </FormGroup>
                    <NavLink onClick={(e)=>handleClick(e)} to={'/board?n='+blocks}><Button style={{display : error ? 'none' : 'block'}} disabled={initialLoad ? true : false}>Create Board</Button></NavLink>
                </div>
                <div className="col-md-3">

                </div>
            </div>
        </div>
    )
}

export default Home;