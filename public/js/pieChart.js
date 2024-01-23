document.addEventListener('DOMContentLoaded', function () {
    const data = {
        labels: ['Blue', 'Red', 'Orange', 'Yellow', 'Green', 'Purple'],
        datasets: [{
            label: '# of Votes',
            data: [12, 19, 3, 5, 2, 3]
        }]
    }

    const ctx = document.getElementById('pieChart').getContext('2d');
    const pieChart = new Chart(ctx, {
        type: 'pie',
        data: data
    });
});