import { useState } from "react"
import "../App.css"
import {ReactComponent as PlayButton} from "../assets/play-button.svg"
import {ReactComponent as List} from "../assets/list.svg"
import {ReactComponent as Settings} from "../assets/settings.svg"
import {ReactComponent as Hat} from "../assets/hat.svg"




export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)
    const [icoState, setIcoState]= useState("#7c969d")
    if(item.childrens){
        return(
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick= { () => setOpen(!open) } >
                    <div className="icon">
                        {item.icon == "video" ? <PlayButton fill="#7c969d"/> : item.icon == "reports" ? <List fill="#7c969d"/> : item.icon == "settings" ? <Settings fill="#7c969d"/> : item.icon == "list" ? <Hat fill="#7c969d"/> : ""}
                    </div>
                    <a href={item.path}>
                        <span>
                            {item.title}
                        </span>
                    </a>
                </div>
                <div className="sidebar-content">
                    { item.childrens.map((child, index) => <SidebarItem key={index} item={child} />) }
                </div>
            </div>
        )
    }
    else{
        return (
            <a href={item.path || "#"} className="sidebar-item plain">
                {item.title}
            </a>
        )
    }
}