import React from "react";

export default class AboutYou extends React.Component {
    state = {
        username: ''
    }

    render() {
        return (
            <div className="about-you" >
                <div>{`Informazioni su ${this.props.name}`}</div>
                <input type='text' placeholder={`Parlaci di te`} maxlength={500}  />
            </div >
        )
    }
}