import StyledCircularButtonAtom from '@/atoms/StyledCircularButton'
import { usePostActionByActionGroupId } from '@/hooks/action-group/use-post-action-by-action-group-id.hook'
import { isActionGroupPunchableSelector } from '@/recoil/action-groups/action-groups.selectors'
import { FC } from 'react'
import { useRecoilValue } from 'recoil'

interface Props {
  id: string
}
const ActionGroupCardButton: FC<Props> = ({ id }) => {
  const isActionGroupPunchable = useRecoilValue(
    isActionGroupPunchableSelector(id),
  )
  const [loading, onPostActionByActionGroupId] =
    usePostActionByActionGroupId(id)

  if (!isActionGroupPunchable) return null

  return (
    <StyledCircularButtonAtom
      onClick={onPostActionByActionGroupId}
      radius={80}
      bgColor="green" // TODO: Just learned that the #XXXXXX works here xDD
      title="Done!"
      loading={loading}
      typoProps={{
        color: `white`,
        fontFamily: `Cormorant Garamond`,
      }}
    />
  )
}

export default ActionGroupCardButton
