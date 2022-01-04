import {useState,useEffect} from 'react'
import {people}  from './data'
import {BsFillArrowLeftSquareFill, BsFillArrowRightSquareFill } from 'react-icons/bs'
import './SliderIndex.css'

const SliderApp = () => {
    const [peopleList, setPeopleList] = useState(people)
    const [index, setIndex] = useState(0)
    useEffect(() => {
        setPeopleList(people)
    }, [people])

    if (index >= peopleList.length ) {
        setIndex(0)
    }
    if (index <= -1) {
        setIndex(peopleList.length -1)
    }

    return (
        <>
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
        </style>
        <section className='slider-section' >
            <div className='slider-title' >
                <h2>
                    <span>/</span> Reviews
                </h2>
            </div>
            <div className='slider-center' >
                {peopleList.map((p, pIndex) => {
                    const { id,image,name,quote,title } = p
                    return (
                        <article key={id} className={ index !== pIndex ? "display-none" : "" } >
                            <div className='img' ><img src={image} alt={name} /></div>
                            <h4> {name} </h4>
                            <p> {title} </p>
                            <p> {quote} </p>
                        </article>
                    )
                } )}
                <button onClick={() => {setIndex(i => i - 1); console.log(index)}} className='prev'><BsFillArrowLeftSquareFill  /></button>
                <button onClick={() => {setIndex(i => i + 1); console.log(index)} } className='next'><BsFillArrowRightSquareFill className='next' /></button>
            </div>
        </section>
        </>
    )
}

export default SliderApp
