fetch("/api/locations/withGames")
  .then((response) => response.json())
  .then(function (data) {  
    for (let i = 0; i < data.length; i++) {
    locations.push(data[i].name)
    games.push(data[i].games.length)
    }
  document.getElementById('export').addEventListener('click', function() {
    const data = [
        ['Location', 'Game'],
        [locations, games]
    ];
    const wb = XLSX.utils.book_new();
    const ws = XLSX.utils.aoa_to_sheet(data);
    XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
  
    XLSX.writeFile(wb, "data.xlsx");
  });
})
