import React from "react";
import Button from "./Button";

export default class Gender extends React.Component {
    
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