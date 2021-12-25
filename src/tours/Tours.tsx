import React from 'react'
import TourIndex from './TourIndex'

interface IToursData {
    tours: [],
    removeTour: Function
}

const Tours: React.FC<IToursData> = ({tours, removeTour}) => {
    return (
        <div>
            <h1>Our Tours</h1>
            <div>
                {tours.map((tour:any) => {
                    return <TourIndex key={tour.id}  {...tour} removeTour={removeTour} />
                })}
            </div>
        </div>
    )
}

export default Tours
