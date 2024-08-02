import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
// import './admin.css'
function Dashboard() {
  const handlelogout=()=>{
    localStorage.clear();
    window.location.reload();
  }



  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://luluthattukada.com/coinone/listusers.php')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, []);


  // dalete record
  const deleteRecord = async (id) => {
    try {
      const response = await fetch('https://luluthattukada.com/coinone/deleteusers.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ id }),
      })

      const response1 = await response.json();
      
        alert('Deleted');
        // console.log(response1);
        setData(response1);
      
    } catch (error) {
      alert('Network error: ' + error.message);
    }
  };


 
  return (
<table class="table table-striped">
  <thead>
    <tr>
      <th scope="col">No</th>
      <th scope="col">Date</th>
      <th scope="col">Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
      <th scope="col">Requirement</th>
    </tr>
  </thead>

  <tbody>
          {data.map((item , index ) => (
            <tr key={item.id}>
              <td>{index + 1}</td>
              <td>{item.datetime}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.phone}</td>
              <td>{item.developmentType}</td>
              <td>{item.message}</td>
              <td><button onClick={() => deleteRecord(item.id)}>Delete</button></td>
            </tr>
          ))}
  </tbody>
</table>
      
  )
}

export default Dashboard