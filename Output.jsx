import React, { useState } from 'react'

import './Output.css'

export const Output = (props) => {

  const [total,setTotal] = useState('')

  const [finalTip, calculateTotalTip] = useState([0])

  const test = ()=> {
    setTotal(props.users)
    calculateTotalTip(props.tip)
  }



  
  return (
    <div style={{margin:'auto', textAlign:'center'}}>
        <h3>Customer List</h3>
        <li>{props.data}</li>


        <button onClick={test} style={{backgroundColor:"aquamarine", marginTop:20}}>
            Calculate Tip & Customer
        </button>

        <table>
            <tr>
                <th>Total Customers</th>
                <th>Tip</th>
            </tr>
            <tr>
              {
              total
              }

              <td>{
                finalTip.reduce((a,b) => {
                  return (Number(a) + Number(b))
                })
              }

</td> 
              
            
            </tr>

        </table>
    </div>
  )
}
