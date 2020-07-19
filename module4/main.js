axios.get('https://api.github.com/users/Gousro')
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.warn(error);
  });