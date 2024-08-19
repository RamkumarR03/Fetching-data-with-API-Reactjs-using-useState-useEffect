import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

function Apidemo() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(error => {
        console.error("If it is not loading it will be an error message");
        setLoading(false);
      });
  }, []); 

  if (loading) {
    return <p>Loading...</p>; 
  }

  return (
    <div>
      <h1>List out the users in API</h1>
      <ul>
        {users.map(users => ( 
          <li key={users.id}>{users.name}</li> // Changed `name` to `title` to match the fetched data structure
        ))}
      </ul>
    </div>
  );
}

ReactDOM.render(<Apidemo />, document.getElementById("root"));
