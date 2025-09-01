import { useState } from "react";

function Form(){

    function cadastrarUsuario(event){//evento criado
        event.preventDefault()//evento lincado com pausa
        console.log(`User: ${name} cadastrado com a senha: ${password}`)
        console.log("Cadastrou com Sucess!!")
    }

    const[name, setName] = useState()
    const[password, setPassword] = useState()

    return(

        <>
        
        <h1>Meu Cadastro:</h1>
        <form onSubmit={cadastrarUsuario}>

            <div>

                <label htmlFor="name">Nome: </label>
                <input type="text" id="name" name="name" placeholder="Digite seu nome!"
                onChange={(event) => setName(event.target.value)}
                />

            </div>

            <div>

            <label htmlFor="password">Senha: </label>
            <input type="password" id="password" name="password" placeholder="Digite sua Senha:"
            onChange={(event) => setPassword(event.target.value)}
            /> 

            </div>

            <div>

                <input type="submit" value="Cadastrar"/>

            </div>

        </form>

        </>

    )

}
export default Form;