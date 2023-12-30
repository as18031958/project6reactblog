import React, { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { Store } from '../Store/Store';
import './Stylehome.css'; 
import './StyleAll.css'
import { Footer } from './Footer';

export const DyanamicComp = () => {
  const paremid = useParams().id;
  const Navi = useNavigate();
  const [contextData] = useContext(Store);

  return (
    <div>
    <div className='Dyan'> 
      {contextData.filter((data) => data.id === parseInt(paremid)).map((item, index) => (
        <div key={index}>
          <h1>{item.index}</h1>
          <img
            style={{ width: "340px"}}
            src={item.image}
            alt="not found"
          />
          <p>{item.category}</p>
          <p>{item.description.slice(1,100)}</p>
        </div>
      ))}
      <button className='Btn' onClick={() => Navi(-1)}>Go Back</button>
      <div>
      </div>
      {contextData.filter((data) => data.category === '').slice(0,3).map((item, index) => (
        <div key={index}>
          <h1>{item.index}</h1>
          <img
            style={{ width: "340px"}}
            src={item.image}
            alt="not found"
          />
          <p>{item.category}</p>
          <p>{item.description.slice(1,100)}</p>
        </div>
      ))}
      </div>

      <>
<Footer/>
</>
    </div>
  );
};


