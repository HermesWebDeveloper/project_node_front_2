import axios from 'axios';
import { React, useEffect, useState } from 'react';
import './users.css'
import { Link } from 'react-router-dom';

function Users () {

    const [users, setUsers] = useState([]);
    const [reload, setReload] = useState(false);

    useEffect( () => {
        const fetchUsers = async () => {
            try {
                const response = await axios.get('http://localhost:3000/api/usuarios');
                setUsers(response.data);
            }catch(error){
                console.log('Error ao buscar usuários: ', error);
            };
        };

        fetchUsers();
    }, [reload]);

    const excluir_usuario = async (id) => {
        try { 
            await axios.delete(`http://localhost:3000/api/usuarios/${id}`);
            setReload(prev => !prev);
        } catch (error) {
            console.log("Erro ao solicitar deleção do usuário!");
        };
    };

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
                        <th>Option 1</th>
                        <th>Option 2</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map( (user) => (
                        <tr>
                            <td>{user.id}</td>
                            <td>{user.firstname}</td>
                            <td>{user.surname}</td>
                            <td>{user.email}</td>
                            <td>{user.password}</td>
                            <td>
                                <Link to={`/users/${user.id}`}>Alterar</Link>
                            </td>
                            <td>
                                <a onClick={() => excluir_usuario(user.id)} href='#'>Excluir</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </>
    )
}

export default Users;