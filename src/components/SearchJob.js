import React from "react";
import Button from "./Button";

export default class SearchJob extends React.Component {
    render() {
        return (
            <>
                <div className='title-style'>{this.props.title}</div>
                <div className="option-container">
                    <Button selectButton
                        bgColor={'white'}
                        wd={'26%'}
                        hg={'3em'}
                        text={'Remoto'} />
                    <Button selectButton
                        bgColor={'white'}
                        wd={'20%'}
                        hg={'3em'}
                        text={'In sede'} />
                    <Button selectButton
                        bgColor={'white'}
                        wd={'45%'}
                        hg={'3em'}
                        text={'Remoto + in sede'} />
                </div>
            </>
        )
    }
}