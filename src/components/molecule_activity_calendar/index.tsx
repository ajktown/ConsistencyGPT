import { actionGroupsState } from '@/recoil/action-groups/acton-groups.state'
import { FC } from 'react'
import ReactActivityCalendar from 'react-activity-calendar'
import { useRecoilValue } from 'recoil'
import ActivityCalendarUnknown from './index.unknown'

const ActivityCalendar: FC = () => {
  const actionGroups = useRecoilValue(actionGroupsState)

  if (actionGroups === null) return <ActivityCalendarUnknown />

  return (
    <ReactActivityCalendar
      loading={!actionGroups}
      theme={{
        light: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
        dark: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
      }}
      data={actionGroups.map((p) => {
        return {
          date: new Date(p.props.createdAt).toISOString().split(`T`)[0],
          count: 1,
          level: p.props.level,
        }
      })}
    />
  )
}

export default ActivityCalendar
