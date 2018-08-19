import React ,{Component}from 'react';
import CardList from './CardList';
import SearchBox from './SearchBox';
import './App.css';
import Scroll from './Scroll';
  




class App extends Component 
{
   constructor(){
      super()
   	this.state={
     Robots:[],
    searchfield: ''
   	}
   }

   componentDidMount(){
   fetch('https://jsonplaceholder.typicode.com/users')
   .then(response => response.json())
   .then(users =>this.setState({Robots:users}))
   }
  onSearchChange=(event)=>{
  	this.setState({ searchfield:event.target.value })
  	
  
  
  }

   
    render() 
    {
		const filteredrobots= this.state.Robots.filter(Robots => {
  		return Robots.name.toLowerCase().includes(this.state.searchfield.toLowerCase());
  	})
		if(this.state.Robots.length===0){
			return <h1> Loading </h1>
		}
		else{
	return(
		<div className='tc'>
    <h1 className='f2'> Robofriends </h1>

    <SearchBox searchChange={this.onSearchChange}/>
    <Scroll>
    <CardList Robots={filteredrobots}/>
   </Scroll>

    </div>
		);

}
}
}
export default App;
