/**
 * chart de tipo bar
 */

const contenedorBarChart = document
.querySelector("#bar-chart")
.getContext("2d")

const barChart = new Chart(contenedorBarChart,{
    type:"bar",
    data:{
        labels:[
            "lunes",
            "martes",
            "miercoles",
            "jueves",
            "viernes",
            "sabado",
            "domingo"
        ],
        datasets:[{
            label:"Numero de usuarios por dia",
            data:[20, 40,10, 100,50,75,200],
            borderWidth: 3,
            borderColor: "#f01",
            backgroundColor:[
                "#d1ba80",
                "#ef9ca4",
                "#fefc00",
                "#ef9ca4",
                "#00ff99",
                "#ef9ca4",
                "#00ff99"]
        }]
    }
})



const containerDoughtnutChart = document
.querySelector("#doughnut-chart")
.getContext("2d")

const dataForChart = {
    labels: [
        "computadoras",
        "celulares",
        "refrigeradoras",
        "parlantes"
    ],
    datasets:[
        {
            label:"productos electronicos",
            data: [100, 230 ,520,267],
            backgroundColor:["red","black","pink","blue"],
        }
    ]
};
//esto es para crear el tipo y dar la configuracion de datos
const config = {
    type: "doughnut",
    data: dataForChart,
}
//Esto es para lacreacion
const donutChart =new Chart(containerDoughtnutChart,config)

const containerLineChart = document
  .querySelector("#lineal-chart")
  .getContext("2d");

const configLineal = {
  type: "line",
  data: dataForChart,
};

const lineChart = new Chart(containerLineChart, configLineal);

const containerBubbleChart = document
  .querySelector("#bubble-chart")
  .getContext("2d");
// he tomado a dataForCharty estoy accediendo a la propiedad data y cambio su valor
dataForChart.datasets[0].data = [
  {
    x: 20,
    y: 30,
    r: 15,
  },
  {
    x: 40,
    y: 10,
    r: 10,
  },
];

const configBubble = {
  type: "bubble",
  data: dataForChart,
};

const bubbleChart = new Chart(containerBubbleChart, configBubble);

//polar chart
const containerPolarChart = document
.querySelector("#polar-chart")
.getContext("2d")

dataForChart.datasets[0].data = [300,149,321,678]

const configPolar = {
    type: "polarArea",
    data:dataForChart,
}

const polarChart = new Chart(containerPolarChart ,configPolar)

const containerRadarChart = document.querySelector("#radar-chart")
const configRadarChart = {
    type:"radar",
    data:dataForChart,
}

const radarChart = new Chart(containerRadarChart,configRadarChart)

const containerScatterChart = document
.querySelector("#scatter-chart")
.getContext("2d");

dataForChart.datasets[0].data = [
{
  x: -10,
  y: 0,
},
{
  x: 0,
  y: 10,
},
{
  x: 10,
  y: 5,
},
{
  x: 0.5,
  y: 5.5,
},
];

const configScatter = {
type: "scatter",
data: dataForChart,
};

const scatterChart = new Chart(containerScatterChart, configScatter);