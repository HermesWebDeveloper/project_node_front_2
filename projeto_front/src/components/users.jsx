import axios from 'axios';
import { React, useEffect, useState } from 'react';

function Users () {

    const [users, setUsers] = useState([]);

    useEffect( () => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('localhost:3000/api/usuarios');
                setUsers(response.data);
            }catch(error){
                console.log('Error ao buscar usuários: ', error);
            };
        };

        fetchUsers();
    });

    return (
        <>
            <h2>Listagem de Usuários</h2>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Firstname</th>
                        <th>Surname</th>
                        <th>E-mail</th>
                        <th>Password</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user) => {
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                        </tr>
                    })}
                </tbody>
            </table>
        </>
    )
}

export default Users;