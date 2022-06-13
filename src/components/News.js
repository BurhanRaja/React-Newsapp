import React, { Component } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

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
            loading: true,
            page: 1,
            totalResult: 0
        }

        document.title = `${this.capitalizeFirstLetter(this.props.category)} - NewsMonkey`
    }

    // To Capitalize the title and heading
    capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    async updateNews() {
        const url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=apiKey&page=${this.state.page}&pageSize=${this.props.pageSize}`
        this.setState({ loading: true })
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

    fetchMoreData = async () => {
        this.setState({ page: this.state.page + 1 })
        const url = `http://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=apiKey&page=${this.state.page}&pageSize=${this.props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResult: parsedData.totalResults,
            loading: false
        })
    };


    // Render All
    render() {
        return (
            <>
                {/* Heading */}
                <h1 className='text-center my-4'>NewsMonkey - <b> Top {this.capitalizeFirstLetter(this.props.category)} Headlines </b></h1>
                {this.state.loading && <Spinner />}

                {/* Infinite Scroll */}
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResult}
                    loader={<Spinner />} >

                    <div className="container">

                        <div className="row my-5">

                            {/* Displaying the content on the page */}
                            {this.state.articles.map((element) => {

                                return <div className="col-md-4 my-3" key={element.url}>
                                    <NewsItem title={element.title ? element.title.slice(0, 45) : ""} description={element.description ? element.description.slice(0, 76) : ""} imageUrl={element.urlToImage} newsUrl={element.url} timeDate={element.publishedAt} author={element.author ? element.author : "Anonymous"} sourceNews={element.source.name} />
                                </div>

                            })}
                        </div>
                    </div>

                </InfiniteScroll>
            </>
        )
    }
}

export default News
