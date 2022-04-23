import React from 'react'
import s from './Process.module.css'
import processListArrowSvg from '../../../assets/svg/processListArrowSvg.svg'
import numberOfExecutionsSvg from '../../../assets/svg/numberOfExecutions.svg'
import averageLeadTimeSvg from '../../../assets/svg/averageLeadTime.svg'
import averageActiveTimeSvg from '../../../assets/svg/averageActiveTime.svg'
import employeesInvolvedProcessSvg from '../../../assets/svg/employeesInvolvedProcess.svg'
import numberOfScenariosSvg from '../../../assets/svg/numberOfScenarios.svg'
import { NavLink } from "react-router-dom"

export const Process = (props) => {
  const { //id,
          name,
          numberOfExecutions,
          averageLeadTime,
          averageActiveTime,
          employeesInvolvedProcess,
          numberOfScenarios,
          start,
          end,
          loading} = props.data

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
              <div className={s.itemTitle + ' ' + s.itemTitleFirst}>{numberOfExecutions}</div>
              <div className={s.itemSubtitle}>выполнено раз</div>
            </div>
          </div>
        </div>
        <div className={s.column}>
          <div className={s.item}>
            <img src={averageLeadTimeSvg} alt="" />
            <div>
              <div className={s.itemTitle}>{averageLeadTime}</div>
              <div className={s.itemSubtitle}>среднее время выполнения</div>
            </div>
          </div>
          <div className={s.item}>
            <img src={averageActiveTimeSvg} alt="" />
            <div>
              <div className={s.itemTitle}>{averageActiveTime}</div>
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
            <div className={s.date}>{start}</div>
          </div>
          <div className={s.item}>
            <div className={s.itemSubtitle + ' ' + s.itemSubtitleLast}>Окончание</div>
            <div className={s.date}>{end}</div>
          </div>
          <div className={s.item}>
            <div className={s.itemSubtitle + ' ' + s.itemSubtitleLast}>Загрузка</div>
            <div className={s.date}>{loading}</div>
          </div>
        </div>
      </div>
    </div>
  )
}