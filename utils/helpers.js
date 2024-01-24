module.exports = {
  format_date: (date) => {
    // Format date as MM/DD/YYYY
    return date.toLocaleDateString();
  },
  format_amount: (amount) => {
    // format large numbers with commas
    return parseInt(amount).toLocaleString();
  },
  get_emoji: () => {
    const randomNum = Math.random();

    // Return a random emoji
    if (randomNum > 0.7) {
      return `<span for="img" aria-label="lightbulb">💡</span>`;
    } else if (randomNum > 0.4) {
      return `<span for="img" aria-label="laptop">💻</span>`;
    } else {
      return `<span for="img" aria-label="gear">⚙️</span>`;
    }
  },
  pieChart: () => {
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
  }
};
