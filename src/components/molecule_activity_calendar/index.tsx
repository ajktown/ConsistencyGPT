import { getActionGroupsState } from '@/recoil/action-groups/action-groups.state'
import { FC } from 'react'
import ReactActivityCalendar from 'react-activity-calendar'
import { useRecoilValue } from 'recoil'
import ActivityCalendarUnknown from './index.unknown'

const ActivityCalendar: FC = () => {
  const gotActionGroupsState = useRecoilValue(getActionGroupsState)

  if (gotActionGroupsState === undefined) return null
  if (gotActionGroupsState === null) return <ActivityCalendarUnknown />

  return (
    <ReactActivityCalendar
      loading={!gotActionGroupsState}
      theme={{
        light: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
        dark: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
      }}
      totalCount={gotActionGroupsState.totalCount}
      data={gotActionGroupsState.actions.map((p) => {
        return {
          date: new Date(p.createdAt).toISOString().split(`T`)[0],
          count: 1,
          level: p.level,
        }
      })}
    />
  )
}

export default ActivityCalendar
