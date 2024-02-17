import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC } from 'react'
import ReactActivityCalendar from 'react-activity-calendar'
import { useRecoilValue } from 'recoil'
import ActivityCalendarUnknown from './index.unknown'
import { ActionGroupFixedId } from '@/constants/action-group.constant'

// TODO: The post consistency will use the same here
interface Props {
  id: string
}
const ActivityCalendarById: FC<Props> = ({ id }) => {
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  if (actionGroup === null) return <ActivityCalendarUnknown />
  if (actionGroup === undefined) return null
  if (
    actionGroup.isOpened &&
    !actionGroup.isTodayHandled &&
    actionGroup.props.id !== ActionGroupFixedId.DailyPostWordChallenge
  )
    return null

  return (
    <ReactActivityCalendar
      loading={!actionGroup}
      theme={{
        light: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
        dark: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
      }}
      totalCount={actionGroup.totalCount}
      data={actionGroup.actions.map((p) => {
        return {
          date: p.yyyymmdd,
          count: 1,
          level: p.level,
        }
      })}
    />
  )
}

export default ActivityCalendarById
