import Square from "./Square";


const Grid = (props) => {

    const {grid, strength} = props;

    return (
        <div className="encGrid">
            {console.log(grid)}
            {grid.map(x => {
                return (<div className={'row'} style={{display: "grid", gridTemplateColumns : `repeat(${strength}, 25px)`}}>
                {x.map(y => {
                   return <Square colour={y.colour} location={y.location}/>
                })}
                </div>)
            })}
        </div>
    )   
}

export default Grid