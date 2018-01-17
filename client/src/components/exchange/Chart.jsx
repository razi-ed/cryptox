import React from 'react';
import {withHighcharts, HighchartsChart,
   Chart, Title, Legend, XAxis, YAxis, LineSeries} from 'react-jsx-highcharts';
import Highcharts from 'highcharts';
const plotOptions = {
  series: {
    pointStart: 2013,
  },
};
const MyChart = () => (
  <HighchartsChart plotOptions={plotOptions} className='plot'>
    <Chart />
    <Title>Trends in Crypto Currencies</Title>
      <Legend layout="vertical" align="right" verticalAlign="middle" />
      <XAxis>
        <XAxis.Title type="datetime" min={2013} max={2017} >Time</XAxis.Title>
      </XAxis>
      <YAxis id="number">
        <YAxis.Title>Price</YAxis.Title>
        <LineSeries name="BitCoin" data={[43934, 52503, 57177, 69658, 97031]} />
        <LineSeries name="Etherium" data={[24916, 24064, 29742, 29851, 32490]}/>
        <LineSeries name="Dash" data={[11744, 17722, 16005, 19771, 20185]} />
        <LineSeries name="Lite Coin" data={[null, null, 7988, 12169, 15112]} />
        <LineSeries name="Ripple" data={[12908, 5948, 8105, 11248, 8989]} />
      </YAxis>

  </HighchartsChart>
);

export default withHighcharts(MyChart, Highcharts);
