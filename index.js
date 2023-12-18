alert("Complete the input fields")

const nam = document.getElementById("name")
const age = document.getElementById("age")
const email = document.getElementById(" email")
const submi = document.getElementById(" submit")

const details = {
    nam: "",
    age: "",
    email :""
}

nam.addEventListener("input",(e)=>{
   details.nam = e.target.value
   console.warn( details.name)
})

age.addEventListener("input",(e)=>{
    details.age = e.target.value
    console.warn( details.name)
 })

 email.addEventListener("input",(e)=>{
    details.email = e.target.value
    console.warn( details.name)
 })


 submi.addEventListener("submit",(e)=>(
 
    e.preventDefault()
    
    let jsonString = JSON.stringify(details);
    )

 

 )
 

 console.warn(details)
