import React, { useState, useEffect} from 'react'
import TourLoading from './TourLoading'
import Tours from './Tours'
import './ToursApp.css'


const ToursApp = () => {
    const [loading, setLoading] = useState(true)
    const [tours, setTours] = useState<any>([])

    const baseUrl = "https://course-api.com/react-tours-project"

    const fetchTours = async () => {
        setLoading(true)
        try {
            const response = await fetch(baseUrl)
            const tours = await response.json()  
            setLoading(false)
            setTours(tours)
        } catch (error) {
            setLoading(false)
            console.log(error);
        }

        console.log(tours);

    }

    const removeTour = (id:number) => {
        const newTours = tours.filter((tour: any) => tour.id !== id)
        setTours(newTours)
    }

    useEffect(() => {
        fetchTours()
    })




    if(loading) {
        return (
            <main>
                <TourLoading />
            </main>
        )
    }

    if (tours.length === 0) {
        return (
            <main>
                <h2>No tours left</h2>
                <button onClick={() => fetchTours()}> Refresh </button>
            </main>
        )
    }

    return (
        <>
                <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
        </style>
        <main>
            <Tours tours={tours} removeTour={removeTour} />
        </main>
        </>
    )
}

export default ToursApp
