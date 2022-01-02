import React from 'react'

interface IMenuCategoriesData {
    filterItems: Function,
    categories: any
}

const MenuCategories: React.FC<IMenuCategoriesData> = ({filterItems,categories}) => {
    return (
        categories.map((category: string,index: number) => {
            return (
                <div className='category-btn'>
                    <button  key={index} onClick={() => filterItems(category)} >
                    {category}
                </button>
                </div>
            )
        })
    )
}

export default MenuCategories
