import React, { useEffect,useState } from 'react'
import styles from './styles.module.css'

import { getPosts, newPost, getPostDetail, getUsers } from './services'

const App2 = () => {

    const [users, setUsers] = useState(false)

    useEffect(() => {
        const data = {
            id: '24',
            body: 'test body',
            title: 'test title'
        }

        getPostDetail(2).then(res => console.log(res))
        getPosts().then(res => console.log(res));
        newPost(data).then(res => console.log("qq",res))

        getUsers().then(res => setUsers(res))

    }, [])


    return (
        <div className={styles.test}>
           {
            users && users.map( user =>
                <li key={user.id}> {user.name}</li>
            )
           }
        </div>
    )
}

export default App2