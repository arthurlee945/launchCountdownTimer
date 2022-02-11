import React from 'react';
import './App.scss';
import Hill from "./assets/pattern-hills.svg";
import Star from "./assets/bg-stars.svg";

class App extends React.Component {
  constructor(props){
    super(props);
    this.state={
      totalSec:777341,
      days:8,
      hours: 23,
      minutes:55,
      seconds:42,
      prevdays:0,
      prevhours:0,
      prevminutes:0,
      prevseconds:0,
      daysani:"flipAni",
      hoursani:"flipAni",
      minutesani:"flipAni",
      secondsani:"flipAni"
    }
    this.startAndEnd=this.startAndEnd.bind(this);
  }
  componentDidMount(){
    this.startAndEnd();
  }
  componentDidUpdate(prevProps, prevState){
    if(prevState.totalSec!==this.state.totalSec){
      let daysIS = Math.floor(this.state.totalSec/86400);
      let hoursIS = Math.floor((this.state.totalSec%86400)/3600);
      let minutesIS =Math.floor(((this.state.totalSec%86400)%3600)/60);
      let secondsIS = ((this.state.totalSec%86400)%3600)%60;
      if(this.state.totalSec > 0){
        this.setState({
          days: daysIS,
          hours: hoursIS,
          minutes: minutesIS,
          seconds: secondsIS,
          prevdays: prevState.days,
          prevhours:prevState.hours,
          prevminutes:prevState.minutes,
          prevseconds:prevState.seconds
        })
      }
      else if(this.state.totalSec<=0){
        this.startAndEnd();
      }
    }
    if(this.state.seconds!=prevState.seconds){
      this.state.totalSec%2===1? this.setState({secondsani:"flipAni2"}):this.setState({secondsani:"flipAni"});
    }
    if(this.state.minutes!=prevState.minutes){
      this.state.totalSec%2===1? this.setState({minutesani:"flipAni2"}):this.setState({minutesani:"flipAni"});
    }
    if(this.state.hours!=prevState.hours){
      this.state.totalSec%2===1? this.setState({hoursani:"flipAni2"}):this.setState({hoursani:"flipAni"});
    }
    if(this.state.days!=prevState.days){
      this.state.totalSec%2===1? this.setState({daysani:"flipAni2"}):this.setState({hoursani:"flipAni"});
    }
  }

  startAndEnd(){
    let countDown;
    if(this.state.totalSec===777341){
      countDown = setInterval(()=>{this.setState({totalSec:this.state.totalSec -1})}, 1000);
    }
    else{
      clearInterval(countDown)
    }
  }

  render(){
    let days = this.state.days<10? "0"+this.state.days: this.state.days;
    let hours = this.state.hours<10? "0"+this.state.hours: this.state.hours;
    let minutes =this.state.minutes<10? "0"+this.state.minutes: this.state.minutes;
    let seconds = this.state.seconds<10? "0"+this.state.seconds: this.state.seconds;

    let prevdays = this.state.prevdays<10? "0"+this.state.prevdays: this.state.prevdays;
    let prevhours = this.state.prevhours<10? "0"+this.state.prevhours: this.state.prevhours;
    let prevminutes =this.state.prevminutes<10? "0"+this.state.prevminutes: this.state.prevminutes;
    let prevseconds = this.state.prevseconds<10? "0"+this.state.prevseconds: this.state.prevseconds;
    
    let animationD = this.state.daysani;
    let animationH = this.state.hoursani;
    let animationM = this.state.minutesani;
    let animationS = this.state.secondsani;
    return (
      <div>
        <div>
          <img className ="deco" alt ="star" src={Star}/>
          <img className ="bg" alt ="hillBg" src={Hill}/>
        </div>
        <div className ="countDownBox">
          <h2 className ="headertxt">We're launching soon</h2>
          <div className="countDown">
            <div>
              <div className = "numBox">
                <div className="topBox">
                  <h1 className = "top">{days}</h1>
                </div>
                <div className ={`bottomBox ${animationD}`}>
                  <h1 className = "bottom">{days}</h1>
                </div>
                <div className ="flipPH">
                  <h1 className = "bottom">{prevdays}</h1>
                </div>
              </div>
              <p>Days</p>
            </div>
            <div>
              <div className = "numBox">
                <div className="topBox">
                  <h1 className = "top">{hours}</h1>
                </div>
                <div className ={`bottomBox ${animationH}`}>
                  <h1 className = "bottom">{hours}</h1>
                </div>
                <div className ="flipPH">
                  <h1 className = "bottom">{prevhours}</h1>
                </div>
              </div>
              <p>Hours</p>
            </div>
            <div>
              <div className = "numBox">
                <div className="topBox">
                  <h1 className = "top">{minutes}</h1>
                </div>
                <div className ={`bottomBox ${animationM}`}>
                  <h1 className = "bottom">{minutes}</h1>
                </div>
                <div className ="flipPH">
                  <h1 className = "bottom">{prevminutes}</h1>
                </div>
              </div>
              <p>Minutes</p>
            </div>
            <div>
              <div className = "numBox">
                <div className="topBox">
                  <h1 className = "top">{seconds}</h1>
                </div>
                <div className ={`bottomBox ${animationS}`}>
                  <h1 className = "bottom">{seconds}</h1>
                </div>
                <div className ="flipPH">
                  <h1 className = "bottom">{prevseconds}</h1>
                </div>
              </div>
              <p>Seconds</p>
            </div>
          </div>
          <div className = "socialBox">
            <a href="#" target="_blank"><i class="fa-brands fa-facebook-square"></i></a>
            <a href="#" target="_blank"><i class="fa-brands fa-pinterest"></i></a>
            <a href="#" target="_blank"><i class="fa-brands fa-instagram"></i></a>
          </div>
        </div>
      </div>
    );
  }
}


export default App;
