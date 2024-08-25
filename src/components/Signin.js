import { Button } from '@mui/material'
import React from 'react'
import social from "../images/social.png"
import {signInWithPopup} from "firebase/auth"
import {auth, database, googleProvider} from "../firebase/setup"
import { useNavigate } from 'react-router-dom'
import { doc, setDoc } from 'firebase/firestore'
import Mail from '../images/mail.png'

function Signin() {

    const navigate = useNavigate()

    const addUser = async()=>{
        const userDoc = doc(database,"Users",`${auth.currentUser?.email}`)
        try{
            await setDoc(userDoc,{
                username:auth.currentUser?.displayName,
                email:auth.currentUser?.email,
                id:auth.currentUser?.uid
            })
        }catch(err){
            console.error(err)
        }
    }

    const googleSignin = async()=>{
        try{
            await signInWithPopup(auth,googleProvider)
            addUser()
            navigate("/main")
        }catch(err){
            console.log(err)
        }
    }


  return (
    <div>
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img style={{height:"25px",width:"25px"}} src={Mail} />
                <h2 style={{fontWeight:"100",marginLeft:"4px"}}>REACHINBOX</h2>
            </div>
    
    <div style={{position:"absolute",left:"28%",padding:"110px"}}>
        <div style={{border:"1px solid grey",padding:"20px",textAlign:"center",borderRadius:"5px",minHeight:"310px",maxWidth:"350px"}}>
            
         <div style={{display:"flex",justifyContent:"center",alignItems:"center"}}>
                <img style={{height:"25px",width:"25px"}} src={Mail} />
                <h2 style={{fontWeight:"100",marginLeft:"4px"}}>REACHINBOX</h2>
            </div>
    
        <h2 style={{fontWeight:"200"}}>Create your google clone account</h2>
        <h3 style={{fontWeight:"200"}}>Click the signin button</h3>
        <Button onClick={googleSignin} variant='contained'>Signin with google</Button>
        </div>
    </div>
    </div>
  )
}

export default Signin
