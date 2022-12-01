import { useState } from "react"
import "../App.css"
import {BsFillPlayBtnFill} from "react-icons/bs";
import {RiFileList3Fill} from "react-icons/ri";
import {AiFillSetting} from "react-icons/ai";
import {FaGraduationCap} from "react-icons/fa";




export default function SidebarItem({item}){
    const [open, setOpen] = useState(false)
    if(item.childrens){
        return(
            <div className={open ? "sidebar-item open" : "sidebar-item"}>
                <div className="sidebar-title" onClick= { () => setOpen(!open) } >
                    <div className="icon">
                        {item.icon == "video" ? <BsFillPlayBtnFill/> : item.icon == "reports" ? <RiFileList3Fill/> : item.icon == "settings" ? <AiFillSetting/> : item.icon == "list" ? <FaGraduationCap/> : ""}
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