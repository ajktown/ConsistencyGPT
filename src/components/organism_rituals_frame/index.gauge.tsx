import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { actionGroupAchievedPercentSelector } from '@/recoil/action-groups/action-groups.selectors'
import StyledProgressBarMolecule from '@/molecules/StyledProgressBar'

interface Props {}
/**
 * RitualsFrameGauge shows a simple molecule sized gauge for user's achievement for today
 * @param param0
 * @returns
 */
const RitualsFrameGauge: FC<Props> = () => {
  const percentage = useRecoilValue(actionGroupAchievedPercentSelector)

  return <StyledProgressBarMolecule percent={percentage} />
}

export default RitualsFrameGauge
