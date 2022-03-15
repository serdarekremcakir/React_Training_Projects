import React, { useEffect, useState } from 'react'

function UsersNativeFetch() {

    const [users, setUsers] = useState([]);
    const [isLoading, setisLoading] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(res => res.json())
            .then((users) => {
                setUsers(users);
            })
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

export default UsersNativeFetch