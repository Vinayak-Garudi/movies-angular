import { Component, OnInit, ViewChild } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';
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

// learn ngx-charts

export class UsersComponent implements OnInit {

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

  forecastArr: any[] = []
  maxTemp: any[] = []
  dateArr: any[] = []
  forecastChart!: any

  ngxview: any = [400, 300]
  gaugeData: any = [
    {
      name: 'Value',
      value: 75
    }
  ];

  constructor(private userData: UserDetailsService) {
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

  ngOnInit(): void {
    this.userData.fetchForecast().subscribe((res: any) => {
      console.log("forecast res", res.items)
      res.items.forEach((element: any) => {
        if (this.forecastArr.length < 5) {
          this.forecastArr.push(
            {
              maxTemp: element.temperature.max,
              date: new Date(element.date),
              showDate: element.date
            }
          )
        }
      });
      this.forecastArr.sort((a, b) => a.date - b.date)
      console.log("forrr", this.forecastArr)

      this.forecastArr.forEach((data: any) => {
        this.maxTemp.push(data.maxTemp)
        this.dateArr.push(data.showDate)
      })

      this.forecastChart = {
        series: [
          {
            name: "Max Temperature",
            data: this.maxTemp,
          }
        ],
        chart: {
          type: "area"
        },
        title: {
          text: "Line Chart"
        },
        xaxis: {
          categories: this.dateArr
        }
      }
    })
  }


}
