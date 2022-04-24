import React from 'react'
import { Process } from './Process/Process'

export const ProcessList = (props) => {
    const processComponents = props.processListData.map((item) => {
      return <Process key={item.id} data={item} />
    }) 
  

  return <>{processComponents}</>
}
