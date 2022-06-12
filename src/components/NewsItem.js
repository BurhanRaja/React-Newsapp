import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // De-structuring
        // Using newsUrl becoz it is the only unique thing in the json data
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <div>
                <div className="card">
                    <img src={imageUrl?imageUrl:'https://play-lh.googleusercontent.com/aCyq5_tBBCKcD5f4yuiE3kaNc1HDbPLA7Tq7PoEqBk1RVODSqJQUYpB_ekCrW23qnhw'} className="card-img-top card-image" style={{height: "100%", width: "100%"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}..</h5>
                            <p className="card-text">{description}..</p>
                            <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read in Detail</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
