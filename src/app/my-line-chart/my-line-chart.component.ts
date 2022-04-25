

import { Component } from '@angular/core';
import { ChartOptions, ChartDataset, ChartType, Color, ChartConfiguration } from 'chart.js';


@Component({
  selector: 'app-my-line-chart',
  templateUrl: './my-line-chart.component.html',
  styleUrls: ['./my-line-chart.component.css']
})
export class MyLineChartComponent {
  public lineChartData: ChartConfiguration['data'] = {
     
    datasets: [

      {

        data: [ 0,3,1,2,0.5,5,0 ],

        borderColor: 'blue',

        pointBackgroundColor: 'blue',

      }

    ],

    labels: [ 1,2,3,4,5,6,7 ],

  };
  public lineChartOptions: ChartConfiguration['options'] = {
    responsive: true,
    elements: {

      line: {

        tension: 0.5

      }

    },

    scales: {

      // We use this empty structure as a placeholder for dynamic theming.

      x: {},


      'y-axis-0':

        {
          display:false,
          grid:{
            color: '#ffff',

          display:false

          },
          ticks: {

            display:false
  
          }

        },

      'y-axis': {
        
        display:false,
        grid:{
          color: 'rgb(00,00,00)',

        display:false

        },
        ticks: {

          display:false

        }
      }

    },

    plugins: {

      legend: {
        display:false,
        labels: {
            // This more specific font property overrides the global property
            color:"white"
        }
    }
    }

  };
  public chartColors: Color[]=[]
 
  public lineChartLegend = true;
  public lineChartType: ChartType = 'line';
  public lineChartPlugins:ChartConfiguration['plugins'] = []
 
  constructor() { }
}
