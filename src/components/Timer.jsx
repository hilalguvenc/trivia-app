import React, { Component } from "react";
import { withRouter } from "react-router-dom";

 class Timer extends Component {
      constructor(props){
      super(props);
      this.state = {
      seconds: 15
    }
  };
  componentDidMount() {
    this.myInterval = setInterval(() => {
      const { seconds } = this.state;

      if (seconds === 0) {
          clearInterval(this.myInterval);
        } else {
          this.setState(({ seconds }) => ({
            seconds: seconds - 1
          }));
        }
    }, 1000);
  }
    componentWillUnmount() {
    clearInterval(this.myInterval);
  }

  render() {
    const { seconds } = this.state
    return (
      <div>
        {seconds === 0 
         ?  this.props.history.push('/timesup')
         : <h1 className="timesup-content"> Time Remaining :{seconds < 10 ? `0${seconds}` : seconds}</h1>
        }
      </div>
    
    );
      }
    }

    export default withRouter(Timer);