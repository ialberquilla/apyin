/* global Plotly:true */

import React, {useEffect, useState} from 'react';
import csv from 'csvtojson/index'
import createPlotlyComponent from 'react-plotly.js/factory'

// @ts-ignore
const Plot = createPlotlyComponent(Plotly);

export const TimeChart = () => {
  const [data, setData] = useState<any>()
  useEffect(() => {

    const fetchData = async () => {
      const result = await fetch('https://raw.githubusercontent.com/plotly/datasets/master/finance-charts-apple.csv')
      const data = await result.text()
      csv().fromString(data).then((data: any) => {
        return setData([{
          type: "scatter",
          mode: "lines",
          name: 'AAPL High',
          x: data.map((datum: any) => datum.Date),
          y: data.map((datum: any) => datum.AAPL.High),
          line: {color: '#9284c4'}
        }, {
          type: "scatter",
          mode: "lines",
          name: 'AAPL Low',
          x: data.map((datum: any) => datum.Date),
          y: data.map((datum: any) => datum.AAPL.Low),
          line: {color: '#D83249'}
        }])
      })
      return data
    }

    fetchData()
  }, [])

  const layout = {
    // title: 'Time Series with Rangeslider',
    margin: {
      l: 40,
      t: 40,
      b: 40
    },
    xaxis: {
      autorange: true,
      color: '#D83249',
      range: ['2015-02-17', '2017-02-16'],
      rangeselector: {
        buttons: {visible: false}
      },
      rangeslider: {range: ['2015-02-17', '2017-02-16']},
      type: 'date'
    },
    yaxis: {
      color: '#D83249',
      autorange: true,
      range: [86.8700008333, 138.870004167],
      type: 'linear'
    },
    width: 500,
    height: 300,
    plot_bgcolor:"#111112",
    paper_bgcolor:"#111112"
  };
  return <Plot
    data={data}
  // @ts-ignore
  layout={layout}
  config={{displayModeBar: false}}
  />
}