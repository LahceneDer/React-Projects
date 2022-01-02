import React, {useState,useEffect} from 'react'
import Menu from './Menu'
import MenuCategories from './MenuCategories'
import {data} from './MenuData'
import './MenuIndex.css'



const cats = Array.from(new Set(data.map(item => item.category))) 
const allCategories = ['all', ...cats]
console.log(allCategories);


const MenuApp = () => {
    const [menuItems, setMenuItems] = useState(data)
    const [categories, setCategories] = useState(allCategories)

    useEffect(() => {
        setCategories(allCategories)
    }, [])

    const filterItems = (category: string) => {
        if(category === 'all') {
            setMenuItems(data)
            console.log(menuItems);
            return 
        }
        const newItems = data.filter((item) => item.category === category)
        setMenuItems(newItems)
        console.log(menuItems);

    }

    return (
        <main className='menu' >
        <style>
        @import url('https://fonts.googleapis.com/css2?family=Cairo:wght@300&display=swap');
        </style>
            <section className='menu-section' >
                <div className='title' >
                    <h2>our menu</h2>
                </div>
                <MenuCategories categories={categories} filterItems={filterItems} />
                <Menu items={menuItems} />
            </section>
        </main>
    )
}

export default MenuApp
