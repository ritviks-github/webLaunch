import React from 'react'

export default function Home() {
  return (
    <div>
        {/* navbar starts */}
      <div style={{display:'flex',flexWrap:'wrap',justifyContent:'space-around'}}>
        <h1 style={{fontWeight:'900',color:'#006eff'}}>WebLaunch</h1>
        <div style={{display:'flex',flexWrap:'nowrap'}}>
            <a href="#about"><button className='btn btn-primary'>About Us</button></a><a href="https://nexusinfo.in/"><button style={{marginLeft:'2px',marginRight:'2px'}} className='btn btn-primary'>Nexus Info</button></a><a href="tel:911"><button className='btn btn-primary'>Contact Us</button></a>
        </div>
      </div>
      {/* navbar ends */}
      <div style={{height:'100vh',display:'flex',alignItems:'center',justifyContent:'center',flexWrap:'wrap'}} id="belNav">
        <div>
        <h1 style={{fontWeight:'900',color:'white'}}>Grow you Business with WebLaunch</h1>
        <div style={{color:'whitesmoke'}}>Get free ideas for your business growth and learn why a website is important for your business</div>
        </div>
      </div>
    </div>
  )
}
