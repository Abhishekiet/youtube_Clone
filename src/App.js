import React, { Component } from 'react';
import axios from 'axios';
import Youtube from './Youtube'
import Search from './Search';
import Videos from './Videos';
import Selectedvideo from './Selectedvideo';

const key = "AIzaSyAF5_54-GwsF4w6zEF-fHvgN5eLf7simmg" 
//in case app start stop fetching data just create new key by new gmail id and replace api key in line no 35 with new key.
//https://www.youtube.com/watch?v=VPVzx1ZOVuw   - for more detail
const baseURL ='https://www.googleapis.com/youtube/v3'

class App extends Component{
  constructor(props){
    super(props)
    this.state={
    
      searchitem:"" ,
      videos:[] ,
      selectedvideo:[],

    }
  }
  handle=(e)=>{
    this.setState( {searchitem:e.target.value} )
  }

  search=async()=>{
   // axios.create({baseURL:"https://www.googleapis.com/youtube/v3"})
   const searchitem = this.state.searchitem
   const response = await Youtube.get('search', {
     params: {
       part:'snippet' ,
       maxresult : 15,
       key:"AIzaSyAF5_54-GwsF4w6zEF-fHvgN5eLf7simmg" ,
       q : searchitem
     }
   })
   
   this.setState( {videos:response.data.items , selectedvideo:[response.data.items[0]] })

  }
  cardclick=(video)=>{
   this.setState({selectedvideo:[video]})
  }

  render(){
    
    return(
      <div>
           <Search searchitem={this.state.searchitem} handle={this.handle} search={this.search}/>

           <div className="container-fluid p-2 m-3 ">
             <div className="row">
                 <div className="col-md-8 ">
                   <Selectedvideo selectedvideo={this.state.selectedvideo}/>
                 </div>
                
                 <div className="col-md-4">
                   <Videos videos={this.state.videos} cardclick={this.cardclick}/>    
                 </div>

             </div>   
          </div>
           
      </div>
    )
  }
}
export default App
