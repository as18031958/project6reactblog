// import React, { useContext } from 'react'
// import { useNavigate,useParams } from 'react-router-dom'
// import { Store } from '../Store/Store'
// import './Stylehome.css'


// export const DyanamicComp = () => {
//     const paremid = useParams().id;
//     const Navi = useNavigate();
//     const [contextData] = useContext(Store);
  
//     return (
//         <div>
    
//         {contextData.filter((data)=>data.id === parseInt(paremid)).map((item,index) =>{
//         return (
//         <div key={index}>
//             <h1>{item.index}</h1>
//             <img style={{width: "200px", marginTop:"200px", marginLeft:"200px"}} src={item.image} alt='not fond'/>
//             <p>{item.category}</p>
//           <p>{item.description.slice(1,100)}</p>
             
//         </div>
//         )

//         })}
//         <button class="Btn" onClick={()=> Navi(-1)}>Go Back</button>
       
//        </div>
//   )
// }

import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store/Store';
import './Stylehome.css'; // Assuming this file contains styles for the button

export const DyanamicComp = () => {
  const paremid = useParams().id;
  const Navi = useNavigate();
  const [contextData] = useContext(Store);

  return (
    <div> {/* Wrap content in a div for better structure */}
      {contextData.filter((data) => data.id === parseInt(paremid)).map((item, index) => (
        <div key={index}>
          <h1>{item.index}</h1>
          <img
            style={{ width: "200px", marginTop: "200px", marginLeft: "200px" }}
            src={item.image}
            alt="not found"
          />
          <p>{item.category}</p>
          <p>{item.description.slice(1, 100)}</p>
        </div>
      ))}
      <button style={{marginTop:'100px'}} onClick={() => Navi(-1)}>Go Back</button>
    </div>
  );
};


