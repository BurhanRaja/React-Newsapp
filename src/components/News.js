import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'

export class News extends Component {

    // Props
    defaultprops = {
        country: "in",
        pageSize: 6,
        category: "general",
    }

    // Type of Props
    proptypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number,
        category: PropTypes.string
    }

    // Handling States
    constructor(props) {
        super(props)
        this.state = {
            articles: [],
            loading: false,
            page: 1
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    // To Capitalize the title and heading
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        const url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=apikey&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({loading: true})
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: parsedData.articles,
            totalResult: parsedData.totalResults, // passed directly in setState
            loading: false
        })
    }

    // Fetching API
    async componentDidMount() {
        this.updateNews()
    }

    // Previous Button
    handlePrevClick = async () => {
        this.setState({
            page: this.state.page-1
        })
        this.updateNews(this.state.page)
    }
    
    // Next Button
    handleNextClick = async () => {
        this.setState({
            page: this.state.page+1
        })
        this.updateNews(this.state.page)
    }


    // Render All
    render() {
        return (
            <div>
                <div className="container my-5">
                    {/* Heading */}
                    <h1 className='text-center'>NewsMonkey - <b> Top Headlines on {this.capitalizeFirstLetter(this.props.category)} </b></h1>
                    {this.state.loading && <Spinner/>}
                    <div className="row my-5">
                        {/* Displaying the content on the page */}
                        {!this.state.loading && this.state.articles.map((element)=>{

                        return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title?element.title.slice(0,45):""} description={element.description?element.description.slice(0,76):""} imageUrl={element.urlToImage} newsUrl={element.url} timeDate={element.publishedAt} author={element.author?element.author:"Anonymous"} sourceNews={element.source.name} />
                                </div>

                        })}
                    </div>

                    {/* Buttons prev and next */}
                    <div className="container d-flex justify-content-around">
                        {/* Previous */}
                        <button disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}>&larr; Previous</button>
                        {/* Next */}
                        <button className="btn btn-dark btn-next" disabled={this.state.page+1 > Math.ceil(this.state.totalResult/this.props.pageSize)} onClick={this.handleNextClick}>Next &rarr;</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
