import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import './admin.css'
function Dashboard() {
  const navigate=useNavigate()
  const handlelogout=()=>{
    
    localStorage.clear();
    

    navigate('/admin')
    
    
  }



  const [data, setData] = useState([]);
console.log(data);

  useEffect(() => {
    axios.get('https://luluthattukada.com/coinone/listusers.php')
      .then((response) => {
        setData(response.data);
      })
      .catch((error) => {
        console.error('There was an error fetching the data!', error);
      });
  }, [data]);


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
  <><div className='text-center mt-3'>
    <Link to={'/'}><button className='btn btn-outline-dark'>back to Website</button></Link>
    <button className='btn btn-outline-dark mx-3' style={{float:'right'}} onClick={handlelogout}>Logout</button>
    </div>
   

    <table class="table table-striped table-dark mt-1">
      <thead>
        <tr>
          <th scope="col">No</th>
          <th scope="col">Date</th>
          <th scope="col">Name</th>
          <th scope="col">Email</th>
          <th scope="col">Phone</th>
          <th scope="col">Requirement</th>
          <th scope="col">message</th>
          <th scope="col">Actions</th>
        </tr>
      </thead>

      <tbody>

        {data.length > 0 ? (data.map((item, index) => (
          <tr key={item.id}>
            <td>{index + 1}</td>
            <td>{item.datetime}</td>
            <td>{item.name}</td>
            <td>{item.email}</td>
            <td>{item.phone}</td>
            <td>{item.developmentType}</td>
            <td>{item.message}</td>
            <td><button onClick={() => deleteRecord(item.id)} className='btn btn-danger'> <i class="bi bi-trash"></i></button></td>
          </tr>
        ))) : (
          <tr className='text-center' style={{textAlign:'center'}}>
            <td colSpan="2" >No data available</td>
          </tr>
        )}
      </tbody>
    </table></>
      
  )
}

export default Dashboard