document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();

        const labels = data.map(item => item.label);
        const values = data.map(item => item.value);

        const ctx = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: ['Red', 'Blue', 'Green'],//'Data from database',
                    data: [12, 5, 9]//values
                }]
            }
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});