import { actionGroupDailyPostWordChallengeState } from '@/recoil/action-groups/action-groups.state'
import { FC } from 'react'
import ReactActivityCalendar from 'react-activity-calendar'
import { useRecoilValue } from 'recoil'
import ActivityCalendarUnknown from './index.unknown'

const ActivityCalendar: FC = () => {
  const actionGroupDailyPostWordChallenge = useRecoilValue(
    actionGroupDailyPostWordChallengeState,
  )

  if (actionGroupDailyPostWordChallenge === undefined) return null
  if (actionGroupDailyPostWordChallenge === null)
    return <ActivityCalendarUnknown />

  return (
    <ReactActivityCalendar
      loading={!actionGroupDailyPostWordChallenge}
      theme={{
        light: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
        dark: [`#d4e6cf`, `#a7d4bf`, `#80d1ab`, `#56d197`, `#29cc7f`],
      }}
      totalCount={actionGroupDailyPostWordChallenge.totalCount}
      data={actionGroupDailyPostWordChallenge.actions.map((p) => {
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
