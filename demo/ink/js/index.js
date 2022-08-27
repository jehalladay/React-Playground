// import React from 'react';
// import { render, Text, Color } from 'ink';
const React = require('react');

const {
  render,
  Text,
  Color
} = require('ink');

const App = () => {
  return /*#__PURE__*/React.createElement(Text, {
    color: "blue"
  }, /*#__PURE__*/React.createElement(Color, {
    blue: true
  }, "Hello World"));
};

render( /*#__PURE__*/React.createElement(App, null));