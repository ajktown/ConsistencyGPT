import { useRouter } from 'next/router'
import { FC } from 'react'
import ErrorApiConnectionFail from '@/components/molecule_error_api_connection_fail'
import Appbar from '@/components/organism_appbar'
import ActionGroupCard from '@/components/molecule_action_group_card'

const ActionGroupByIdPage: FC = () => {
  const router = useRouter()
  const id = typeof router.query.id === 'string' ? router.query.id : ""

  return (
    <Appbar>
      <ErrorApiConnectionFail />
      <ActionGroupCard id={id} />
    </Appbar>
  )
}

export default ActionGroupByIdPage
