import React, { useState } from 'react'

interface ITourData {
    id: number,
    image:string,
    info: string,
    name: string,
    price: string,
    removeTour: any
}

const TourIndex: React.FC<ITourData> = ({id,image,info,name,price, removeTour}) => {
    const [readMore, setReadMore] = useState(false)
    return (
        <div className='tour-card'>
           <div className='tour-img'>
           <img src={image} width="100%" height="400px" />
           </div>
            <div className='tour-content'>
                <h3>{name}</h3>
                <p>
                {readMore ? info : info.substring(0,200) + "..."}
                <button onClick={() => setReadMore(!readMore) } > {readMore ? "show less" : "read more"} </button>
               </p>
                <h5>${price}</h5>
            </div>
           <footer>
             <button onClick={() => removeTour(id)} className='delete-btn'>not interested</button>
           </footer>
        </div>
    )
}

export default TourIndex
