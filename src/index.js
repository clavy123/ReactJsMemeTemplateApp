import ReactDOM from 'react-dom';
import './index.css';
import React,{Component} from 'react'
import axios from 'axios';
class Meme extends Component {
  constructor(props){

    super(props)
    this.state={
      count:[],
      loading:true
    }
 
   
  }

  componentDidMount()
  {
    this.setState({
      loading:false
    })
     let url="https://api.imgflip.com/get_memes";
     axios.get(url)
     .then(res=>{
         this.setState({
           count:res.data.data.memes,
           loading:true
         })

       
     })
     .catch(e=>{
       console.log(e)
     })
  }

 
  render() {
   
  
    return (
      <div className="bundle">
        <h3>MemesTemplate</h3>
        {this.state.loading || <p>Loading...</p>}
       <div className="target">
         { this.state.count?this.state.count.map(item=>{
           return(
             <div className="memes" key={item.id}>
               <h2>{item.name}</h2>
               <img src={item.url} width="300px" height="250px"/>
               </div>
           )
         }):null}
       </div>
      </div>
    )
  }
}

ReactDOM.render(
  <Meme/>,
  document.getElementById('root')
);

