import { useEffect, useState } from "react"
import Grid from "./Grid"


const EncumberanceGrid = (props) => {

    const {strength} = props
    
    const [grid, setGrid] = useState([])
    
    const colourPicker = (row) => {
        switch(Math.ceil(row/5)){
            case 1:
                return 'green';
            case 2:
                return 'yellow'
            case 3:
                return 'orange'
            case 4:
                return 'red'
            default:
                return 'black'

        }
    }

    const gridBuilder = (rows) => {
        const grid = []
        const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
        for(let y = 1; y <= 15 ; y++){
            let line = []
            
            for(let x = 0; x < rows; x++){
                const square = {location: letters[x] + y, colour: colourPicker(y)} //TODO make this a node object, 
                line.push(square)
            }

            grid.push(line)
        }
        return grid
    }

    // Create a grid and assign it a set of node objects
    useEffect(() => {
        console.log(`Strength is ${strength}`)
        setGrid(gridBuilder(strength))

    },[])
    
    
    //X in the grid will be tied to the strength, Y in the grid will be the levels of encumberands

    {
        return (
            <Grid grid={grid} strength={strength}/>
        )
    }

}

export default EncumberanceGrid