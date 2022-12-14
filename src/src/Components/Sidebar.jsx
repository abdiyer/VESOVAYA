// import React from 'react'
// import "../App.css"
// import {SidebarData} from './SidebarData'

// export default function Sidebar() {
//   return (
//     <div className='Sidebar'>
//       <ul className='SidebarList'>
//         {SidebarData.map((val,key) => {
//           return(
//             <li key={key} className='row' onClick={()=> {window.location.pathname = val.link}}>
//               {""}
//               <div>{val.icon}</div>
//               <div>{val.title}</div>
//             </li>
//           )
//         })}
//       </ul>
//     </div>
//   )
// }
import React from 'react'
import "../App.css"
import SidebarItem from './SidebarItem'
import items from "../data/sidebar.json"
import NewWeighing  from './NewWeighing'
import logo from '../assets/logo-vesovaya.png'
import { WeighList } from './WeighList'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className='img-div'>
        <img src={logo} alt="" />
      </div>
      <div>
        <NewWeighing/>
      </div>
      {items.map((item,index) => <SidebarItem key={index} item={item} />)}
      <div className="spaces">

      </div>
      <div>
        <WeighList/>
      </div>
    </div>
  )
}

