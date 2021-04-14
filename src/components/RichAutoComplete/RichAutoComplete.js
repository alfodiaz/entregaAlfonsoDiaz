import {artists} from "../../api/db/indexedDb";
import React from "react";
import "./rich-autocomplete.css";




export default class RichAutoComplete extends React.Component {
    componentDidMount(){
        this.items = artists;
    }
    componentWillUnmount(){

        this.items = artists;
    }

    componentDidUpdate(){
        this.items = artists;

    }
    
    constructor(props) {
      super(props);
      this.state = {
        suggestions: [],
        text: ''
      }
    }
    
  onTextChanged = (e) => {
    const value = e.target.value;
    let suggestions = [];
    if(value.length > 0) {
      const regex = new RegExp(`^${value}`, 'i');
      suggestions = this.items.sort().filter(v => regex.test(v));
    }
    this.setState(() => ({suggestions, text: value}));
  }
  
  suggestionSelected(value) {
    this.setState(() => ({
      text: value,
      suggestions: []
    }));
  }
  
  renderSuggestions() {
    const {suggestions} = this.state;
    if(suggestions.length === 0) {
      return null;
    }
    return (
      <div className="srchList">
        <ul>
          {suggestions.map((item) => <li onClick={() => this.suggestionSelected(item)}>{item}</li>)}
        </ul>
      </div>
    );
  }
  
    render() {
      const { text } = this.state;
      return (
          <>
            <div className="input">
              <input className="richAutoComplete" value={text} onChange={this.onTextChanged} type="text" placeholder="Type an Artist" />
            </div>
            <div className="">
              {this.renderSuggestions()}
            </div>
          </>
      );
    }
  }
          
