import React from "react";


export default class Field extends React.Component {
    state = {
        field: '',
        compiled: false
    };
    handleChange = (event) => {
        const value = event.target.value;
        const name = event.target.name;

        this.setState({
            [name]: value,
            compiled: this.state.field !== "" ? true : false
        });
    };
    render() {
        const notCompiled = {
            fill: this.state.field.length > 0 ? "transparent" : "red",
            width: '0.4em',
            margin: '0em 0.5em 0.1em 0.5em'
        };

        return (
            <div className="square">
                <span>
                    <svg style={notCompiled} viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="50" cy="50" r="50" />
                    </svg>
                </span>
                <span>{this.props.title}</span>
                <div>
                    <input name="field" value={this.state.field} type='text' onChange={this.handleChange} placeholder={`Aggiungi ${this.props.section}`} />
                </div>
            </div>
        );
    }
}
