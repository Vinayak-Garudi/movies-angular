import { Component, OnInit } from '@angular/core';
import { UserDetailsService } from 'src/app/services/user-details.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})

export class UsersComponent implements OnInit {


  chartSeries: any = [40, 32, 28, 55]
  chartDetails: any = {
    type: 'pie'
    // toolbar: true
  }

  lineChart: any = {
    series: [
      {
        name: "My Data",
        data: [10, 50, 30, 40, 50],
      },
      {
        name: "Your Data",
        data: [20, 10, 50, 40, 50],
      }
    ],
    chart: {
      type: "area"
    },
    title: {
      text: "Some Chart"
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

  public guageChartOptions: any


  constructor(private userData: UserDetailsService) {
    this.guageChartOptions = {
      series: [75],
      chart: {
        type: 'radialBar'
      },
      plotOptions: {
        radialBar: {
          hollow: {
            size: '50%'
          },
          track: {
            background: "#fff",
          },
        },
        labels: ['Guage'],
      }
    }

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
