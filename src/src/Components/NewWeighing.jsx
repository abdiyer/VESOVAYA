
import {FaTruck} from "react-icons/fa";
import React from 'react'
import {ReactComponent as Cart} from "../assets/cart.svg"


function NewWeighing() {
  return (
    <div className="weighing-button">
      {/* <Button>
            <TbTruckLoading/>
            <span>Новое взвешивание</span>
      </Button> */}
      <button>
        <Cart />
        <span>   Новое взвешивание</span>
      </button>
    </div>
  )
}

export default NewWeighing