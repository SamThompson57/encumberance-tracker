import { useEffect, useState } from "react"


const Square = (props) =>{
    
    const {colour, location} = props
    
    const [contains, setContains] = useState(null)

    const background = colour.toString()     
    return(
        <div className={`${colour}Square`} key={location}/>
    )
}

export default Square