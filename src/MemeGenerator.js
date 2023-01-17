import React, { Component } from "react";
import './App.css'

class MemeGenerator extends Component {
  constructor() {
    super();
    this.state = {
      font_size: "16",
      topText: "",
      bottomText: "",
      randomImg: "https://i.imgflip.com/1bij.jpg",
      allMemeImgs: [],
      color:""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  
  handleSubmit = (event) => {
    event.preventDefault();
    console.log(this.state);
  }

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
    this.setState({
      color:event.target.value
    })
  };

  handleClick = () => {
    //let randomNumber = Math.floor(
     // Math.random() * this.state.allMemeImgs.length
    //);
    //this.setState({ randomImg: "http://i.imgflip.com/1bij.jpg" }); 
    //this.setState({ randomImg: this.state.allMemeImgs[randomNumber].url }); 
    
    fetch("https://pttbeauty-restful.onrender.com/api/images/random/") //https://pttbeauty-restful.onrender.com/api/images/random/
    .then(data => data.json())
    .then(response => {
      const { id, Url } = response;
      console.log(id);
      console.log(Url);
      this.setState({ randomImg: Url });
    });  
  
  };

  increaseFont = () => {};

  componentDidMount() { //https://api.imgflip.com/get_memes
    fetch("https://pttbeauty-restful.onrender.com/api/images/random/") //https://pttbeauty-restful.onrender.com/api/images/random/
      .then(data => data.json())
      .then(response => {
        const { id, Url } = response;
        console.log(id);
        console.log(Url);
        this.setState({ randomImg: Url });
      });
  }

  render() {
    console.log(this.state.color)
    console.log(this.state.font_size);
    return (
      <div>
        <div className="meme-form">
          <input
            type="text"
            name="topText"
            placeholder="top text"
            onChange={this.handleChange}
            value={this.state.topText}
          />
          <br />
          <input
            type="text"
            name="bottomText"
            placeholder="bottom text"
            onChange={this.handleChange}
            value={this.state.bottomText}
          />
          <br />
          <select className="dropdown" type="number" name="font_size" placeholder="font size" value={this.state.font_size} onChange={this.handleChange}>
            <option >16</option>
            <option >18</option>
            <option >20</option>
            <option >22</option>
          </select>
          <br/>
          <div className="Radio-button">
          <form >
             <label>
             <input type="radio"  value="red" name="color"  onChange={this.handleChange} />
             <span>Red</span>
              </label> 
              <label>
             <input type="radio"  value="blue"  name="color" onChange={this.handleChange}/> 
             <span>Blue</span>
              </label>
              <label>
             <input type="radio"  value="green"   name="color" onChange={this.handleChange} />
             <span>Green</span>
              </label>
            </form>
          </div>
        
          <button onClick={this.handleClick}>Apply</button>
        </div>
        <div className="meme">
          <h2
            style={{ fontSize: Number(this.state.font_size),
              color:this.state.color,
            fontFamily:'Montserrat'}}
            className="top"
          >
            {this.state.topText}
          </h2>
          <img src={this.state.randomImg} alt="" />
          <h2
            style={{ fontSize: Number(this.state.font_size),
              color:this.state.color,
              fontFamily:'Montserrat' }}
            className="bottom"
          >
            {this.state.bottomText}
          </h2>
        </div>
       
      </div>
    );
  }
}

export default MemeGenerator;








































