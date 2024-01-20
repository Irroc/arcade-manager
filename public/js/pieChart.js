import Chart from 'chart.js/auto';

const ctx = document.getElementById('pieChart');
const pieChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Warehouse', 'Store 1', 'Store 2'],
        datasets: [{
            label: '# of Games',
            data: [12, 5, 9]
        }]
    }
})