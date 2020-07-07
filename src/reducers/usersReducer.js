const initialState = {
    url: '',
    loading: false,
    error: false,
  };
  const reducer = (state = initialState, action) => {
    switch (action.type) {
      case 'REQUESTED_USERS':
          console.log("r1")
        return {
          url: '',
          loading: true,
          error: false,
        };
      case 'REQUESTED_USERS_SUCCEEDED':
            console.log(state,action)
        return {
          url: action.url,
          loading: false,
          error: false,
        };
      case 'REQUESTED_USERS_FAILED':
            console.log("r3")
        return {
          url: '',
          loading: false,
          error: true
        };
      default:
        return state;
    }
  };
  
  export default reducer