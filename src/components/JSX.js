import { Component } from "react";

class JSX extends Component {

    constructor(props) {
        super(props);

        this.state = {
            jsx: ''
        }

        this.onTextAreaChange = this.onTextAreaChange.bind(this);
    }

    onTextAreaChange() {
        this.setState({
            jsx: this.props.jsxString
        })
    }

    render() {
        return <div className="col">
        <h3>JSX</h3>
        <textarea onChange={ this.onTextAreaChange } name="jsxTextArea" id="jsxTextArea" cols="55" rows="10" value={ this.props.jsxString }></textarea>
      </div>;
    }
}

export default JSX;