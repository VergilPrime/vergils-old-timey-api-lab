// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM
$.get('https://vergils-old-timey-api-lab.herokuapp.com/github/user/repos')
  .then(
    data => console.log(data)
  )
