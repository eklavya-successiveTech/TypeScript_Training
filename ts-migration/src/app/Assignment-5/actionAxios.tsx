import axios from "axios";

 const fetchUsersAxios=async()=>{
  try {

    const res=await axios.get('https://jsonplaceholder.typicode.com/users');
     return  res.data;
  }
  catch (error) {
    console.error('Failed to fetch users:', error);}
}

export default fetchUsersAxios;