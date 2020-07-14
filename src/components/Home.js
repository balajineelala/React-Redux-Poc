import React from 'react';

class Home extends React.Component {

//constructor is executed once in the component life cycle
  constructor(props) {
    super(props);
    this.state = {lifeCycleMethod: "constructor"};
  }

//   static getDerivedStateFromProps(props, state) {
//     return { lifeCycleMethod: props.lifeCycleMethod };
//   }

  //It is executed last in the mounting phases which is used for asynchronus calls
  componentDidMount() {
    setTimeout(() => {
      this.setState({lifeCycleMethod: "componentDidMount"})
    }, 1000)
  }

  //update based on conditional rendering
  shouldComponentUpdate(nextProps, nextState) {
    if(this.props.lifeCycleMethod === nextProps.lifeCycleMethod){
        console.log('this.props.lifeCycleMethod', this.props.lifeCycleMethod)
        console.log('nextProps.lifeCycleMethod', nextProps.lifeCycleMethod)
        return true
    }
    return false;  
  }

  //Event Handler
  updateLifeCycle = () => {
    this.setState((state) => { 
        return { lifeCycleMethod: 'shouldomponentUpdate'};
    });
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    document.getElementById("div1").innerHTML = "Before the update, the life cycle method was " + prevState.lifeCycleMethod;
    return prevState
}
  componentDidUpdate() {
    document.getElementById("div2").innerHTML = "The updated life cycle method is " + this.state.lifeCycleMethod;
  }

  //which is executed in mounting and after each state update 
  render() {
    return (
        <div>
            <h1>Life Cycle Methods</h1>
            <p>Current Lifecycle Method is <b>{this.state.lifeCycleMethod}</b></p>
            <button type="button" onClick={this.updateLifeCycle}>Update Life Cycle</button>
            <div id="div1"></div>
           <div id="div2"></div>
        </div>
    );
  }
}
export default Home;
