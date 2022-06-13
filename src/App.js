import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <div>
        <Router>
            <Navbar/>
          <Routes>
              {/* General */}
              <Route exact path="/" element={<News key="general" pageSize="6" country="in" category="general" />} />
              {/* Business */}
              <Route exact path="business" element={<News key="business" pageSize="6" country="in" category="business" />} />
              {/* Technology */}
              <Route exact path="technology" element={<News key="technology" pageSize="6" country="in" category="technology" />} />
              {/* Science */}
              <Route exact path="science" element={<News key="science" pageSize="6" country="in" category="science" />} />
              {/* Entertainment */}
              <Route exact path="entertainment" element={<News key="entertainment" pageSize="6" country="in" category="entertainment" />} />
              {/* Health */}
              <Route exact path="health" element={<News key="health" pageSize="6" country="in" category="health" />} />
              {/* Sports */}
              <Route exact path="sports" element={<News key="sports" pageSize="6" country="in" category="sport" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

