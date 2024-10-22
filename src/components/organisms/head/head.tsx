import React from "react";

interface IHeadProps{
    tittle:string;
    name:string;
}

const Head:React.FC<IHeadProps> = ({tittle,name})=>{
    return(
        <>
            <div>
                <h2>{tittle}</h2>
                
            </div>
        </>
    )
}

export default Head