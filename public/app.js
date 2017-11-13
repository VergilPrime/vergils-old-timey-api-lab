// Let's make an AJAX call to the GitHub API and then do a simple render of the data into the DOM
$.get('https://vergils-old-timey-api-lab.herokuapp.com/github/user/repos')
  .then(
    data => JSON.parse(data).forEach(repo =>
      $('#results').append(`<h3>${repo.name}</h3><p>${repo.description}</p><hr>`)),
    err => console.error(err.status, err.statusText, 'is the way my stuff is broken'));
