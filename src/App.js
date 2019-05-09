import React ,{Component} from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
class App extends Component {
    constructor(){
        super()
        // state object is an object that includes props which are going to change in the future.
        this.state = {
            robots: [],
            searchfield: ''
        }
    }
    componentDidMount(){
    fetch('https://jsonplaceholder.typicode.com/users').then(response => {
       return response.json();
    })
       .then(users => {
        this.setState({robots:users});
        })
    }
    
onSearchChange = (event) => {
    // Update the Searchfield state 
    this.setState({searchfield: event.target.value}) 
}
    render() {
        const filteredRobots = this.state.robots.filter((robot) => {
        return robot.name.toLowerCase().includes(this.state.searchfield.toLowerCase()) 
        })
        if (this.state.robots.length === 0){
            return <h1>LOADING</h1>
        }
        return (
            
            <div className = "tc">
                <h1 className = "f1">Robofriends</h1>
                <SearchBox searchChange = {this.onSearchChange} />
                <Scroll>
                <CardList robots={filteredRobots} />
                </Scroll>
            </div>
    
        )}
        }
export default App;