import React, { Component } from 'react';



class Currentvideo extends Component{
  constructor(props){
    super(props)
    this.state={
       
    }
  }
  
   
  render(){
    const { selectedvideo } = this.props
    var videosrc,title,description,channel
    
    if(selectedvideo.length === 0){
       return ( <div> 
     <h1 style={{marginLeft:"300px"}} className="text-center "> Please Search A video To Play...</h1> 
     <h5 style={{marginLeft:"300px"}} className="text-center text-primary shadow bg-light">-Developed and maintained by Abhishek Dameria</h5>
       </div>)}
   
   else{
       videosrc = `https://www.youtube.com/embed/${selectedvideo[0].id.videoId}`
       title = selectedvideo[0].snippet.title
       channel = selectedvideo[0].snippet.channelTitle
       description = selectedvideo[0].snippet.description
      }
   
    return(
      <div className=" shadow selectedvideo ">
           <div>
               <iframe className="m-3" width="750" height="500" src={videosrc} allowFullScreen title="test"></iframe>
               <h3 className="text-left m-2"> {title} </h3>
               <h5 className="text-left m-2"> {channel} </h5>
               <h6 className="text-left m-2">{description}</h6>
           </div>
      </div>
    )
  }
}
export default Currentvideo

