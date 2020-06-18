// import React from './libraries/react.development.js'
// import ReactDOM from './libraries/react-dom.development.js'
import './packages/JSX-NS/jsxNS.js';

const hello = (x, y, z) => console.log("Success! Hello from globally namespaced JSX element:", x, y, z);

class Tester extends React.Component {
  constructor(props, context) {
    super(props, context);
    console.log('Props:', props);
    console.log('Context:', context);
    console.log('Updater:', this.updater);
  }

  render() {
    return /*#__PURE__*/React.createElement("div", null, this.props.children);
  }

}

const Value = 'hello:world';

/*#__PURE__*/
React.createElement(Value, null);
ReactDOM.render( /*#__PURE__*/React.createElement("div", null, /*#__PURE__*/React.createElement(Tester, null, /*#__PURE__*/React.createElement("h3", null, "Hello world"), /*#__PURE__*/React.createElement("g:console-log", {
  "g:go": "hello"
}))), document.getElementById('root'), () => console.log('Render complete'));