import React from 'react';
import './App.css';
import { connect } from 'react-redux'

// function App(props) {
class App extends React.Component {
    constructor(props) {
        super(props)
        this.props = props
    }


    componentDidMount() {
        console.log('reloaded')
    }
    render() {
        return (
            <div className="App">
            <header className="App-header">
                <p>
                Edit {this.props.count}{console.log(this.props.dispatch)}
                </p>
                <button onClick={()=>{this.props.dispatch({type: 'INCREMENT'})}}>+</button>
                <button onClick={()=>{this.props.dispatch({type: 'DECREMENT'})}}>&ndash;</button>
            </header>
            </div>
  );
}
}

const stateToProps = (state) => ({
    count: state.count
})

export default connect(stateToProps)(App);
