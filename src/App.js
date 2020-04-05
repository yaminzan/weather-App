import React, { Component } from 'react';
import './App.css';
import Form from './component/Form';
import Weather from './component/Weather';


//http://api.openweathermap.org/data/2.5/weather?q=cairo,egypt&appid=e36ed364400282e43250b6c4c0274d44

const API_KEY ="c0c59c7372fadfb5ac95327a71e67246";
class App extends Component {

  state = {
      tempreature:'',
      city:'',
      country:'',
      humidity:'',
      description:'',
      error:'',
      
  }

  getWeather = async (e) =>{
    e.preventDefault()
    const city =e.target.elements.city.value;
    const country =e.target.elements.country.value;
    const api = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}`);
    const data = await api.json();
    console.log(data)
    if (city && country){
      this.setState({
        tempreature:data.main.temp,
        city:data.name,
        country:data.sys.country,
        humidity:data.main.humidity,
        description:data.weather[0].description,
        error:'',
      })
    }  else {
      this.setState({
        tempreature:'',
        city:'',
        country:'',
        humidity:'',
        description:'',
        error:'pls enter data',
      })
    }


  }


  render(){
    return(
      <div className="App">
        <div class="grid-container1">
        <div item>
        <div class="img" ></div>
        </div>
        </div>
        <div class="mine-comp" >
        <Form getWeather={this.getWeather}/>
        <Weather
                tempreature= {this.state.tempreature}
                city={this.state.city}
                country={this.state.country}
                humidity={this.state.humidity}
                description={this.state.description}
                error={this.state.error}
        />
        
        <div class="footer" ></div>
        </div>
       
      </div>
    );
  }
}

export default App;
