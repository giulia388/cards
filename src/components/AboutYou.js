import React from "react";

export default class AboutYou extends React.Component {
    state = {
        username: ''
    }

    render() {
        return (
            <div className="about-you" >
                <div>{`Informazioni su ${this.props.name}`}</div>
                <span class="textarea" role="textbox" maxlength={500}
                    border={'1px solid black'}
                    padding={'1px 6px'}
                    display={'block'}
                    width={'100%'}
                    overflow={'hidden'}
                    resize={'both'}
                    min-height={'40px'}
                    line-height={'20px'}
                >
                </span>
            </div >
        )
    }
}