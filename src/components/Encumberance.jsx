import { useState} from "react";
import EncumberanceGrid from "./EncumberanceGrid";

const Encumberance = () => {

    const [strength, setStrength] = useState(15)
    const [inventory, setInventory] = useState([])

    return(
        <div>
            <h1>Strength {strength}</h1>
            <div>
                <EncumberanceGrid strength={strength}/>
            </div>
            
        </div>
    )

}

export default Encumberance