export const getUserDetails = (token, history) => {
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
      dispatch({type: 'GET_USER_DETAILS', email: res.email, name: res.name});
    }).catch((error) => {
      console.log(error);
      history.push('/login');
    });
  };
}
;
