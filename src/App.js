import React from 'react'
import "./index.css"
import Navbar from './components/Navbar'
import { Box } from '@mui/material'
import LogoBar from './components/LogoBar'
import Display from './components/Display'
import FrameWork from './components/FrameWork'

const App = () => {
  return (
    <Box>
        <Navbar />
        <Box bgcolor='#0B0E15' minHeight='95vh'>
            <LogoBar />
            <Display />
            <FrameWork />
        </Box>
    </Box>
  )
}

export default App
