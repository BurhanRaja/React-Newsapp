import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        // De-structuring
        // Using newsUrl becoz it is the only unique thing in the json data
        let {title, description, imageUrl, newsUrl} = this.props
        return (
            <div>
                <div className="card" style={{width: "18rem"}}>
                    <img src={imageUrl} className="card-img-top" style={{height: "20vw", width: "100%", objectFit: "cover"}} alt="..." />
                        <div className="card-body">
                            <h5 className="card-title">{title}..</h5>
                            <p className="card-text">{description}..</p>
                            <a href={newsUrl} target="_blank" className="btn btn-sm btn-primary">Read in Detail</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
