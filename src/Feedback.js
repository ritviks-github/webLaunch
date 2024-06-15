import React from 'react'
import { useState } from 'react'
import axios from 'axios'
export default function Feedback() {
    const [name,setName] = useState('');
    const [username,setUsername] = useState('');
    const [feed,setFeed] = useState('');
    const handleSubmit = (e)=>{
        e.preventDefault();
        axios.post('http://localhost:3001/register',{username,name,feed}).then((result)=>{
            console.log(result);
        }).catch((err)=>{
            console.log(err);
        })
    }
    const display = ()=>{
        const newDiv = document.createElement('div');
        newDiv.innerHTML = "Feedback given Successfully :)";
        newDiv.classList.add('newdiv')
        const form = document.querySelector('form');
        form.prepend(newDiv);
        setName('');
        setUsername('');
        setFeed('');
        setTimeout(()=>{
            newDiv.remove();
        },1000);
    }
    
  return (
    <div style={{display:'flex',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
      <form onSubmit={handleSubmit}>
        <h1 id="feeds" style={{display:'flex',justifyContent:'center'}}>Feedback Section</h1>
        <div class="input-group flex-nowrap">
            <span class="input-group-text" id="addon-wrapping">@</span>
            <input value={username} onChange={(e)=>{setUsername(e.target.value)}} type="text" class="form-control" placeholder="Username" aria-label="Username" aria-describedby="addon-wrapping" />
        </div>
        {/* names */}
        <div class="input-group">
            <span class="input-group-text">Full Name here</span>
            <input type="text" value={name} onChange={(e)=>{setName(e.target.value)}} class="form-control" />
        </div>
        {/* ends */}
        {/* feedback space here */}
        <div class="input-group">
            <span class="input-group-text">Your feedback goes here</span>
            <textarea value={feed} onChange={(e)=>{setFeed(e.target.value)}} class="form-control" aria-label="With textarea"></textarea>
        </div>
        {/* ends */}
        <br />
        <button onClick={display} style={{marginLeft:'42%'}} className='btn btn-primary'>Submit</button>
      </form>
    
    </div>
  )
}
