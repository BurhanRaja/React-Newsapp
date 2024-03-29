import React from 'react'

const NewsItem = (props) => {
        // // De-structuring
        // // Using newsUrl becoz it is the only unique thing in the json data
        let { title, description, imageUrl, newsUrl, timeDate, author, sourceNews} = props
        return (
            <div>
                <div className="card">
                    <div className='position-absolute d-flex end-0'>
                    <span className="badge rounded-pill bg-danger">
                        {sourceNews}
                        <span className="visually-hidden">unread messages</span>
                    </span>
                    </div>
                    <img src={imageUrl ? imageUrl : 'https://play-lh.googleusercontent.com/aCyq5_tBBCKcD5f4yuiE3kaNc1HDbPLA7Tq7PoEqBk1RVODSqJQUYpB_ekCrW23qnhw'} className="card-img-top card-image" style={{ height: "100%", width: "100%" }} alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}..</h5>
                        <p className="card-text">{description}..</p>
                        <p className="card-text"><small className="text-muted">By <b>{author}</b> on {new Date(timeDate).toGMTString()}</small></p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-dark my-2">Read in Detail</a>
                    </div>
                </div>
            </div>
        )
}

export default NewsItem
