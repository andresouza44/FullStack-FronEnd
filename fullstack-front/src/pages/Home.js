import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { Link, useParams } from 'react-router-dom';

export default function Home() {
    
    const [users, setUsers] = useState([]);

    const {id} = useParams()
    
    useEffect(() => {
        loadUsers();
    }, []);
    
    const loadUsers = async () => {
        const result = await axios.get("http://localhost:8080/user");
        setUsers(result.data);
    };

    const deleteUser = async (id) => {
        await axios.delete(`http://localhost:8080/user/${id}`)
        loadUsers()
    }


  return (
<div className='container'>
    <div className='py-4'>
        <table className="table border-shadow table-striped -hover">
            <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">Username</th>
                    <th scope="col">Email</th>
                    <th scope="col">Action</th>
                </tr>
            </thead >
            <tbody className='table-group-divider'>
                {users.map((user,index) => (
                    <tr>
                        <th scope="row" key={index}>
                            {index +1}
                        </th>
                        <td>{user.name}</td>
                        <td>{user.username}</td>
                        <td>{user.email}</td>
                        <td>
                            <Link className="btn btn-primary btn-sm mx-1 " to={`/viewuser/${user.id}`}>View</Link>
                            <Link className="btn btn-outline-primary btn-sm mx-1 " to={`/edituser/${user.id}`}>Edit</Link>
                            <button className="btn btn-danger btn-sm mx-1" onClick={() => deleteUser(user.id)}>Deletar</button>
                        </td>
                    </tr>

                ))}
            </tbody>
        </table>
    </div>
</div>



  )
}
