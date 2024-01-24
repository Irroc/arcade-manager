document.addEventListener('DOMContentLoaded', async function () {
    try {
        const response = await fetch('/api/data');
        const data = await response.json();
        const ctx = document.getElementById('pieChart').getContext('2d');
        const pieChart = new Chart(ctx, {
            type: 'pie',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Data from database',
                    data: values
                }]
            }
        });

    } catch (error) {
        console.error('Error fetching data:', error);
    }
});