import './App.css';
import React from 'react'
import {Country} from './components/Country'
import {Card} from './components/Card'

class App extends React.Component{
  constructor(props){
    super(props);

  this.state = {
      animals: [ { name: 'sfweffewf1', color: 'wefewfwf1' }, { name: 'vewvewvwe2', color: 'wgewgweg2' }, { name: 'vewvwevwe3', color: 'wggwgwg3' }, { name: 'vwbwrh4', color: 'bfbwbw4' }, { name: 'wbwfbtw5', color: 'wbtbwtby5' }, { name: 'wbwfbtw6', color: 'wbtbwtby6' }],
      title: 'animals',
      showCards: false,
      showDescription: false
    }
  }

  inputHandler = (event) => {
    console.log(event.target.value)
    this.setState({
      title: event.target.value
    })
  }  
  
  
  eventHandler(title){
      console.log('work')
      this.setState({
        title
      })
    }

  showCardsHandler = () =>{
    this.setState({showCards: !this.state.showCards})
  }

  showDescHandler = () =>{
    this.setState({showDescription: !this.state.showDescription})
  }

  render(){

    let animal = this.state.animals

  // const style = {width: '80%',
  //                 minHeight: '200px',
  //                 margin: '0 auto',
  //                 border: '2px solid black'
  //     }

return(
  <div>
    <div style = {{textAlign: 'center'}}>
      <h1 onClick={this.inputHandler}>{this.state.title}</h1>
    </div>
    { this.state.showCards ? <div className = 'App'>
      {/* <h1>Hello word!!!</h1>
      <div style = {{width: '200px', minHeight: '100px', border: '2px solid red', margin: '0 auto'}}>
        <Country country= {{name: 'Russia', population: '150 000 000'}}/>
      </div> */}

      {/* <Card name = {animal[0].name} color = {animal[0].color} click={this.eventHandler.bind(this)}/>
      <Card name = {animal[1].name} color = {animal[1].color} click={this.eventHandler.bind(this)}/>
      <Card name = {animal[2].name} color = {animal[2].color} click={this.eventHandler.bind(this)}/>
      <Card name = {animal[3].name} color = {animal[3].color} click={this.eventHandler.bind(this)}/>
      <Card name = {animal[4].name} color = {animal[4].color} click={this.eventHandler.bind(this)}/> */}

      {animal.map((item, i) => {
        return (
          <Card name = {item.name} color = {item.color} click={this.eventHandler.bind(this)} key={i} show = {this.state.showDescription}/>
        )
      })}
    </div> : null}
  
    {/* <div>
      <button onClick={this.eventHandler.bind(this)}>PUSH</button>
      <select onChange={this.inputHandler}>
        <option>1</option>
        <option>2</option>
        <option>3</option>
      </select>
      <input type='text' onChange={this.inputHandler}/>
    </div> */}

    <div>
      <button onClick={this.showCardsHandler}>SHOW/HIDE</button>
      <button onClick={this.showDescHandler}>DESCRIPTOIN</button>
    </div>
  
  </div>
  
  
)

}

}

export default App;
