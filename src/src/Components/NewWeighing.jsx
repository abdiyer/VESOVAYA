import { Button } from 'bootstrap'
import {TbTruckLoading} from "react-icons/tb";
import React from 'react'


function NewWeighing() {
  return (
    <div>
      {/* <Button>
            <TbTruckLoading/>
            <span>Новое взвешивание</span>
      </Button> */}
      <button>
        <TbTruckLoading/>
        <span>Новое взвешивание</span>
      </button>
    </div>
  )
}

export default NewWeighing