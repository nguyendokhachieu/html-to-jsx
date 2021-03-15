import { Component } from 'react';
import HTML from './components/HTML';
import JSX  from './components/JSX';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      jsxString: ''
    }

    this.receiveHTML = this.receiveHTML.bind(this);
  }

  receiveHTML(txtHTML) {
    const HTMLtoJSX = require('htmltojsx');

      const converter = new HTMLtoJSX({
        createClass: false, // default `true`
        indent: '  ',       // default `'  '`
      });

      const html = txtHTML;
      const result = converter.convert(html);

      this.setState({
        jsxString: result
      });
  }

  render() {
    return (
      <div className="container">
      <div className="row">
        <HTML onReceiveHTML={ this.receiveHTML } />
        <JSX jsxString={ this.state.jsxString } />
      </div>
    </div>
    );
  }
}

export default App;
