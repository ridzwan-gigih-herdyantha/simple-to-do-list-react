import { Component } from 'react';
import './App.css';


function List(props) {
  return (
      <ul>
          {
              props.items.map((item, index) =>
              <li key={index}>{item}</li>)
          }
      </ul>
  )
}

class App extends Component {
  constructor(props){
    super(props)
    this.state = {
      todoItems : '',
      items :[]
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    this.setState({
      items : [...this.state.items,this.state.todoItems],
      todoItems : ""
    })
  }

  handleChange = (event) => {
    this.setState({
      todoItems : event.target.value
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input value={this.state.todoItems} onChange={this.handleChange}/>
          <button>Add</button>
        </form>
        <List items = {this.state.items}/>
      </div>
    )
  }
}

export default App;
