import { ProcessList } from './ProcessList/ProcessList'
import s from './ProcessLists.module.css'

export const ProcessLists = (props) => {
  const processLists = props.processLists.map(item => {
    return <ProcessList key={item.id} data={item}/>
  })
  return (
    <div className={s.wrapp}>
      {processLists}
    </div>
  )
}
