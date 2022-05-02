import React from 'react'
import s from './Process.module.css'
import processListArrowSvg from '../../../assets/svg/processListArrowSvg.svg'
import numberOfExecutionsSvg from '../../../assets/svg/numberOfExecutions.svg'
import averageLeadTimeSvg from '../../../assets/svg/averageLeadTime.svg'
import averageActiveTimeSvg from '../../../assets/svg/averageActiveTime.svg'
import employeesInvolvedProcessSvg from '../../../assets/svg/employeesInvolvedProcess.svg'
import numberOfScenariosSvg from '../../../assets/svg/numberOfScenarios.svg'
import { NavLink } from "react-router-dom"
import moment from 'moment'
import 'moment/locale/ru'
import { ProcessType } from '../ProcessList'

type ProcessPropsType = {
  data: ProcessType
}

export const Process = (props: ProcessPropsType) => {
  const { name,
          numberOfExecutions,
          averageLeadTime,
          averageActiveTime,
          employeesInvolvedProcess,
          numberOfScenarios,
          start,
          end,
          loading} = props.data

  const averageLeadTimeH = +moment(+averageLeadTime, "X").format('h') > 0 
                              ? moment(+averageLeadTime, "X").format('h')
                              : ''
  const averageLeadTimeM = +moment(+averageLeadTime, "X").format('m') > 0 
                              ? moment(+averageLeadTime, "X").format('m')
                              : ''
                                
  const averageActiveTimeH = +moment(+averageActiveTime, "X").format('h') > 0 
                              ? moment(+averageActiveTime, "X").format('h')
                              : ''
  const averageActiveTimeM = +moment(+averageActiveTime, "X").format('m') > 0 
                              ? moment(+averageActiveTime, "X").format('m')
                              : ''

  const averageActiveTimePercentage = ((+averageActiveTimeH * 60 + +averageActiveTimeM) / 
                                        (+averageLeadTimeH * 60 + +averageLeadTimeM) * 100).toFixed(1)

  return (
    <div className={s.wrapp}>
      <div className={s.header}>
        <h3>{name}</h3>
          <div className={s.toCardProcess}>
            <div><NavLink to='#'>На карту процесса</NavLink></div>
            <div className={s.toCardProcessSvg}>
              <img src={processListArrowSvg} alt="" />
            </div>
          </div>
      </div>
      <div className={s.body}>
        <div className={s.columnFirst}>
          <div className={s.item}>
            <img src={numberOfExecutionsSvg} alt="" />
            <div>
              <div className={s.itemTitle + ' ' + s.itemTitleFirst}>{numberOfExecutions.toLocaleString()}</div>
              <div className={s.itemSubtitle}>выполнено раз</div>
            </div>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src={averageLeadTimeSvg} alt="" />
            <div>
              <div className={s.itemTitle}>{ (averageLeadTimeH && averageLeadTimeH + ' ч ') + 
                                             (averageLeadTimeM && averageLeadTimeM + ' мин') }</div>
              <div className={s.itemSubtitle}>среднее время выполнения</div>
            </div>
          </div>
          <div className={s.item}>
            <img src={averageActiveTimeSvg} alt="" />
            <div>
              <div className={s.itemTitle}>{ (averageActiveTimeH && averageActiveTimeH + ' ч ') + 
                                             (averageActiveTimeM && averageActiveTimeM + ' мин') + 
                                             ` (${averageActiveTimePercentage}%)` }</div>
              <div className={s.itemSubtitle}>среднее активное время</div>
            </div>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src={employeesInvolvedProcessSvg} alt="" />
            <div>
              <div className={s.itemTitle}>{employeesInvolvedProcess} сотрудников</div>
              <div className={s.itemSubtitle}>участвует в процессе</div>
            </div>
          </div>
          <div className={s.item}>
            <img src={numberOfScenariosSvg} alt="" />
            <div>
              <div className={s.itemTitle}>{numberOfScenarios} сценариев</div>
              <div className={s.itemSubtitle}>в процессе</div>
            </div>
          </div>
        </div>
        <div className={s.column + ' ' + s.columnLast}>
          <div className={s.item}>
            <div className={s.itemSubtitle + ' ' + s.itemSubtitleLast}>Начало</div>
            <div className={s.date}>{ moment(+start, "X").format('LL') }</div>
          </div>
          <div className={s.item}>
            <div className={s.itemSubtitle + ' ' + s.itemSubtitleLast}>Окончание</div>
            <div className={s.date}>{ moment(+end, "X").format('LL') }</div>
          </div>
          <div className={s.item}>
            <div className={s.itemSubtitle + ' ' + s.itemSubtitleLast}>Загрузка</div>
            <div className={s.date}>{ moment(+loading, "X").format('LL') }</div>
          </div>
        </div>
      </div>
    </div>
  )
}