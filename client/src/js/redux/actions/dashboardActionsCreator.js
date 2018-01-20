export const getUserDetails = (email, name) => {
  return {
    type: 'SET_USER_DETAILS',
    email,
    name,
  };
};

export const isUserAuthenticated = (token, history) => {
  return (dispatch) => {
    fetch('/profile', {
      method: 'GET',
      headers: {
        'Authorization': token,
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then((res) => {
      return res.json();
    })
    .then((res) => {
      console.log(res);
      dispatch({type: 'SET_USER_DETAILS', email: res.email, name: res.name});
    }).catch((error) => {
      console.log(error);
      history.push('/login');
    });
  };
}
;
