import React from 'react';
import './App.css';
import Header from './component/header';
import axios from 'axios';
import  { useEffect, useState } from 'react';
function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    
    axios.get('https://restapi-production-f7af.up.railway.app/Jobs').then(response => setData(response.data)).catch(error => console.error(error));
  });
  
  
  
  
  return (
    <div>
      {data.map(item=>(
        <div style={{padding: 10}}> 
        <Header rol={item.rol} companyname={item.companyName} batch={item.batch} link={item.link} desk={item.desk}/>
        </div>
      ))}
      
    </div>
  );
}

export default App;
