import React from 'react'
import { ProcessList } from './ProcessList'
import { useQuery } from '@apollo/client'
import { GET_PROCESS_LIST } from '../../api/GetProcessList.js'

export const ProcessListContainer = () => {
  const { data, loading, error } = useQuery(GET_PROCESS_LIST)
  
  return loading
            ? <div>Загрузка...</div>
            : ( error 
                  ? <div>Ошибка: {error.message}</div> 
                  : <ProcessList processListData={data.processList}/> )
}
