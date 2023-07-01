import React,{useState} from 'react'
import './Header.css'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
const Header = () => {
    const [search , setSearch] = useState(false);
    const [acc , setAcc] = useState(false);
  return (
    <div className='sec'>
    <div className='Header'>
        {search ?
        <div className='newd'>
         <div className="afterRender"> 
            <input placeholder='Search on prada.com'/>
            <button onClick = {()=>setSearch(false)}>CLOSE</button>
            
        </div> 
        <div className='high'>
                <div className='high1'>
                <p>HIGHLIGHTS</p>
                <ul>
                    <li>Gifts</li>
                    <li>Prada Linea Rossa</li>
                </ul></div>
                <div className='high2'>
                <p>HIGHLIGHTS</p>
                <ul>
                    <li>New Arrivals For Him</li>
                    <li>New Arrivals For Her</li>
                </ul>
            </div>
            </div>
        </div>: 
        <>
        <div className="logo">
            <img src='/images/logo.png' />
        </div>
        <div className="sections">
            <p>WOMEN</p>
            <p>MEN</p>
            <p>BAGS</p>
            <p>GIFTS</p>
            <p>LINEA ROSSA</p>
            <p>PRADASPHERE</p>
        </div>
        <div className="search">
            <button onClick = {()=> {setSearch(true)}}><SearchOutlinedIcon /></button>
            <button onClick={()=>{setAcc(true)}} className="person"><PersonOutlinedIcon /></button>
            <button className="heart"><FavoriteBorderOutlinedIcon /></button>
            <button ><ShoppingCartOutlinedIcon /></button>
        </div>
        </> }
    </div>
    <div className='lin' >
        {acc ? <div className='account'>
                <div className='login'>
                    <h2>Login</h2>
                    <button onClick={()=>{setAcc(false)}}><CloseOutlinedIcon /></button>
                </div>
                <div className = "logininfo">
                    <p>Sign in to your account to make the checkout process quicker</p>
                    <input type="text" placeholder='example@email.com' />
                    <input type="password" placeholder='Enter Your Password' />
                    
                    <a href="">Forgot your password?</a>
                    <div className="checkbox">
                        <input type="checkbox" />
                        <p>Remember me </p>
                    </div>
                    <button className="lbutton">LOGIN</button>
                    <h2>Register now to enjoy a unique shopping experience.</h2>
                    <p>Register now and take advantage of the benefits of My Account</p>
                    <ul>
                        <li>Create wishlists to save and share your favorite items</li>
                        <li>View your private appointments and repair requests</li>
                        <li>Check the details and monitor the status of your orders and returns</li>
                    </ul>
                    <button className= "newaccbutton">CREATE NEW ACCOUNT</button>
                </div>
            </div> : ""}
        </div>
    </div>
  )
}

export default Header