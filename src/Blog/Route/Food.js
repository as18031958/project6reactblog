import React,{useContext} from 'react'
import { Footer } from './Footer';
import { Store } from '../Store/Store';
import { NavLink } from 'react-router-dom';
import './Stylehome.css'
 import './StyleAll.css'


export const Food = () => {
  const [data] = useContext(Store);
  return (
    
    <div>
    <div className='mainbox'>
      <div className='leftbox' >
      <h1 id='h2'>This is your Recipies</h1>
      
      {data.filter((e)=> e.category === 'FOOD').slice(0,7).map((item,index)=>{
        return(
          <>
          <h1>{item.name}</h1>
          <div className='holly'>
          <div>
          <NavLink to={`/dynamic/${item.id}`}>
                   <img style={{width : "235px", height:"140px"}} src={item.image} alt='not found'/>
              </NavLink>
              </div>
              <div>
          <p>{item.category}</p>
          <p>{item.description.slice(1,150)}</p>
          </div>
          </div>
          </>
        )
      })}
   </div>
       
       <div className='rightone' >
      {/* <h1>This is Boollywood</h1> */}
      {data.filter((e)=> e.category === 'FOOD').slice(7,9).map((item,index)=>{
        return(
          <>
          <h1>{item.name}</h1>
          <NavLink to={`/dynamic/${item.id}`}>
                   <img style={{width : "235px", height:"140px"}} src={item.image} alt='not found'/>
              </NavLink>
          <p>{item.category}</p>
          <p>{item.description.slice(1,100)}</p>
          </>
        )
      })}
      <div className='Ad'>
        <h1>Your Offer</h1>
      <img id='food' src='https://images.unsplash.com/photo-1498645337534-d925b95f4eea?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8YWR8ZW58MHx8MHx8fDA%3D' alt='not found'></img>
      </div>
      </div>
      
      
   </div>
   <>
   <Footer/>
   </>
   </div>
  )
}
