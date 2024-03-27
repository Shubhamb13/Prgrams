 import React, { useEffect, useState } from 'react';
import './Home.css';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get('http://localhost:3000/users');
        setData(result.data);
        console.log('Fetched data:', result.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  function handleDelete(id){
       axios.delete(`http://localhost:3000/users/`+id)
      .then(res=>setData(res.data))
      navigate('/');
  }

  return (
    <div className='Home'>
      <section className='sec'>
        <h1>CRUD APP</h1>
        <button onClick={() => navigate('/Create')}>ADD+</button>
      </section>
      <hr /><hr />
      <center><br /><br />
        <table border={1}>
          <thead>
            <tr>
              <th>Id</th>
              <th>Name</th>
              <th>Email</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              data.length > 0 && data.map((item) => (
                <tr key={item.id}>
                  <td>{item.id}</td>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>
                    <Link to={`/edit/${item.id}`}> <button>Edit</button></Link>
                    <button onClick={() => handleDelete(item.id)}>Delete</button>
                  </td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </center>
    </div>
  );
};


export default Home
