import axios from "axios"
// let data =""

const requestUsers = () => {
  return { type: 'REQUESTED_USERS' }
};

const requestUsersSuccess = (data) => {
  return { type: 'REQUESTED_USERS_SUCCEEDED', url: data }
};

const requestUsersError = () => {
  return { type: 'REQUESTED_USERS_FAILED' }
};
  
  const fetchUsers = () => {
      console.log("Fetch users")
    return (dispatch) => {
      dispatch(requestUsers());
       axios.get('https://jsonplaceholder.typicode.com/users')
        .then(res => {
          let data= res.data
          console.log("data",data)
          dispatch(requestUsersSuccess(data)) 
        })
        .catch(err => dispatch(requestUsersError()))
    }
  };

  
 
export default fetchUsers