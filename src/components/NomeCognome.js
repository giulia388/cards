import React from "react";

export default class NomeCognome extends React.Component {
    render() {
        return (
            <>
                <div className='title-style'>{this.props.title}</div>
                <form>
                    <input className='input' type={'text'}
                    pattern="[a-z]" required></input>
                </form>
            </>
        )
    }
}