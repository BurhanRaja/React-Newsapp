import React, { Component } from 'react'

import NewsItem from './NewsItem';

export class News extends Component {
    constructor() {
        super()
        this.state = {
            articles: [],
            loading: false
        }
    }

    async componentDidMount() {

        const url = "http://newsapi.org/v2/top-headlines?country=in&apiKey=api"
        // alert(window.navigator.userAgent)
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles
        })


    }
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>NewsMonkey - Top Headlines</h2>
                    <div className="row my-4">
                        {this.state.articles.map((element)=>{
                        return <div className="col-md-4 my-3" key={element.url}>
                            <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,76):""} imageUrl={element.urlToImage} newsUrl={element.url} />
                        </div>
                        })}
                    </div>
                </div>
            </div>
        )
    }
}

export default News
