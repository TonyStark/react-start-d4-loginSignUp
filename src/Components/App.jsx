import { useState } from "react";
import UI from "./UI";
function App() {
  let [state,setState] = useState("Register")
  let [data,setData] = useState([])
  let regBtn=()=>{
    // setState(state=="Register"?"Login":"Register")
    let fname=document.getElementById('fname').value
    let emailId=document.getElementById('emailid').value
    let password=document.getElementById('pass').value
    let obj={
      fname:fname,
      emailId:emailId,
      password:password
    }
    setData([...data, obj])
    document.getElementById('pass').value=""
    document.getElementById('emailid').value=""
    document.getElementById('fname').value=""
    setState("Login")
    Swal.fire({
      title: "Register Successfully",
      icon: "success"
    });
  }
  let loginBtn=()=>{
    let emailId=document.getElementById('emailid').value
    let password=document.getElementById('pass').value
    if(data.length>0){
      data.filter((el)=>{
        if(emailId==el.emailId && password==el.password){
          Swal.fire({
            title: "Login Successfully",
            icon: "success"
          });
          document.getElementById('pass').value=""
          document.getElementById('emailid').value=""
        }else{
          Swal.fire({
            title: "Login Failed",
            icon: "error"
          });
        }
      })
    }else{
      Swal.fire({
        title: "Login Failed",
        icon: "error"
      });
    }
  }
  let changeState=()=>{
    setState((state)=>{
      return state=="Register" ? "Login" : "Register"
    })
  }

  console.log(data)
  return (
    <UI state={state} regBtn={regBtn} loginBtn={loginBtn} changeState={changeState}/>
  );
}

export default App;
