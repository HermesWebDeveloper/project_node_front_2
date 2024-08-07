import { useState } from "react";
import axios from 'axios';

function Form_user() {

    const [firstname, setFirstname] = useState('');
    const [surname, setSurname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await axios.post('http://localhost:3000/api/usuarios', {
                firstname,
                surname,
                email,
                password
            });
        } catch (error) {
            console.log('Erro no envio dos dados: ', error);
        }
    };

    return (
        <>
            <h1>Formulário de Cadastro de Usuário</h1>
            <form onSubmit={handleSubmit} className="form1">
                <label>Primeiro Nome: </label>
                <input type="text" name="firstname" placeholder="Seu nome" value={firstname} onChange={(e) => {setFirstname(e.target.value)}}></input>
                <label>Restante do Nome: </label>
                <input type="text" name="surname" placeholder="Continuação do nome" value={surname} onChange={(e) => {setSurname(e.target.value)}}></input>
                <label>Digite seu e-mail:</label>
                <input type="email" name="email" placeholder="Seu e-mail" value={email} onChange={(e) => {setEmail(e.target.value)}}></input>
                <label>Sua senha:</label>
                <input type="password" name="password" placeholder="1234" value={password} onChange={(e) => {setPassword(e.target.value)}}></input>
                <input type="submit"></input>
            </form>
        </>
    )
}

export default Form_user