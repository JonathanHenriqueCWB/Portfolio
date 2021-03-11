import { BrowserRouter as Router } from 'react-router-dom'
import React from 'react'

import Header from '../../components/header/Header'
import Content from '../../components/content/Content'
import Footer from '../../components/footer/Footer'

const App = () => (
    <div className='App'>
        <Router>
            <Header />
            <Content />
            <Footer />
        </Router>
    </div>
)

export default App