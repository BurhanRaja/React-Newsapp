import React from 'react'

export default function Spinner() {
    return (
        <>
            <div className="text-center my-5">
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div>
        </>
    )
}
