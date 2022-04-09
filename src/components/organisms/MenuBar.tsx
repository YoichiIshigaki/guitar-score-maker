import React from 'react'
import "../../index.css"

type Props = {
    menuItems : {
        menuTitle : string,
        menuUrl : string,
        svgComponent : React.ReactNode
    }[],
    dispMenuCount? : number     // menu の最大表示個数

}

const MenuBar: React.FC<Props> = ({menuItems,dispMenuCount=5}) => {

    return (
        <div className="flex">
            {        
                menuItems.map((item) => {
                    return (
                    <div className="flex-1 bg-black h-20">
                        <a href={item.menuUrl}>
                            { item.svgComponent }
                            <p className=" text-white my-2 text-center">
                            {item.menuTitle}
                            </p>
                        </a>
                    </div>
                    )
                }).slice(0,dispMenuCount)
                
            }
        </div>
    )
}

export default MenuBar
