import React from 'react'

export default function About() {
  return (
    <>
        <div id="about" style={{display:'flex',flexWrap:'wrap',flexDirection:'row',justifyContent:'space-evenly',height:'100vh',alignItems:'center'}}>
            <div style={{display:'flex',flexDirection:'column',flexWrap:'wrap',maxWidth:'70%'}}>
                <h5>ABOUT US</h5>
                <h1>We specialize in creating websites that fit your budget perfectly.</h1>
                <span>At Nexus Info, we offer tailored website solutions designed for your business. Coupled with business growth ideas and strategies, our goal is to foster the expansion of your business. We believe in making every business thrive in both digital and offline realms. “Join the future trend of business with the help of Nexus Info, and let's grow together.</span>
            </div>
            <div>
                <img style={{height:'12em',boxShadow:'2px 2px 12px 2px black'}} src="https://cdn.pixabay.com/photo/2015/12/04/14/05/code-1076536_1280.jpg" alt="" />
            </div>
        </div>
    </>
  )
}
