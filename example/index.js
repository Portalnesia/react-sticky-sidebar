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
