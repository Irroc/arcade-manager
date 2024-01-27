const locations = []
const games = []

fetch("/api/locations/withGames")
  .then((response) => response.json())
  .then(function (data) {  
    for (let i = 0; i < data.length; i++) {
    locations.push(data[i].name)
    games.push(data[i].games.length)
  }
  const ctx = document.getElementById('pieChart').getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: {
      labels: locations, //these will be the locations
      datasets: [{
        label: '# of Games',
        data: games, //these are the actual number of games
        borderWidth: 1
      }]
    }
  });
});
