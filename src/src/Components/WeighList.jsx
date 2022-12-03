import React from 'react'
import {BsDot} from "react-icons/bs";
import {FiMail} from "react-icons/fi";
import {BsInfoCircleFill} from "react-icons/bs";



export const WeighList = () => {
  return (
    <div className='WeighList'>
        <div className="WeighItem">
            <p><span className='WeighDot'><BsDot/></span>Весы 1</p>
            <div className="WeighItemData">
                <span>005480.1 кг</span>
            </div>
        </div>
        <div className="WeighItem">
            <p><span className='WeighDotRed'><BsDot/></span>Весы 2</p>
                <div className="WeighItemData">
                    <span>005480.332 кг</span>
                </div>
        </div>
        <div className="WeighItem">
            <p><span className='WeighDotRed'><BsDot/></span>Весы 3</p>
                <div className="WeighItemData">
                    <span>05252.222 кг</span>
                </div>
        </div>
        <div className='two-icons'>
            <span><FiMail/></span>
            <span><BsInfoCircleFill/></span>
        </div>
    </div>
  )
}
