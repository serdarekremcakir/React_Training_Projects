import React, { useEffect, useState } from 'react'
import axios from 'axios'

function UsersAxios() {

    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        axios('https://jsonplaceholder.typicode.com/users')
            .then((users) => {setUsers(users.data);})
            .catch((e) => console.log(e))
            .finally(()=> setisLoading(false));
    }, [])

    return (
        <div>
            <h1>Users</h1>

            {isLoading && <div>Loading...</div>}

            {
                users.map((user) => (
                    <div key={user.id}> {user.name} </div>
                ))
            }

        </div>


    )
}

export default UsersAxios