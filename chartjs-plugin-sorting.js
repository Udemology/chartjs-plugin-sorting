const ChartjsPluginSorting = {
  id: 'sorting',
  afterDraw: ((chart, args, plugin) => {

  let container = document.querySelector('.chartjs-plugin-sorting-container');

    if (container === null) {
      // Create the container element and append the canvas to it
      container = document.createElement('div');
      container.classList.add('chartjs-plugin-sorting-container');
      container.style.position = 'relative';
      container.style.display = 'flex';
      container.style.paddingTop = plugin.container?.padding?.top ?? '10px';
      chart.canvas.parentNode.insertBefore(container, chart.canvas);
      container.appendChild(chart.canvas);

      const buttonAsc = document.createElement('button');
      buttonAsc.classList = plugin.asc?.button?.class ?? '';
      buttonAsc.innerText = plugin.asc?.button?.label ?? 'Asc';
      buttonAsc.style.position = 'absolute';
      buttonAsc.style.top = (typeof plugin.asc?.button?.topPosition !== 'undefined') ? `${plugin.asc.button.topPosition}px` : '10px';
      buttonAsc.style.right = (typeof plugin.asc?.button?.rightPosition !== 'undefined') ? `${plugin.asc.button.rightPosition}px` : '85px';

      container.appendChild(buttonAsc);

      const buttonDesc = document.createElement('button');
      buttonDesc.classList = plugin.desc?.button?.class ?? '';
      buttonDesc.innerText = plugin.desc?.button?.label ?? 'Desc';
      buttonDesc.style.position = 'absolute';
      buttonDesc.style.top = (typeof plugin.desc?.button?.topPosition !== 'undefined') ? `${plugin.desc.button.topPosition}px` : '10px';
      buttonDesc.style.right = (typeof plugin.desc?.button?.rightPosition !== 'undefined') ? `${plugin.desc.button.rightPosition}px` : '45px';
      container.appendChild(buttonDesc);

      const buttonReset = document.createElement('button');
      buttonReset.classList = plugin.reset?.button?.class ?? '';
      buttonReset.innerText = plugin.reset?.button?.label ?? 'Reset';
      buttonReset.style.position = 'absolute';
      buttonReset.style.top = (typeof plugin.reset?.button?.topPosition !== 'undefined') ? `${plugin.reset.button.topPosition}px` : '10px';
      buttonReset.style.right = (typeof plugin.reset?.button?.rightPosition !== 'undefined') ? `${plugin.reset.button.rightPosition}px` : '0px';

      container.appendChild(buttonReset);

      // Add a click event listener to the button
      buttonAsc.addEventListener('click', () => {
        sortChartData(chart, (a, b) => a.data - b.data);
      });

      // Add a click event listener to the button
      buttonDesc.addEventListener('click', () => {
        sortChartData(chart, (a, b) => b.data - a.data);
      });

      // Add a click event listener to the reset button
      buttonReset.addEventListener('click', () => {
        resetChartData(chart);
      });

      // Save a copy of the original data for resetting later
      chart.originalData = {
        datasets: [{ data: [...chart.data.datasets[0].data], borderColor: [...chart.data.datasets[0].borderColor], backgroundColor: [...chart.data.datasets[0].backgroundColor] }],
        labels: [...chart.data.labels]
      };
    }

    const sortChartData = (chart, sortFunc) => {
      // Get the data, labels, and colors from the chart
      const chartData = chart.data.datasets[0].data;
      const chartLabels = chart.data.labels;
      const chartBorders = chart.data.datasets[0].borderColor;
      const chartColors = chart.data.datasets[0].backgroundColor;

      // Combine the data, labels, and colors into an array of objects
      const chartDataArray = chartData.map((dataPoint, index) => ({
        data: dataPoint,
        label: chartLabels[index],
        border: chartBorders[index],
        color: chartColors[index]
      }));

      // Sort the array of objects using the provided sort function
      chartDataArray.sort(sortFunc);

      // Separate the sorted data, labels, and colors back into their respective arrays
      const sortedChartData = chartDataArray.map(dataObj => dataObj.data);
      const sortedChartLabels = chartDataArray.map(dataObj => dataObj.label);
      const sortedChartBorders = chartDataArray.map(dataObj => dataObj.border);
      const sortedChartColors = chartDataArray.map(dataObj => dataObj.color);

      // Update the chart with the sorted data, labels, and colors
      chart.data.datasets[0].data = sortedChartData;
      chart.data.labels = sortedChartLabels;
      chart.data.datasets[0].backgroundColor = sortedChartColors;
      chart.data.datasets[0].borderColor = sortedChartBorders;
      chart.update();
      chart.resize();
    }

    const resetChartData = (chart) => {
      // Get the original data, labels, and colors from the chart
      const originalChartData = chart.originalData.datasets[0].data;
      const originalChartLabels = chart.originalData.labels;
      const originalChartBorders = chart.originalData.datasets[0].borderColor;
      const originalChartColors = chart.originalData.datasets[0].backgroundColor;

      // Update the chart with the original data, labels, and colors
      chart.data.datasets[0].data = originalChartData;
      chart.data.labels = originalChartLabels;
      chart.data.datasets[0].backgroundColor = originalChartColors;
      chart.data.datasets[0].borderColor = originalChartBorders;
      chart.update();
      chart.resize();
    };
  })
};
