import React, { Component } from 'react';
import { Form  } from 'react-bootstrap';
import logo from './logo.png'


class Search extends Component{
 state={
       
  }

  render(){
    
    return(
    <div style={{marginLeft:"80px"}}>
      <div className="container m-3 shadow ">
         <div style={{marginLeft:"px"}} className="row">
         <div className="col-md-2">
         <img src={logo} alt="img"/>
         </div>
           <div className="col-md-9">
            <Form.Control style={{minHeight:"40px"}}className="m-2" type="email" placeholder="Search for a video "
             value={this.props.searchitem} onChange={this.props.handle} />
            </div> 
            <div col-md-2>
               <button style={{marginTop:"10px"}} className="btn btn-primary " onClick={this.props.search}>search </button>
           </div> 
         </div> 
      </div>
     </div>
    )
  }
}
export default Search