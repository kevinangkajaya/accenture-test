import { useEffect, useState } from "react"
import Piece from "./Piece"

const Chess=()=>{
    const rowLen = 100
    const colLen = 100

    const [rows, setRows] = useState([])
    const [cols, setCols] = useState([])

    const [rook,setRook] = useState([0,0])

    useEffect(()=>{
        let temp = []
        for(let i =0;i<rowLen;i++){
            temp.push(i)
        }
        setRows(temp)
        
        let temp2 = []
        for(let i =0;i<colLen;i++){
            temp2.push(i)
        }
        setCols(temp2)
    },[])

    const onClickPiece=(i,j)=>{
        if(rook[0] === i){
            if(rook[1] === (j+1) || rook[1] === (j-1) ){            
                setRook([i,j])
            }
        }
        if(rook[1] === j){
            if(rook[0] === (i+1) || rook[0] === (i-1)){            
                setRook([i,j])
            }
        }
    }
    
    return (<div style={{textAlign:"center"}}>
        {rows.map((row)=>(
            <div key={row} style={{height: 70, display:'grid', gridTemplateColumns:`repeat(${colLen},70px)`, gap:0}}>
                {cols.map((col)=>(
                    <Piece onClickPiece={onClickPiece} rook={rook} key={col} row={row} col={col} />
                ))}
            </div>
        ))}
    </div>)
}

export default Chess