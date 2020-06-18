// import React from './libraries/react.development.js'
// import ReactDOM from './libraries/react-dom.development.js'
import './packages/JSX-NS/jsxNS.js'

const hello = (x, y, z) => console.log("Success! Hello from globally namespaced JSX element:", x, y, z)


class Tester extends React.Component {
    constructor(props, context) {
        super(props, context)
        console.log('Props:', props)
        console.log('Context:', context)
        console.log('Updater:', this.updater)
    }

    render() {
        return (
            <div>
                {this.props.children}
            </div>
        )
    }
}

const Value = 'hello:world';

<Value></Value>

ReactDOM.render(
    <div>
        <Tester>
            <h3>Hello world</h3>
            <g:console-log g:go='hello'/>
        </Tester>
    </div>, 
    document.getElementById('root'), 
    ()=>console.log('Render complete')
)