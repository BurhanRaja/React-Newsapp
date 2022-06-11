import React, { Component } from 'react'
import NewsItem from './NewsItem';

export class News extends Component {

    // Handling States
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }
    }

    // Fetching API
    async componentDidMount() {
        const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=apikey&page=1"
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResult: parsedData.totalResults // passed directly in setState
        })
    }

    // Previous Button
    handlePrevClick = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=apikey&page=${this.state.page-1}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        })
    }
    
    // Next Button
    handleNextClick = async () => {
        const url = `http://newsapi.org/v2/top-headlines?country=in&apiKey=apikey&page=${this.state.page+1}&pageSize=20`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            page: this.state.page + 1,
            articles: parsedData.articles
        })
    }


    // Render All
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h1>NewsMonkey - <b>Top Headlines</b></h1>
                    <div className="row my-4">
                        {/* Mapping the url on the page */}
                        {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,76):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                                </div>
                        })}
                    </div>

                    {/* Buttons prev and next */}
                    <div className="container d-flex justify-content-around">
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>

                        {/* Math.ceil(this.state.totalResult/20) == 2 if (totalResult == 38) */}
                        <button className="btn btn-dark btn-next" disabled={this.state.page+1 > Math.ceil(this.state.totalResult/20)} onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
