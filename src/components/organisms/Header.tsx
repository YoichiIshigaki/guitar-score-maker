import React,{ useState } from 'react'
import { SearchBar } from '../molecule'
import logo from './Guitarra-logo-white.png'
import "../../index.css"
import MenuBar from './MenuBar'
import { Link } from 'react-router-dom'

import {IconsGuitar96,IconsHeadphone96,IconsHelp96,IconsNote96,IconsPodium100,Login128,Search } from '../SvgComponents'


const Header:React.FC = () => {
    const [isLogin, setIsLogin] = useState(true)
    const [searchShow, setSearchShow] = useState(false)

    // style icon
    const svgStyle = {
        width:"40%",
        height:"40%",
        fill:"#FFFFFF",
        className: "m-auto mt-2"
    }

    const menuItems = [
        {
            menuTitle : "song",
            menuUrl : "/search/songs",
            svgComponent :<IconsNote96  { ...svgStyle}/>
        },
        {
            menuTitle : "artist",
            menuUrl : "/search/songs",
            svgComponent : <IconsHeadphone96 { ...svgStyle} />
        },
        {
            menuTitle : "help",
            menuUrl : "/help",
            svgComponent : <IconsHelp96 { ...svgStyle} /> 
        },
        {
            menuTitle : "ranking",
            menuUrl : "/ranking",
            svgComponent : <IconsPodium100 { ...svgStyle} />
        },
        {
            menuTitle : "guitar",
            menuUrl : "guitar",
            svgComponent : <IconsGuitar96 { ...svgStyle}     />
        }
    ]

    const SVGAtrr = {
        width : "1.75rem", 
        height : "1.75rem",
        fill : "#FFFFFF",
        className : "z-10 inline-block mx-2 my-0"
    }

    const headerSticky = searchShow ? "sticky z-100 top-0" : ""
    
    // const openModal = () => {
    //     document.body.classList.add('modal-open');
    // }
    return (
        <header className={`bg-black ${headerSticky}`}>
            <div className='flex h-16 p-3'>
                <div className='mx-2 w-auto flex-auto'>
                    <Link to="/" className='w-12 block'>
                        <img src={logo} alt="logo" />
                    </Link>
                </div>
                <div className='mx-2 w-auto flex-none' onClick={()=>{
                        setSearchShow(!searchShow)}
                    }
                >
                    <p className="text-white text-xl inline-block">search</p>
                    <Search {...SVGAtrr}/>
                </div>
                <div className='mx-2 w-auto flex-none'>
                    <Link to="/login">
                        <p className='text-white text-xl inline-block'>Login</p>
                        <Login128 {...SVGAtrr}/>
                    </Link>
                </div>
            </div>    
            { searchShow ? <SearchBar /> : ''}
            <MenuBar menuItems={menuItems}/>
            {/* { searchShow ? <div className='z-50 w-screen h-screen top-0 sticky bg-opacity-70 bg-white'/> : ''} */}
        </header>
    )
}

export default Header
