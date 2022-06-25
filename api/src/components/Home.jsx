import React, { useState, useEffect } from 'react'
import axios from 'axios'



const URL = "http://dataservice.accuweather.com/currentconditions/v1/188136?apikey=JUsmzjsk7iRheuwzjDvQEGgISOlY3XY0"
const Home = () => {
  const [weather, setWeather] = useState("")
  const [temprature, setTemprature] = useState("")
  const [city, setCity] = useState("")
  const [unit, setUnit] = useState("")

  const getData = () => {
    console.log("clicked")
    axios.get(URL).then(res => {
      const data = res.data[0]
      console.log(data)
      setCity(" bhuj")
      setWeather(data.WeatherText)
      setTemprature(data.Temperature.Metric.Value)
      setUnit(data.Temperature.Metric.Unit)


      // console.log(data.Temperature)
    })
  }

  const clear = () => {
    setCity("")
    setWeather("")
    setTemprature("")
    setUnit("")
  }

  const [dateState, setDateState] = useState(new Date());
  useEffect(() => {
    setInterval(() => setDateState(new Date()), 30000);
  }, []);

  // let today = new Date();
  // let date = today.getDate() + "-" + parseInt(today.getMonth() + 1) + "-" + today.getFullYear();

  return (
    <div className="container mx-4">
      <div className='text-center my-4'>
        <hr></hr>
        <tr>
          <th>Weather</th>
          <td>:</td>
          <td>{weather}</td>
        </tr>
        <tr>
          <th>Temprature</th>
          <td>:</td>
          <td>{temprature}{unit}</td>
        </tr>
        <tr>
          <th>City</th>
          <td>:</td>
          <td>{city}</td>
        </tr>
        <tr>
          <th>Date</th>
          <td>:</td>
          <td>
            <div className="App">
              {dateState.toLocaleDateString('en-GB', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
              })}</div>
          </td>
        </tr>
        <tr>
          <th>Time</th>
          <td>:</td>
          <div className="App">
            {dateState.toLocaleString('en-US', {
              hour: 'numeric',
              minute: 'numeric',
              second: 'numeric',
              hour12: true,
            })}
          </div>
        </tr>
        <button onClick={getData}>Get Data</button>
        <button onClick={clear}>Clear Data</button><hr></hr>
      </div >
    </div >
  )
}

export default Home