import './App.css';
import {useState, useEffect } from "react";
import Pagination from './components/Pagination';
import Users from './components/Users';

function App() {

    let [users, setUsers] = useState([]);
    let [totalPage,setTotalPage] = useState('');


   const getUsersData = async (pageNo)=> {
      let response = await fetch(`https://reqres.in/api/users?page=${pageNo}`);
      let json = await response.json();
      setUsers(json.data);
      setTotalPage(json.total_pages);
  }
 
  // const totalPage = users.total_pages;


  useEffect(() => {
    
      getUsersData(1)
      
      
    // eslint-disable-next-line
  }, [])



  return (
    <div className="App">
      <h1>List of Users</h1>

      <Users users={users}/>
      <Pagination getUsersData={getUsersData} totalPage={totalPage}/>

    </div>

   
  );
}

export default App;
