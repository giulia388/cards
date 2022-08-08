import React from "react";

export default class Birth extends React.Component {
    render() {
        return (
            <>
                <div className='title-style'>{this.props.title}</div>
                <input className="input" type="date"
                    min="1932-01-01" max="2022-12-31" required></input>
            </>
        )
    }
}