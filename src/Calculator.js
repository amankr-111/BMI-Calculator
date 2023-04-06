import React from 'react'

const Calculator = () => {
    let handelEventreSet=()=>{
        document.querySelector(".input").innerHTML=""
        document.querySelector(".status").innerHTML="Status:"
        document.querySelector(".result").innerHTML="Result:"
    }
    
    let handelEventSubmit=()=>{
            let weight=document.querySelector(".inputWeight").value
            let height=document.querySelector(".inputHeight").value
            let bmi=0
        console.log("Working")
            bmi = +weight/(+height * +height)
            if(bmi<18.5)
            {
                document.querySelector(".result").innerHTML=`Result: ${bmi} BMI`
                document.querySelector(".status").innerHTML="Status: You are Under weight 🐍"
            }
            else if(bmi>=18.5 && bmi<=24.9 ) 
            {
                document.querySelector(".result").innerHTML=`Result: ${bmi} BMI`
                document.querySelector(".status").innerHTML="Status: You are Perfect 👍🏻"
            }
            else
            {
                document.querySelector(".result").innerHTML=`Result: ${bmi} BMI`
                document.querySelector(".status").innerHTML="Status: You are Over weight 😶‍🌫️"
            }
    }

  return (
    <div className='container'>
        <h2 className=' headWeight'>Enter your Weight</h2>
        <input type='number' className='input inputWeight' placeholder='  In KG'/>
        <h2 className='headHeight'>Enter your Height</h2>
        <input type='number' className="input inputHeight" placeholder='  In Meters'/>
        <button className='btn' id= 'btn1' onClick={handelEventSubmit}>Submit</button>
        <button className='btn' id='btn2' onClick={handelEventreSet}>Re Set</button>
        <h3 className='result'>Result:</h3>
        <h4 className='status'>Status:</h4>
    </div>
  )
}

export default Calculator