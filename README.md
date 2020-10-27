react-sticky-sidebar
================
React Component for sticky sidebar

[![react-sticky-sidebar ](example/example.gif)](https://portalnesia.com)

## Instalation ##


## Usage ##

Simply wrap your component with the ```Sidebar``` component:

```js
import React from 'react'
import Sidebar from 'react-sticky-sidebar'
/*
  I am using @material-ui as an example
*/
import {Grid} from '@material-ui/core'

export default function App(){
  return(
    <Grid container spacing={2}>
      <Grid item xs={12} lg={8}>
        <div id="main-container">
          <p>This is main component</p>
        </div>
      </Grid>
      <Grid item xs={12} lg={8}>
        <Sidebar id="main-container">
          <div>
            <p>This is the sidebar component that will sticky</p>
          </div>
        <Sidebar>
      </Grid>
    </Grid>
  )
}
```

## Props ##

| Property | Type | Default | Required? | Description |
|:---|:---|:---|:---:|:---|
| id | String |  | Yes | ID of main component |
| type | ```bottom``` or ```top``` | ```bottom``` | No | Type of sticky sidebar. <br>```top``` : Always sticky <br>```bottom``` : Based on scroll |
| offsetTop | Number | 84 | No | Offset top if there is a header component |
| minWidth | Number | 960 | No | Minimum width of windows (Based on your responsive template)<br>For example, sidebar will not sticky in mobile version (1 column layout page) |
| children | Node |  | No | Sidebar Component |

## Example ##

Click [here](https://github.com/Portalnesia/react-sticky-sidebar/blob/main/example/index.js "Example") to see code samples, or
Click on any [chord pages](https://portalnesia.com/chord "Portalnesia Chord") to see examples applied to the website

