import React, { useEffect, useState } from 'react'
import { getUsersByBlood } from '../actions/actions'
import { PaginatedList } from './Paginado'


function Home() {

    const [users, setUsers] = useState([]);

    useEffect(() => {
        const getAllUsers = async () => {
            const data = await getUsersByBlood();
            return setUsers(data.compatibleUsers);
        }
        getAllUsers();

    }, []);

    return (
        <PaginatedList items={users} />
    )
}

export default Home