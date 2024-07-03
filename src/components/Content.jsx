import React from 'react'
import "./style.css"

const Content = () => {
  return (
    <div className="d_contaicontent">
    <div className='container container_content'>
      {/* row */}
      <div className="row">
        <div className="col-3">
          <div className="items">
            <div className="icons p-3">
              <i className="fa-regular fa-images"></i>
            </div>
            <div className="">
            <h3 style={{textAlign:'center'}} className='pt-3'>Fresh new layout</h3>
            <p style={{textAlign:'center'}} className=''>With Bootstrap 5, we've created a fresh</p>
            <p style={{textAlign:'center'}}>new layout for this template!</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="items">
            <div className="icons p-3">
            <i className="fa-solid fa-download"></i>
            </div>
            <div className="">
            <h3 style={{textAlign:'center'}} className='pt-3'>Free to download</h3>
            <p style={{textAlign:'center'}} className=''>As always, Start Bootstrap has a</p>
            <p style={{textAlign:'center'}}>powerful collectin of free templates.</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="items">
            <div className="icons p-3">
            <i className="fa-solid fa-bars-progress"></i>
            </div>
            <div className="">
            <h3 style={{textAlign:'center'}} className='pt-3'>Jumbotron hero header</h3>
            <p style={{textAlign:'center'}} className=''>The heroic part of this template is the</p>
            <p style={{textAlign:'center'}}>jumbotron hero header!</p>
            </div>
          </div>
        </div>        
      </div>
      {/* row */}
      <div className="row">
        <div className="col-3">
          <div className="items">
            <div className="icons p-3">
            <i className="fa-brands fa-bootstrap"></i>
            </div>
            <div className="">
            <h3 style={{textAlign:'center'}} className='pt-3'>Feature boxes</h3>
            <p style={{textAlign:'center'}} className=''>We've created some custom feature</p>
            <p style={{textAlign:'center'}}>boxes using Bootstrap icons!</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="items">
            <div className="icons p-3">
            <i className="fa-solid fa-code"></i>
            </div>
            <div className="">
            <h3 style={{textAlign:'center'}} className='pt-3'>Simple clean code</h3>
            <p style={{textAlign:'center'}} className=''>We keep our dependencies up to date</p>
            <p style={{textAlign:'center'}}>and squash bugs as they come!</p>
            </div>
          </div>
        </div>

        <div className="col-3">
          <div className="items">
            <div className="icons p-3">
            <i className="fa-regular fa-circle-check"></i>
            </div>
            <div className="">
            <h3 style={{textAlign:'center'}} className='pt-3'>A name you trust</h3>
            <p style={{textAlign:'center'}} className=''>Start Bootstrap has been the leader in</p>
            <p style={{textAlign:'center'}}>free Bootstrap templates since 2013!</p>
            </div>
          </div>
        </div>        
      </div>
    </div>
    </div>
  )
}

export default Content