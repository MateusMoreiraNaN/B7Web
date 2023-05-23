import { ReactNode } from 'react'

type Props = {
    url?: string
    legend: string
    children: ReactNode
}

export const Photo = ({url, legend, children}:Props)=>{
    return(
        /*
        <div>
            <img src={url}/>
            <p>{legend}</p>
        </div>
        */
       <div>
            {children}
            <p>{legend}</p>
       </div>
    )
}