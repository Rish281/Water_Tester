    function checkQuality() {
        const tdsValue = parseFloat(document.getElementById('tds').value);
        const phValue = parseFloat(document.getElementById('ph').value);
        const ecValue = parseFloat(document.getElementById('ec').value);
        const chlorineValue = parseFloat(document.getElementById('chlorine').value);
        // const bacteriaValue = parseFloat(document.getElementById('bacteria').value);
        // const colorimeterValue = parseFloat(document.getElementById('colorimeter').value);

        displayGaugeChart('tdsChartContainer', checkTDSQuality(tdsValue), tdsValue);
        displayGaugeChart('phChartContainer', checkPHQuality(phValue), phValue);
        displayGaugeChart('ecChartContainer', checkECQuality(ecValue), ecValue);
        displayGaugeChart('chlorineChartContainer', checkChlorineLevel(chlorineValue), chlorineValue);
        // displayBarGraph('bacteriaChartContainer', checkBacteriaLevel(bacteriaValue), bacteriaValue);
        // displayBarGraph('colorimeterChartContainer', checkColorimeterLevel(colorimeterValue), colorimeterValue);

        window.scrollTo({ top: 0, behavior: 'smooth' });

        // hideInputBoxes();
    }

    function hideInputBoxes() {
        // Get input elements
        const inputElements = document.querySelectorAll('.inputs');
        // Hide input boxes
        inputElements.forEach(input => {
            input.style.display = 'none';
        });
    }

    function checkTDSQuality(tdsValue) {
        const poorTDS = 100;
        const averageLowTDS = 150;
        const goodTDS = 200;
        const goodHighTDS = 250;
        const averageHighTDS = 300;
        const poorHighTDS = 350;

        
        if (tdsValue <= poorTDS) {
            return 'Poor';
        } else if (tdsValue <= averageLowTDS) {
            return 'Average';
        } else if (tdsValue <= goodTDS) {
            return 'Good';
        } else if (tdsValue <= goodHighTDS) {
            return 'Good';
        } else if (tdsValue <= averageHighTDS) {
            return 'Average';
        } else {
            return 'Poor';
        }
    }

    function checkPHQuality(phValue) {
        const poorMinPH = 2.5;
        const poorMaxPH = 4.5;
        const averageLowMinPH = 4.6;
        const averageLowMaxPH = 5.5;
        const goodMinPH = 5.6;
        const goodMaxPH = 7.5;
        const goodHighMinPH = 7.6;
        const goodHighMaxPH = 8.5;
        const averageHighMinPH = 8.6;
        const averageHighMaxPH = 9.5;
        const poorHighMinPH = 9.6;
        const poorHighMaxPH = 11;

        if (phValue >= poorMinPH && phValue <= poorMaxPH) {
            return 'Poor';
        } else if (phValue >= averageLowMinPH && phValue <= averageLowMaxPH) {
            return 'Average';
        } else if (phValue >= goodMinPH && phValue <= goodMaxPH) {
            return 'Good';
        } else if (phValue >= goodHighMinPH && phValue <= goodHighMaxPH) {
            return 'Good';
        } else if (phValue >= averageHighMinPH && phValue <= averageHighMaxPH) {
            return 'Average';
        } else {
            return 'Poor';
        }
    }

    function checkECQuality(ecValue) {
        const poorMinEC = 100;
        const poorMaxEC = 500;
        const averageLowMinEC = 501;
        const averageLowMaxEC = 1000;
        const goodMinEC = 1001;
        const goodMaxEC = 2000;
        const goodHighMinEC = 2001;
        const goodHighMaxEC = 3000;
        const averageHighMinEC = 3001;
        const averageHighMaxEC = 4000;
        const poorHighMinEC = 4001;
        const poorHighMaxEC = 5000;

        if (ecValue >= poorMinEC && ecValue <= poorMaxEC) {
            return 'Poor';
        } else if (ecValue >= averageLowMinEC && ecValue <= averageLowMaxEC) {
            return 'Average';
        } else if (ecValue >= goodMinEC && ecValue <= goodMaxEC) {
            return 'Good';
        } else if (ecValue >= goodHighMinEC && ecValue <= goodHighMaxEC) {
            return 'Good';
        } else if (ecValue >= averageHighMinEC && ecValue <= averageHighMaxEC) {
            return 'Average';
        } else {
            return 'Poor';
        }
    }

    function checkChlorineLevel(chlorineValue) {
        const lowChlorine = 75;
        const mediumChlorine = 150;
        const highChlorine = 300;

        if (chlorineValue <= lowChlorine) {
            return 'Low';
        } else if (chlorineValue <= mediumChlorine) {
            return 'Medium';
        } else {
            return 'High';
        }
    }

    // function checkBacteriaLevel(bacteriaValue) {
    //     const lowBacteria = 0;
    //     const mediumBacteria = 100;
    //     const highBacteria = 200;
    //     const moderatehighBacteria = 300;

    //     if (bacteriaValue <= lowBacteria) {
    //         return 'Low';
    //     } else if (bacteriaValue <= mediumBacteria) {
    //         return 'Medium';
    //     } else if (bacteriaValue <= highBacteria) {
    //         return 'High';
    //     } else if (bacteriaValue <= moderatehighBacteria) {
    //         return 'Moderate High';
    //     } else {
    //         return 'Very High'
    //     }
    // }

    // function checkColorimeterLevel(colorimeterValue) {
    //     const lowColorimeter = 0;
    //     const mediumColorimeter = 5;
    //     const highColorimeter = 10;
    //     const moderatehighColorimeter = 15;



    //     if (colorimeterValue <= lowColorimeter) {
    //         return 'Low';
    //     } else if (colorimeterValue <= mediumColorimeter) {
    //         return 'Medium';
    //     } else if (colorimeterValue <= highColorimeter) {
    //         return 'High';
    //     }else if (colorimeterValue <= moderatehighColorimeter) {
    //         return 'Moderate High';
    //     } else {
    //         return 'Very High';
    //     }
    // }

    function displayGaugeChart(containerId, category, value) {
        const container = document.getElementById(containerId);
        container.innerHTML = '';

        let gaugeValue, color;
        switch (category) {
            case 'Poor':
                gaugeValue = 10;
                color = '#DF5353'; // Red
                break;
            case 'Average':
                gaugeValue = 50;
                color = '#DDDF0D'; // Yellow
                break;
            case 'Good':
                gaugeValue = 80;
                color = '#55BF3B'; // Green
                break;
            default:
                gaugeValue = 100;
                color = '#9e0000'; // DarkRed
        }

        Highcharts.chart(containerId, {
            chart: {
                type: 'solidgauge',
                height: '100%',
                backgroundColor: '#001220' // Background color for the chart
            },
            title: {
                text: '',
                style: {
                    color: '#f4f4f4' // Text color for the chart title
                }
            },
            tooltip: {
                enabled: false
            },
            pane: {
                size: '90%',
                startAngle: -90,
                endAngle: 90,
                background: [{
                    backgroundColor: 'rgba(238, 238, 238, 0.1)',
                    outerRadius: '100%',
                    innerRadius: '60%',
                    shape: 'arc'
                }]
            },
            yAxis: {
                min: 0,
                max: 100,
                labels: {
                    y: 20,
                    style: {
                        color: '#f4f4f4' // Text color for the yAxis labels
                    }
                },
                stops: [
                    [0.1, color],
                    [0.5, color],
                    [0.9, color]
                ]
            },
            plotOptions: {
                solidgauge: {
                    dataLabels: {
                        y: 5,
                        borderWidth: 0,
                        useHTML: true
                    },
                    marker: {
                        enabled: false
                    }
                }
            },
            series: [{
                name: '',
                data: [{
                    radius: '100%',
                    innerRadius: '60%',
                    y: gaugeValue
                }],
                dataLabels: {
                    format:
                        '<div style="text-align:center">' +
                        `<span style="font-size:40px;color:${color}">${category}</span><br/>` +
                        '</div>',
                    style: {
                        color: '#f4f4f4' // Text color for the dataLabels
                    }
                }
            }]
        });
    }

    // function displayBarGraph(containerId, category, value) {
    //     const container = document.getElementById(containerId);
    //     container.innerHTML = '';

    //     let barColor;
    //     switch (category) {
    //         case 'Low':
    //             barColor = '#DF5353'; // Red
    //             break;
    //         case 'Medium':
    //             barColor = '#DDDF0D'; // Yellow
    //             break;
    //         case 'High':
    //             barColor = '#55BF3B'; // Green
    //             break;
    //         case 'Moderate High':
    //             barColor = '#DDDF0D'; // Yellow
    //             break;
    //         case 'Very High':
    //             barColor = '#9e0000'; // Red
    //         break;
    //         default:
    //             barColor = '#9e0000'; // Red
                
    //     }

    //     const data = [{
    //         name: category,
    //         y: value,
    //         color: barColor
    //     }];

    //     Highcharts.chart(containerId, {
    //         chart: {
    //             type: 'bar',
    //             height: '20%',   // Changes the height of the chart
    //             backgroundColor: '#001220' // Background color for the chart
    //         },
    //         title: {
    //             text: category + ' Level',
    //             style: {
    //                 color: '#f4f4f4' // Text color for the chart title
    //             }
    //         },
    //         xAxis: {
    //             categories: ['Value'],
    //             labels: {
    //                 style: {
    //                     color: '#f4f4f4' // Text color for the xAxis labels
    //                 }
    //             }
    //         },
    //         yAxis: {
    //             title: {
    //                 text: 'Level',
    //                 style: {
    //                     color: '#f4f4f4' // Text color for the yAxis title
    //                 }
    //             },
    //             labels: {
    //                 style: {
    //                     color: '#f4f4f4' // Text color for the yAxis labels
    //                 }
    //             }
    //         },
    //         plotOptions: {
    //             series: {
    //                 stacking: 'normal'
    //             }
    //         },
    //         series: [{
    //             name: 'Level',
    //             data: data
    //         }]
    //     });
    // }
