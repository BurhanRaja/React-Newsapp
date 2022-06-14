import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {
  
  apiKey= process.env.REACT_APP_NEWS_API
  
  state = {
    progress: 0,
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
            height={3}
          />
          <Navbar />

          <Routes>
            {/* General */}
            <Route exact path="/" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="general" pageSize="6" country="in" category="general" />} />
            {/* Business */}
            <Route exact path="business" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="business" pageSize="6" country="in" category="business" />} />
            {/* Technology */}
            <Route exact path="technology" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="technology" pageSize="6" country="in" category="technology" />} />
            {/* Science */}
            <Route exact path="science" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="science" pageSize="6" country="in" category="science" />} />
            {/* Entertainment */}
            <Route exact path="entertainment" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="entertainment" pageSize="6" country="in" category="entertainment" />} />
            {/* Health */}
            <Route exact path="health" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="health" pageSize="6" country="in" category="health" />} />
            {/* Sports */}
            <Route exact path="sports" element={<News setProgress={this.setProgress} apiKey={this.apiKey} key="sports" pageSize="6" country="in" category="sport" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}

