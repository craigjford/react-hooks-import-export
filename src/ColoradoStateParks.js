import React from "react";
import howManyParks from './parks/howManyParks'
import MesaVerde from './parks/MesaVerde'
import * as RMFunction from './parks/RockyMountain'

export default function ColoradoStateParks() {
  console.log(RMFunction.trees)
  RMFunction.wildlife()
  RMFunction.elevation()

  return (
    <div>
      <MesaVerde />
    </div>
  )
}


