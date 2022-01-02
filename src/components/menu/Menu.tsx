import React from 'react'
import { data } from './MenuData'

interface IMenuData {
    items: typeof data
}

const Menu: React.FC<IMenuData> = ({items}) => {
    return (
        <div className='container-fluid' >
        <div className='row' >
           {items.map((menuItem) => {
               const {id,title,price,desc,img} = menuItem
               return (
                   <>
                    <article className='item col-md-4' key={id} >
                        <div>
                            <img src={img} width='100%' height='300px' alt={title} />
                        </div>
                        <div>              
                        <header>
                            <h4 className='title' > {title} </h4>
                            <h4 className='price' > price: {price} </h4>
                        </header> 
                        <p className='desc' > { desc.substring(0,202) + "..."} </p></div>
                     </article>
                   </>
               )
           })} 
                                   </div>
                   </div>
    )
}

export default Menu
