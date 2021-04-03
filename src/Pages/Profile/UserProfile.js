import React,{useState} from 'react'
import './user.css'
import Button from '@material-ui/core/Button'

function UserProfile() {
   
    var data = JSON.parse(localStorage.getItem('product_details'));
    return (
        <div  className="body1">
            
        <div style={{position:'absolute',top:'50%',left:'50%',transform:'translate(-50%,-50%)',background:'#fff',height:'95%',width:'80%'}}>
        <div className="container d-md-flex justify-content-around my-3">
        <div>
       <h5 style={{color:'#333'}}> Seller Name</h5>   
        <p style={{color:'#808080'}}>{data.name}</p>
        <br></br>
       <h5 style={{color:'#333'}}> Items Sold </h5> 
       <p style={{color:'808080'}}> {data.products}</p>
        <br></br>
      <h5 style={{color:'#333'}}>  Location  </h5> 
       <p style={{color:'808080'}}> {data.location}</p>
        <br></br>
        <h5 style={{color:'#333'}}>Contact details </h5>  
        <p style={{color:'808080'}}>{data.email}</p>
        </div>

        <div>
            <img style={{borderRadius:'50%',height:'150px',width:'150px'}} src={data.image}></img>
        </div>
        </div>
     
        <div className="d-flex justify-content-center">
        <Button  variant="contained" color="secondary" className="mt-2">
        Proceed to Pay
        </Button>
        </div>
        </div>


        </div>
    )
}

export default UserProfile
