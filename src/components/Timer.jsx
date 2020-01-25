import React, { Component } from "react";
import { withRouter } from "react-router-dom";

 class Timer extends Component {
      constructor(props){
      super(props);
      this.state = {
      seconds: 15,
      totalscore : 0
    }
  };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds, counter } = this.state;

      if (seconds === 0) {
          clearInterval(this.myInterval); 
        } else {
          this.setState(({ seconds,totalscore}) => ({
            totalscore: seconds +1,
            seconds: seconds - 1
          }));
        }
    }, 1000);
  }
    componentWillUnmount() {
    clearInterval(this.myInterval);
  }
  render() {
    const { seconds, totalscore} = this.state
    return (
      <div>
        {seconds === 0 
         ?  this.props.history.push('/timesup')
         : <div>
           <h1 className="timer-content"> Time Remaining :{seconds < 10 ? `0${seconds}` : seconds}</h1>
           </div>
        }
      </div>


    
    );
      }
    }

    export default withRouter(Timer);