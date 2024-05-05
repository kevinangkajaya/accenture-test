const Piece=({row, col, onClickPiece, rook})=>{
    const getColor=(i, j)=>{
        if((i%2===0) === (j%2===0)){
            return 'white'
        }else{
            return 'black'
        }
    }
    const getReverseColor=(i, j)=>{
        if((i%2===0) === (j%2===0)){
            return 'black'
        }else{
            return 'white'
        }
    }

    return(
    <div onClick={()=>onClickPiece(row,col)}
        style={{display:'flex', backgroundColor: getColor(row,col)}}>
            
        {rook[0] === row && rook[1] === col && 
        <div style={{margin:'auto',color:getReverseColor(row,col)}}>ROOK</div>
        }
    </div>
    )
}

export default Piece