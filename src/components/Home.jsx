import React from 'react';
import './style.css';

const Home = () => {
  return (
    <div className="d_contaihome">
    <div className='container container_home'>
      <h1 style={{textAlign: 'center'}}>A warm welcome!</h1>
      <p style={{textAlign: 'center'}}>Bootstrap utility classes are used to create this jumbotron since the old component has been</p>
      <p style={{textAlign: 'center'}}>removed from the framework. Why create custom CSS when you can use utilities?</p>
      <div className="btn_call">
      <button className='btn btn-primary'>Call To Action</button>
      </div>
    </div>
    </div>
  )
}

export default Home