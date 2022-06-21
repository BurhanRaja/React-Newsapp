import React, { useState, useEffect } from 'react'
import NewsItem from './NewsItem';
import Spinner from './Spinner';
import propTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {

    // Handling States
    const [articles, setArticles] = useState([])
    const [loading, setLoading] = useState(true)
    const [page, setPage] = useState(1)
    const [totalResults, setTotalResults] = useState(0)

    // document.title = `${capitalizeFirstLetter(props.category)} - NewsMonkey`

    // To Capitalize the title and heading
    const capitalizeFirstLetter = (string) => {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    // Fetching API
    const updateNews = async () => {
        props.setProgress(10)
        const url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=1&pageSize=${props.pageSize}`

        setLoading(true)

        props.setProgress(30)

        let data = await fetch(url)
        let parsedData = await data.json()

        props.setProgress(70)

        setArticles(parsedData.articles)
        setTotalResults(parsedData.totalResults)
        setLoading(false)

        props.setProgress(100)
    }

    // Mounting Content on the website
    useEffect(() => {
        updateNews();
    })

    const fetchMoreData = async () => {
        setPage(page + 1)
        const url = `http://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.pageSize}`
        let data = await fetch(url)
        let parsedData = await data.json()

        setArticles(articles.concat(parsedData.articles))
        setTotalResults(parsedData.totalResults)
    };


    // Render All
    return (
        <>
            {/* Heading */}
            <h1 className='text-center my-4'>NewsMonkey - <b> Top {capitalizeFirstLetter(props.category)} Headlines </b></h1>
            {loading && <Spinner />}

            {/* Infinite Scroll */}
            <InfiniteScroll
                dataLength={articles.length}
                next={fetchMoreData}
                hasMore={articles.length !== totalResults}
                loader={<Spinner />}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Yay! You have seen it all</b>
                    </p>}
            >

                <div className="container">
                    <div className="row my-5">

                        {/* Displaying the content on the page */}
                        {articles.map((element) => {
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

// Type of props
News.defaultProps = {
    country: 'in',
    pageSize: 6,
    category: 'general',
}
News.propTypes = {
    country: propTypes.string,
    pageSize: propTypes.number,
    category: propTypes.string,
}

export default News
