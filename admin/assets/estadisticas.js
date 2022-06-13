Chart.defaults.global.defaultFontFamily = '-apple-system,system-ui,BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,sans-serif';
Chart.defaults.global.defaultFontColor = '#292b2c';

var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'pie',
  data: {
    labels: ["Deuda 2 Meses", "Deuda +3 Meses", "Deuda 1 Mes", "Al Dia"],
    datasets: [{
      data: [12.21, 18.58, 40.25, 28.67],
      backgroundColor: ['#007bff', '#dc3545', '#ffc107', '#28a745'],
    }],
  },
});
