import React,{useState,useEffect} from 'react'
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button'
import {Products} from '../../Utils/Firebase'
import { v1 as uuidv1 } from 'uuid'; 

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

function Product() {
    const classes = useStyles();
    const [toggle,setToggle]=useState(false);
    const [location,setlocation]=useState('');
    const [price,setprice]=useState(0);
    const [products,setprods]=useState('');
    const [prods,useprods]=useState([]);
    var data = JSON.parse(localStorage.getItem('user'));
    const [string,totalstring]=useState('');
    const [geo,setgeo]=useState('');
    
    useEffect(()=>{
       const getLocation=()=>{
        fetch("https://geolocation-db.com/json/f746f3f0-9393-11eb-bbed-1d442d4cd8d7")
        .then(res=>res.json())
        .then(datageo=>{
            console.log(datageo);
        })
        .catch(err=>{
            console.log(err)
        })
    }
    getLocation();
    },[])
    function add_prods(e)
    {
        // e.target.value=null;
        if(!products) return;
       useprods([...prods,products]);
        totalstring(string+' '+products);
        setprods('');
        // console.log(string)
    }

    function submit(e)
    {
    // if(!products) return;
    
   
    console.log('res');
    Products.doc(uuidv1()).set({
        location:location,
        price:price,
        products:string,
        name:data.name,
        email:data.email,
        image:data.profile_img
    })
    .then(res=>{
        
        alert("product posted")
        console.log(res)
    })
    .catch(err=>{
        console.log(err)
    })    
    }

    return (
        <div style={{display:(data.userType)==='Farmer'?'block':'none'}}>
            <h5 className="text-center" style={{fontWeight:'bolder',font:'#333',textTransform:'capitalize',textDecoration:'underline'}}>post a product</h5>    
            <div onClick={(e)=>setToggle(true)} style={{width:'80%',height:'200px',border:'2px dotted #fff',borderRadius:'50px',margin:'auto',display:toggle?'none':'block'}}>
            <div className="d-flex justify-content-center" style={{marginTop:'70px',color:'#fff'}}>
               <div>
               <AddIcon style={{height:'70px',transform:'scale(3)'}}/>
               </div>

            </div>
            </div>


            <div style={{width:'80%',height:'500px',margin:'auto',background:'#fff',display:!toggle?'none':'block'}} className="flex-wrap">

           <div className="mx-auto"> <form className={classes.root} noValidate autoComplete="off">
          <TextField placeholder="location" id="location" label="Location" onChange={(e)=>setlocation(e.target.value)} />
          <TextField placeholder="price/kg" id="price/kg" label="price/kg" onChange={(e)=>setprice(e.target.value)} /><br></br><br></br>
          <div style={{width:'80%'}}> 
           <h5 className="" style={{textTransform:'capitalize',fontWeight:'200'}}>what do you sell ?</h5>
           <TextField placeholder="products name" onChange={(e)=>setprods(e.target.value) } id="products" label="products" />
            <br></br>
       <div className="d-flex">
       <Button onClick={add_prods} variant="contained" color="secondary" className="mt-2 mx-1">
        Add items
        </Button>

        <Button onClick={submit} variant="contained" color="secondary" className="mt-2">
        Submit
        </Button>
       </div>
           <br></br>
           <div >
            
            <div className="d-flex flex-wrap justify-content-evenly mt-3">
            {prods.map(data=>{
                console.log(data);

                return (
                        
                        <div style={{height:'30px',background:'#ccc',opacity:'0.7',font:'#333',borderRadius:'30px'}} className="px-3 mx-1">
                        <p style={{fontSize:'17px',fontWeight:'bolder',textTransform:'capitalize'}}>+{data}</p>
                        </div>    
                        
                    )
                })}
                </div></div>
           </div>
            </form>
        </div>

            </div>

           


        </div>
    )
}

export default Product


