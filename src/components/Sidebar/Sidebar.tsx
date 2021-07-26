import React from 'react'
import Drawer  from '@material-ui/core/Drawer'
import CloseIcon from '@material-ui/icons/Close'



import './sidebar.scss'

interface SidebarProps{

    onClick:Function
    drawerState:boolean

}

const Sidebar=(props:SidebarProps) =>{

    const {onClick, drawerState}=props



    //on drawer close 
    const onDrawerClose=()=>{
        //close the drawer
        //parent function 
        onClick(!drawerState)

    }

    //switch primary color

    const switchPrimaryColor=(primary:string, primaryHover:string)=>{
        document.documentElement.style.setProperty('--primary-color', primary)
        document.documentElement.style.setProperty('--primary-color-hover', primaryHover)

    }

    return (
        <div className="sidebar">
            {/* Drawer */}

            <Drawer anchor="right" open={drawerState} onClose={onDrawerClose} className="sidebar__drawer">
                <div className="sidebar__drawer-content">
                    <CloseIcon onClick={onDrawerClose} className="sidebar__close-menu"/>
                    {/* themes and other stuffs */}

                    <div className="sidebar__navigation">
                        <h2>Themes</h2>
                        <ul>
                            <li className="cursor-pointer" onClick={()=>switchPrimaryColor("#3D89E9", "#1F7AED")}>
                                <h2>Blue</h2>
                                <span className="sidebar__color-box blue"></span>
                            </li>
                            <li className="cursor-pointer" onClick={()=>switchPrimaryColor("#23F0DC", "#18D4C2")}>
                                <h2>Green</h2>
                                <span className="sidebar__color-box green"></span>
                            </li>
                            <li className="cursor-pointer" onClick={()=>switchPrimaryColor("#F1622F", "#EA4E16")}>
                                <h2>Red</h2>
                                <span className="sidebar__color-box red"></span>
                            </li>
                        </ul>
                    </div>


                </div>
            </Drawer>
            
        </div>
    )
}

export default Sidebar
