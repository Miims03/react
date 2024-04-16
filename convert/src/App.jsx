import { useState } from 'react'
import './App.css'
import { Button }  from '@material-ui/core'
import { ButtonGroup } from '@material-ui/core'

import Login from '@material-ui/icons/AccountCircle'
import Logout from '@material-ui/icons/ExitToApp'


function App() {

  return (
    <div id='App'>
      <ButtonGroup size='large' variant='contained' orientation='vertical'>
        <Button endIcon={<Login/>} color='primary' > 
          Login
        </Button>
        <Button startIcon={<Logout/>} color='secondary'>
          Logout
        </Button>
      </ButtonGroup>
    </div>
  )
}

export default App
