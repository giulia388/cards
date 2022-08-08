import React from "react";

export default class City extends React.Component {
    render() {
        return (
            <>
                <div className='title-style'>{this.props.title}</div>
               <input type={'text'} className='input' required></input> 
            </>
        )
    }
}