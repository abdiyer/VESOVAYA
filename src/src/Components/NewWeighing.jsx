
import {FaTruckLoading} from "react-icons/fa";
import React from 'react'


function NewWeighing() {
  return (
    <div className="weighing-button">
      {/* <Button>
            <TbTruckLoading/>
            <span>Новое взвешивание</span>
      </Button> */}
      <button>
        <FaTruckLoading/>
        <span>   Новое взвешивание</span>
      </button>
    </div>
  )
}

export default NewWeighing