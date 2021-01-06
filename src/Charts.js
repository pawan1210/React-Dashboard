import React, { Component } from "react";
import Chart from "react-apexcharts";

class AuthorSalesChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            columnWidth: "25%",
            endingShape: "rounded",
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
          fill: {
            opacity: 0,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
      },
      series: [
        {
          data: [30, 90, 45, 50, 49, 60, 80, 70],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width="100%"
        height="90%"
      />
    );
  }
}

class TechnologiesChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [44, 55, 41],
      options: {
        colors: ["#cae2ed", "#07a5ed", "#045e87"],
        chart: {
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        labels: ["Html", "CSS", "Angular"],
        legend: {
          position: "left",
          offsetY: -20,
          offsetX: 10,
          height: 100,
        },
      },
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="donut"
        width="100%"
      />
    );
  }
}

class TotalOrdersChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      series: [
        {
          data: [20, 30, 50, 30, 50, 30, 50],
        },
      ],
      options: {
        yaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
          fill: {
            opacity: 0,
          },
        },
        xaxis: {
          axisBorder: {
            show: false,
          },
          axisTicks: {
            show: false,
          },
          labels: {
            show: false,
          },
        },
        grid: {
          yaxis: {
            lines: {
              show: false,
            },
          },
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          curve: "smooth",
        },
      },
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="area"
      />
    );
  }
}

class SalesStatisticsChart extends Component {
  constructor(props) {
    super(props);

    this.state = {
      options: {
        plotOptions: {
          bar: {
            columnWidth: "55%",
          },
        },
        chart: {
          toolbar: {
            show: false,
          },
        },

        dataLabels: {
          enabled: false,
        },
        stroke: {
          show: true,
          width: 4,
          colors: ["transparent"],
        },
        xaxis: {
          categories: [
            "1 Aug",
            "2 Aug",
            "3 Aug",
            "4 Aug",
            "5 Aug",
            "6 Aug",
            "7 Aug",
          ],
        },
        colors: ["#7e7cf7", "#dfe6f2"],
      },

      series: [
        {
          data: [30, 90, 45, 50, 49, 60, 80],
        },
        {
          data: [20, 60, 75, 80, 60, 70, 90],
        },
      ],
    };
  }
  render() {
    return (
      <Chart
        options={this.state.options}
        series={this.state.series}
        type="bar"
        width={"100%"}
        height={300}
      />
    );
  }
}

export {
  AuthorSalesChart,
  TechnologiesChart,
  TotalOrdersChart,
  SalesStatisticsChart,
};
