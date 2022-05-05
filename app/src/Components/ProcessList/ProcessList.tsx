import React from 'react'
import { Process } from './Process/Process'

export type ProcessType = {
  id: number
  name: String
  numberOfExecutions: number
  averageLeadTime: String
  averageActiveTime: String
  employeesInvolvedProcess: number
  numberOfScenarios: number
  start: String
  end: String
  loading: String
}

type ProcesetListProps = {
  processListData: ProcessType[]
}
export const ProcessList = (props: ProcesetListProps) => {
    const processComponents = props.processListData && props.processListData.map((item) => {
      return <Process key={item.id} data={item} />
    }) 
  

  return <>{processComponents}</>
}
