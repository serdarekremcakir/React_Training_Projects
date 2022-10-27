import React,{useEffect, useState} from 'react'
import App2 from './App2'
import styles from './styles.module.css'

const App = () => {


  const [users, setUsers] = useState(false)
  const [name, setName] = useState("serdar")
  const [avatar, setAvatar] = useState(false)

  const addPost = (data) => {


    const formData = new FormData();
    formData.append('userId',data.userId);
    formData.append('title',data.title);
    formData.append('body',data.body);

    fetch('https://jsonplaceholder.typicode.com/posts',{
      method: 'POST',
      // body: JSON.stringify(data),
      body: formData,
      
    })
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))
  }

  useEffect( () => {
    
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response =>{
      if (response.ok && response.status === 200) {
        return response.json();
      }
    })
    .then(data => setUsers(data))
    .catch(err => console.log(err))

    addPost({
      userId:12,
      title: 'test title',
      body: 'test body'
    });
  }, [])


  const submitHandle = (e) => {
    const data = {
      name,
      avatar
    }

    const formData = new FormData();
    formData.append('name',name);
    formData.append('avatar',avatar)

    e.preventDefault();
    fetch('https://jsonplaceholder.typicode.com/posts',{
      method:'POST',
      // body:JSON.stringify(data) // Bu şekilde file gönderilemiyor
      body: formData // bu şekilde file dosyası  gönderilebiliyor
    })
  }
  
  return (
    <div className={styles.test}>
      <h2>APP 1</h2>
      <form onSubmit={submitHandle} >
        <input type="text" name="name" value={name || ''} onChange={e => setName(e.target.value)}/>
        <input type="file" name="avatar" onChange={e => setAvatar(e.target.files[0])} />
        <button disabled={!name || !avatar} type='submit'>Gonder</button>
      </form>


      <h3>user list</h3>
      {
        users && users.map(user => (
          <li key={user.id}>
            {user.name}
          </li>
        ))
      }



      <h2>APP2</h2>
      <App2 />
    </div>

  )


}

export default App