import { Component } from "react";

class HTML extends Component {

    constructor(props) {
        super(props);

        this.state = {
            txt: ''
        };

        this.onTextAreaChange = this.onTextAreaChange.bind(this);
        this.onConvertClick = this.onConvertClick.bind(this);
    }

    onTextAreaChange(event) {
        this.setState({
            txt: event.target.value
        });
    }

    onConvertClick() {
        this.props.onReceiveHTML(this.state.txt);
    }

    render() {
        return <div className="col">
        <h3>HTML</h3>
        <textarea onChange={ this.onTextAreaChange } name="htmlTextArea" id="htmlTextArea" cols="55" rows="10"></textarea>
        <input onClick={ this.onConvertClick } type="button" name="convert" id="convert" className="convert" value="Convert" />
      </div>;
    }
}

export default HTML;