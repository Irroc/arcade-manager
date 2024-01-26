
const ctx = document.getElementById('pieChart').getContext('2d');
new Chart(ctx, {
        type: 'pie',
        data: {
            labels: ['Red', 'Blue', 'Green'],
            datasets: [{
                label: '# of games',//'Data from database',
                data: [12, 5, 9]//values
            }]
        }
    });