import React from 'react';
import { render } from 'react-dom';
import ReactDOM from 'react-dom'
import { Grid, Typography, Button, ButtonGroup } from '@material-ui/core';

export default function App() {
    return (
        <Grid
            container
        ><p>Hello</p>
        </Grid>
    )
}
const rootDiv = document.getElementById('root')
render(<App />, rootDiv)