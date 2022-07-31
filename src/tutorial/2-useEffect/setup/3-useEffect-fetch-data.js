import React, { useState, useEffect } from 'react';

const url = 'https://api.github.com/users';

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([])

  const getUsers = async ()=>{
    const response = await fetch(url)
    console.log(response);
    const users = await response.json()
    console.log(users);
    setUsers(users)
  }

  useEffect(() => {
    getUsers()
  }, [])

  return <>
    <h2>Github users</h2>
    <ul className='users'>
      {
        users.map((user) => {
          const {id, login, avatar_url, html_url} = user;  // using object destructuring to store some data temporarilty for each row
          return(
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
              </div>
            </li>
          )
        })
      }
    </ul>
  </>
};

export default UseEffectFetchData;
