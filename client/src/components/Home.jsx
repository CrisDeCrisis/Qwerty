import React, { useEffect } from 'react'
import { getUsers } from '../actions/actions'

function Home() {

    const getAllUsers = async () => {
        const users = await getUsers();
        console.log(users[0].Email);
    }

    useEffect(() => {
        getAllUsers();
    }, []); // El array de dependencias vacío asegura que esto se ejecute solo una vez cuando el componente se monte

    return (
        <div>
            <h1>hola</h1>
        </div>
    )
}

export default Home