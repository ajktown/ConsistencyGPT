import { actionGroupFamily } from '@/recoil/action-groups/action-groups.state'
import { FC, useMemo } from 'react'
import ReactActivityCalendar from 'react-activity-calendar'
import { useRecoilValue } from 'recoil'
import ActivityCalendarUnknown from './index.unknown'
import { ActionGroupFixedId } from '@/constants/action-group.constant'
import useWindowSize from 'react-use/lib/useWindowSize'
import { appThemeState } from '@/recoil/app-theme/app-theme.state'
import { getAppThemeColorLambda } from '@/lambdas/get-app-theme-color.lambda'

// TODO: The post consistency will use the same here
interface Props {
  id: string
}

const SHRINKING_MIN_WIDTH = 1020 // starting width that makes the calendar shrink
const COMMIT_BLOCK_WIDTH = 16 // 12 x 12 with 2 indent between

const ActivityCalendarById: FC<Props> = ({ id }) => {
  const appTheme = useRecoilValue(appThemeState)
  const { width } = useWindowSize()
  const actionGroup = useRecoilValue(actionGroupFamily(id))

  // sliceFrom contains number of days to slice from the start based on window width
  // This adjusts the calendar display for smaller screens by removing blocks
  // This is based on 365 days display
  const [sliceFrom, totalCount] = useMemo(() => {
    // const widthToBeShrink = Math.max(0, SHRINKING_MIN_WIDTH - width)
    // => if width is big enough, it will have 0 slices
    // const weeksToSlice = Math.ceil(Math.max(0, SHRINKING_MIN_WIDTH - width) / COMMIT_BLOCK_WIDTH)
    // => how many weeks to slice
    // const daysToSlice = Math.ceil(Math.max(0, SHRINKING_MIN_WIDTH - width) / COMMIT_BLOCK_WIDTH) * 7
    // => how many days to slice
    const sliceFrom =
      Math.ceil(Math.max(0, SHRINKING_MIN_WIDTH - width) / COMMIT_BLOCK_WIDTH) *
      7 // days
    return [sliceFrom, 365 - sliceFrom]
  }, [width])

  if (actionGroup === null) return <ActivityCalendarUnknown />
  if (actionGroup === undefined) return null
  if (
    actionGroup.props.id !== ActionGroupFixedId.DailyPostWordChallenge &&
    actionGroup.derivedState.isOnTimeCommittable
  )
    return null

  return (
    <ReactActivityCalendar
      loading={!actionGroup}
      theme={getAppThemeColorLambda(appTheme)}
      totalCount={totalCount}
      data={actionGroup.actions.slice(sliceFrom, 365).map((p) => {
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
