import React from "react";
import Button from "./Button";

export default class Gender extends React.Component {
    changeColor() {
        const newColor = this.state.color === 'gray' ? 'yellow' : 'gray';
        this.setState({ backgroundColor: newColor })
    }
    render() {
        return (
            <>
                <div className='title-style'>{this.props.title}</div>
                <div className="option-container">
                    <Button selectButton
                        bgColor={'white'}
                        wd={'26%'}
                        hg={'3em'}
                        text={'Uomo'} />
                    <Button selectButton
                        bgColor={'white'}
                        wd={'26%'}
                        hg={'3em'}
                        text={'Donna'} />
                    <Button selectButton
                        bgColor={'white'}
                        wd={'38%'}
                        hg={'3em'}
                        text={'Altro'} />
                </div>
            </>
        )
    }
}