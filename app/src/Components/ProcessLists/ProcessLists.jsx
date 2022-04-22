import React from 'react'
import { ProcessList } from './ProcessList/ProcessList'
import s from './ProcessLists.module.css'

let processLists = [
  { id: 1,
    name: 'Рассмотрение кредитной заявки',
    numberOfExecutions: '322 567',
    averageLeadTime: '10ч 36 мин',
    averageActiveTime: '1ч 7 мин (10,5%)',
    employeesInvolvedProcess: '120',
    numberOfScenarios: '129',
    start: '11 ноября 2017',
    end: '6 января  2018',
    loading: '10 января 2018'
  },
  { id: 2,
    name: 'name',
    numberOfExecutions: 981,
    averageLeadTime: '24ч',
    averageActiveTime: '1ч (4,2%)',
    employeesInvolvedProcess: 3,
    numberOfScenarios: 7,
    start: '11 ноября 2017',
    end: '6 января  2018',
    loading: '10 января 2018'
  },
  { id: 3,
    name: 'Рассмотрение кредитной заявки',
    numberOfExecutions: '322 567',
    averageLeadTime: '10ч 36 мин',
    averageActiveTime: '1ч 7 мин (10,5%)',
    employeesInvolvedProcess: '120',
    numberOfScenarios: '129',
    start: '11 ноября 2017',
    end: '6 января  2018',
    loading: '10 января 2018'
  },
  { id: 4,
    name: 'name',
    numberOfExecutions: 981,
    averageLeadTime: '24ч',
    averageActiveTime: '1ч (4,2%)',
    employeesInvolvedProcess: 3,
    numberOfScenarios: 7,
    start: '11 ноября 2017',
    end: '6 января  2018',
    loading: '10 января 2018'
  }
]

export const ProcessLists = () => {
  const processListsComponents = processLists.map(item => {
    return <ProcessList key={item.id} data={item}/>
  })
  return (
    <div className={s.wrapp}>
      {processListsComponents}
    </div>
  )
}
