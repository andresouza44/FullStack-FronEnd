import axios from 'axios';
import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';

export default function AddUser() {

    let navigate=useNavigate()
    
    const [user, setUser]=useState({
        name:"",
        username:"",
        email:"",
    
    })
    
    const{name,username,email}=user
    const onInputChange = (e) => {
        setUser({...user,[e.target.name]:e.target.value})
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        await axios.post("http://localhost:8080/user",user);
        navigate("/")
    };
   
  return (
    <div className="container">
        <div className="row">
            <div className="col-md-6 offset-md-3 border rounded p-4 mt2 shadow">
                <h2 className="text-center m-4">Register User</h2>

                <form  onSubmit={(e) => onSubmit(e)}>
                    <div className="mb-3">
                        <label htmlFor='Name' className='form-labal'>
                            Name
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your Name'
                            name="name"
                            value={name}
                            onChange={(e) => onInputChange(e)}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='Username' className='form-labal'>
                            Username
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your Username'
                            name="username"
                            value={username}
                            onChange={(e) => onInputChange(e)}
                            />
                    </div>
                    <div className="mb-3">
                        <label htmlFor='Email' className='form-labal'>
                            Email
                        </label>
                        <input
                            type={"text"}
                            className='form-control'
                            placeholder='Enter your Email'
                            name="email"
                            value={email}
                            onChange={(e) => onInputChange(e)}
                            />
                    </div>
                    <button type='submit' className='btn btn-outline-primary'>
                        Submit
                    </button>
                    <Link className='btn btn-outline-danger mx-2' to="/">
                        Cancel
                    </Link>
                </form>
            </div>


        </div>
    </div>




  
  )
}





