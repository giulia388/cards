import React from "react";

export default class Phone extends React.Component {
    render() {
        return (
            <>
                <div className='title-style'>{this.props.title}</div>
                <div className="phone-container">
                    <input type="tel" className="input"
                        pattern="[0-9]{3}" maxlength="12"
                        required></input>
                </div>
            </>
        )
    }
}