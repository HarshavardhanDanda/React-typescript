import React, { Component } from "react";

class Greet extends Component<{name:string
course:string}> 
{
  state={greet:"Hi"};

  showCourse() {
    this.setState({
      greet: "hello"
    })
  }
  
  render() {
    return (
      <div>
        <h1>
          {this.state.greet} {this.props.name}, your course is {this.props.course}
        </h1>
        <button onClick={()=>this.showCourse()}>subscribe</button>
      </div>
    );
  }
}

export default Greet;