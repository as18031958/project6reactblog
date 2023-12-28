 import React, { useContext } from 'react'
// import React from 'react';
import { Store } from './../Store/Store';
import './Stylehome.css'
import SliderImg from './SliderImg'
import { Footer } from './Footer';
import { NavLink } from 'react-router-dom';
// import { DyanamicComp } from './DyanamicComp';
 





export const Home = () => {
  const [contextData] = useContext(Store)
  console.log(contextData)
  return (
    <div>
      <div className='main'>
              <div className='left'>
                  <div className='imgone'></div>
              </div>
              <div className='right'>
                  <div className='imgtwo'></div>
                   <div className='imgthree'></div>
              </div>
            </div>
            <h1 style={{color:"red"}}>The Latest</h1>

      {/* {contextData.map((item, index)=>{ */}
        return(
          <>
          <div className='one'>
            <div className='two box1'>
              <div className='sixth box2'>
               
          <> 
             {contextData.length > 0 && 
           <div>
              <NavLink to={`/dynamic/${contextData[0].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[0].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
              </div>
              
          <div className='seventh box2'>
              {contextData.length > 0 && 
                         <div>
                            <p>{contextData[0].category}</p>
                            <p>{contextData[0].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
            <div className='three box1'>
            <div className='eight box2'>
            <> 
             {contextData.length > 16 && 
           <div>
              <NavLink to={`/dynamic/${contextData[16].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[16].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
            </div>
              <div className='nine box2'>
              {contextData.length > 16 && 
                         <div>
                            <p>{contextData[16].category}</p>
                            <p>{contextData[16].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
            <div className='four box1'>
            <div className='ten box2'>
            <> 
             {contextData.length > 35 && 
           <div>
              <NavLink to={`/dynamic/${contextData[35].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[35].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
            </div>
            
              <div className='eleven box2'>
              {contextData.length > 35 && 
                         <div>
                            <p>{contextData[35].category}</p>
                            <p>{contextData[35].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
            <div className='five box1'>
            <div className='thirteen box2'>
            <> 
             {contextData.length > 47 && 
           <div>
              <NavLink to={`/dynamic/${contextData[47].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[47].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
            </div>
              <div className='fourteen box2'>
              {contextData.length > 47 && 
                         <div>
                            <p>{contextData[47].category}</p>
                            <p>{contextData[47].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
              </div>
              <div className='Add'>
                <div className='adImg'>
                  <img src="https://gumlet.assettype.com/afaqs/2023-10/1793fdfb-f50a-4b33-8c65-333b8edde7dd/MS_Dhoni_as_JioMart_s_brand_ambassador.jpg?auto=format,compress&fmt=webp&format=webp&w=1200&h=900&dpr=1.0" alt="Dhoni jacket" width="395" height="395"></img>
                </div>
              <SliderImg/>
              </div>
              <h1 style={{color:"red"}}>Top Post</h1>
              <div className='one'>
            <div className='two box1'>
              <div className='sixth box2'>
              <> 
             {contextData.length > 1 && 
           <div>
              <NavLink to={`/dynamic/${contextData[1].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[1].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
              </div>
              <div className='seventh box2'>
              {contextData.length > 1 && 
                         <div>
                            <p>{contextData[1].category}</p>
                            <p>{contextData[1].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
            <div className='three box1'>
            <div className='eight box2'>
            <> 
             {contextData.length > 17 && 
           <div>
              <NavLink to={`/dynamic/${contextData[17].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[17].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
            </div>
              <div className='nine box2'>
              {contextData.length > 17 && 
                         <div>
                            <p>{contextData[17].category}</p>
                            <p>{contextData[17].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
            <div className='four box1'>
            <div className='ten box2'>
            <> 
             {contextData.length > 36 && 
           <div>
              <NavLink to={`/dynamic/${contextData[36].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[36].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
            </div>
            
              <div className='eleven box2'>
              {contextData.length > 36 && 
                         <div>
                            <p>{contextData[36].category}</p>
                            <p>{contextData[36].description.slice(0, 150)}</p>
                          </div>
              }
              </div>
              </div>
            <div className='five box1'>
            <div className='thirteen box2'>
            <> 
             {contextData.length > 48 && 
           <div>
              <NavLink to={`/dynamic/${contextData[48].id}`}>
                   <img style={{width : "235px", height:"140px"}} src={contextData[48].image} alt='not found'/>
              </NavLink>
           </div>
           }
          </>
            </div>
              <div className='fourteen box2'>
              {contextData.length > 48 && 
                         <div>
                            <p>{contextData[48].category}</p>
                            <p>{contextData[48].description.slice(0, 145)}</p>
                          </div>
              }
              </div>
              </div>
              </div>
          </>
        )
     <Footer/>
</div>
  )
}


