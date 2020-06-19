import React, { Component } from 'react';
import Card from './Cards'


class Videos extends Component{
  constructor(props){
    super(props)
    this.state={
    
    }
  }
  
  render(){
    const {videos,cardclick} = this.props
      const show = videos.map(video=> <Card video={video} cardclick={()=>cardclick(video)}/>)
    //const videos = this.props.videos.map(video=> <iframe width="560" height="315"
    // src={`https://www.youtube.com/embed/${video.id.videoId}`} />)
     
    return(
      <div>
          {show}  
      </div>
    )
  }
}
export default Videos