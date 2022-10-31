import React,{useState,useEffect} from 'react'
import { useSearchParams } from 'react-router-dom'

const Contact = () => {

  const [searchParams, setSearchParams] = useSearchParams();

  console.log("searchparams", searchParams.get('search'));
  
  const [name, setName] = useState(searchParams.get('search') || '')




  useEffect(() => {
    searchParams.set('search', name)
    // console.log(Object.fromEntries([...searchParams]));
    if (!name) {
      searchParams.delete('search')
    }


    setSearchParams(Object.fromEntries([...searchParams]))
    // setSearchParams({id: 3, category:"belt"})
  }, [name])
  


  return (
    <div>Contact

      <br />
      <form action="">
        <label htmlFor="search">searchParams</label>
      <input id='search' type="text" value={name} onChange={(e) => setName(e.target.value)}/>
      </form>
      <p>url ==> {window.location.href}</p>
      <br />


    </div>
  )
}

export default Contact