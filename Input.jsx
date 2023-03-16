import React from 'react'
import { useState } from 'react'
import { Output } from './Output';
import './input.css';
export const Input = (props) => {


    const[billAmount, setbillAmount] = useState(0);

    const [user, setUser] = useState("" )

    const[userAndTip,setUserandTip] = useState([])

    const [totalCustomer,setTotalcustomer] = useState('')

    const [totalTip, setTotalTip] = useState([])





    const handleChangeBillamount = (event)=>{

        setbillAmount(event.target.value)


    }



    const options = [
        {value: '', text: 'Choose'},
        {value: '20', text: 'Exellent(20%)'},
        {value: '10', text: 'Moderate(10%)'},
        {value: '5', text: 'Bad(5%)'},
      ];
    
      const [selected, setSelected] = useState(options[0].value);
    
      const handleExperienceChange = event => {
        console.log(event.target.value);
        setSelected(event.target.value);
      };


      const handleUserChange = (event)=> {

        setUser(event.target.value)

      }

      const Add = ()=> {

        if(selected == 20){
                setUserandTip( ([...userAndTip,`${user} offering a tip of ${Number(20/100*billAmount)} rupee`]))
                setTotalcustomer(userAndTip.length+1);
                setTotalTip([...totalTip,`${Number(20/100*billAmount)}`])

            }

         else if(selected == 10){
                setUserandTip( ([...userAndTip,`${user} offering a tip of ${Number(10/100*billAmount)} rupee`]))
                setTotalcustomer(userAndTip.length+1)
                setTotalTip([...totalTip,`${Number(10/100*billAmount)}`])

            
            }

         else if(selected == 5){
                setUserandTip( ([...userAndTip,`${user} offering a tip of ${Number(5/100*billAmount)} rupee`]))
                setTotalcustomer(userAndTip.length+1)
                setTotalTip([...totalTip,`${Number(5/100*billAmount)}`])


            }
         if(billAmount == 0){
                alert("Please Enter Bill Amount ")

                setUserandTip([...userAndTip])
            }

            if(selected == ''){
                alert("Please Choose Your Experience ")

                setUserandTip([...userAndTip])
            }

            if(user == 0){
                alert("Please Enter Your Good Name ")

                setUserandTip([...userAndTip])
            }

            if(parseInt(billAmount)!=billAmount) {
                alert('Please Enter Valid Bill Amount')
                setUserandTip([...userAndTip])


            }


    }




  return (
    <div style={{margin:'auto',width:600,}}>

        <input type="text" placeholder='Bill Amount' style={{width:590, textAlign:'center'}} onChange={handleChangeBillamount}/>

        <div style={{display:'flex', justifyContent:'center', alignItems:'center', justifyContent:"space-between"}}>
            


        <select onChange={handleExperienceChange}>

            {
                options.map(option => (
                    <option key={option.value} value={option.value}>
                      {option.text}
                    </option>
                  ))
            }


        </select>

        

            <h4>How was the Service</h4>
            <input type="text" placeholder='Customer Name' style={{height:25}} onChange={handleUserChange}/>
            <button style={{height:30}} onClick={Add}>Add Customer</button>

        </div>

        <div>
            <Output data = {userAndTip.map((ele)=> {
                return <li>{ele}</li>
            })} 
            
            users = {totalCustomer} 


            tip = {totalTip}
            
            />
            

        </div>


        </div>
  )
}
