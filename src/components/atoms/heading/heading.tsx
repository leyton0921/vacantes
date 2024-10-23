import React from "react";

interface IHeadingProps{
    className: string;
    children: string
}

const Heading:React.FC<IHeadingProps> = ({className,children})=>{
    return(
        <h3 className={className}>{children}</h3>
    )
}

export default Heading