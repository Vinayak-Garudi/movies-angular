import { Component, ViewChild } from '@angular/core';
// import {
//   ChartComponent,
//   ApexAxisChartSeries,
//   ApexChart,
//   ApexXAxis,
//   ApexTitleSubtitle
// } from "ng-apexcharts";

// export type ChartOptions = {
//   series: ApexAxisChartSeries;
//   chart: ApexChart;
//   xaxis: ApexXAxis;
//   title: ApexTitleSubtitle;
// };

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})


export class UsersComponent {

  // @ViewChild("chart") chart!: ChartComponent;

  // public chartOptions: Partial<ChartOptions>;

  chartSeries: any = [40, 32, 28, 55]
  chartDetails: any = {
    type: 'pie'
    // toolbar: true
  }

  lineChart: any = {
    series: [
      {
        name: "MyData",
        data: [10, 50, 30, 40, 50],
      },
      {
        name: "YourData",
        data: [20, 10, 50, 40, 50],
      }
    ],
    chart: {
      type: "area"
    },
    title: {
      text: "Line Chart"
    },
    xaxis: {
      categories: [1, 2, 3, 4, 5]
    }
  }

  constructor() {
    // this.chartOptions = {
    //   series: [
    //     {
    //       name: "My-series",
    //       data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
    //     }
    //   ],
    //   chart: {
    //     height: 350,
    //     type: "bar"
    //   },
    //   title: {
    //     text: "My First Angular Chart"
    //   },
    //   xaxis: {
    //     categories: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"]
    //   }
    // };
  }


}
