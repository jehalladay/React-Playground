// import React from 'react';
// import { render, Text, Color } from 'ink';
const React = require('react')
const { render, Text, Color } = require('ink')


const App = () => {

    return (
        <Text color='blue'>
            <Color blue>
                Hello World
            </Color>
        </Text>
    )
}

render(<App />)