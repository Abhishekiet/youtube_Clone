import React, { Component } from 'react';
import { Card , Img, Body ,Title,  } from 'react-bootstrap';


class Cards extends Component{
    constructor(props){
        super(props)
    }
    
    render()
    {   const {video,cardclick} = this.props
        
        return(
        <div >
           <Card style={{ width: '18rem' }} className="shadow m-2" onClick={cardclick}>
              <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
           
            <Card.Body>
                 <Card.Title>{video.snippet.title}</Card.Title>
            </Card.Body>
           
           </Card>
        </div>)
    }
}
export default Cards