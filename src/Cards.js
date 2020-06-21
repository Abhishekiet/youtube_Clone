import React, { Component } from 'react';
import { Card } from 'react-bootstrap';


class Cards extends Component{
   
    
    render()
    {   const {video,cardclick} = this.props
        
        return(
        <div className="p-2">
           <Card style={{ width: '18rem' }} className="shadow m-2" onClick={cardclick}>
              <Card.Img variant="top" src={video.snippet.thumbnails.medium.url} />
           
            <Card.Body>
                 <Card.Title>{video.snippet.title}</Card.Title>
                  <div className="text-muted"> {video.snippet.channelTitle} </div>

            </Card.Body>
           
           </Card>
        </div>)
    }
}
export default Cards
