google.charts.setOnLoadCallback(drawCharts);

function drawCharts() {
  drawChart1();
  drawChart2();
  drawChart3();
  drawChart4();
  drawChart5(); // Nuevo gráfico 5
}

function drawChart1() {
  let data = google.visualization.arrayToDataTable([
    ['Mes', 'Cantidad'],
    ['ENERO', 108],
    ['FEBRERO', 20],
    ['MARZO', 24],
    ['ABRIL', 15], 
    ['MAYO', 15],
    ['AGOSTO', 16],
    ['SEPTIEMBRE', 20],
    ['OCTUBRE', 14],
    ['NOVIEMBRE', 20]
  ]);

  let options = {
    title: 'Cantidad de Crímenes por Mes',
    hAxis: { title: 'Mes' },
    vAxis: { title: 'Cantidad de Crímenes' },
    legend: 'none'
  };

  let chart = new google.visualization.ColumnChart(document.getElementById('chart_container1'));
  chart.draw(data, options);
}

function drawChart2() {
  let data = google.visualization.arrayToDataTable([
    ['Día', 'Cantidad'],
    ['LUNES', 37],
    ['MARTES', 40],
    ['MIÉRCOLES', 43],
    ['JUEVES', 41],
    ['VIERNES', 41]
  ]);

  let options = {
    title: 'Cantidad de Crímenes por Día de la Semana',
    pieHole: 0.4,
  };

  let chart = new google.visualization.PieChart(document.getElementById('chart_container2'));
  chart.draw(data, options);
}

function drawChart3() {
  let data = google.visualization.arrayToDataTable([
    ['Barrio', 'Cantidad'],
    ['CHACARITA', 14],
    ['BARRACAS', 10],
    ['RECOLETA', 3],
    ['PARQUE AVELLANEDA', 3],
    ['NUÑEZ', 3]
  ]);

  let options = {
    title: 'Cantidad de Crímenes por Barrio',
    vAxis: { title: 'Barrio' },
    hAxis: { title: 'Cantidad de Crímenes' },
    legend: 'none'
  };

  let chart = new google.visualization.BarChart(document.getElementById('chart_container3'));
  chart.draw(data, options);
}

function drawChart4() {
  let data = google.visualization.arrayToDataTable([
    ['Tipo de Crimen', 'Cantidad'],
    ['Robo total', 124],
    ['Hurto total', 193],
    ['Robo automotor', 131]
  ]);

  let options = {
    title: 'Cantidad de Crímenes por Tipo de Crimen',
    hAxis: { title: 'Tipo de Crimen' },
    vAxis: { title: 'Cantidad de Crímenes' },
    legend: 'none'
  };

  let chart = new google.visualization.ColumnChart(document.getElementById('chart_container4'));
  chart.draw(data, options);
}

function drawChart5() {
  let data = google.visualization.arrayToDataTable([
    ['Tipo de Crimen', 'Porcentaje'],
    ['Robo total', 27.68],
    ['Hurto total', 43.08],
    ['Robo automotor', 29.24]
  ]);

  let options = {
    title: 'Porcentaje de Crímenes por Tipo de Crimen',
    pieHole: 0.4,
  };

  let chart = new google.visualization.PieChart(document.getElementById('chart_container5'));
  chart.draw(data, options);
}
