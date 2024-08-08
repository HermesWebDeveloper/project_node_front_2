import { useEffect, useState } from "react";
import axios from 'axios';
import { Link, useParams } from "react-router-dom";

function Alterar_user () {

    const { id } = useParams();
    const [user, setUser] = useState([]);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const response = await axios.get(`http://localhost:3000/api/usuarios/${id}`);
                setUser(response.data);
            } catch (error) {
                console.log('Erro no envio dos dados: ', error);
            }
        }
        fetchUser();
    }, []);

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await axios.put(`http://localhost:3000/api/usuarios/${id}`, {
                firstname: user.firstname,
                surname: user.surname,
                email: user.email,
                password: user.password
            },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.log('Erro ao enviar usuários atualizados!', error);
        };
    };

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    return (
        <>
            <h1>Formulário de Alteração de Usuário</h1>
            <form onSubmit={handleSubmit} className="form1">
                <label>Primeiro Nome: </label>
                <input type="text" name="firstname" placeholder="Seu nome" value={user.firstname} onChange={handleChange}></input>
                <label>Restante do Nome: </label>
                <input type="text" name="surname" placeholder="Continuação do nome" value={user.surname} onChange={handleChange}></input>
                <label>Digite seu e-mail:</label>
                <input type="email" name="email" placeholder="Seu e-mail" value={user.email} onChange={handleChange}></input>
                <label>Sua senha:</label>
                <input type="password" name="password" placeholder="1234" value={user.password} onChange={handleChange}></input>
                <input type="submit"></input>
            </form>
            <a>
                <Link to={`/`}>Voltar</Link>
            </a>
        </>
    )
}

export default Alterar_user 