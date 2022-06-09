import React, { Component } from 'react'

import NewsItem from './NewsItem';

export class News extends Component {
    render() {
        return (
            <div>
                <div className="container my-3">
                    <h2>NewsMonkey - Top Headlines</h2>
                    <div className="row my-4">
                        <div className="col-md-4">
                            <NewsItem title="My Title" description="My extended description"/>
                        </div>
                        <div className="col-md-4">
                            <NewsItem/>
                        </div>
                        <div className="col-md-4">
                            <NewsItem/>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default News
