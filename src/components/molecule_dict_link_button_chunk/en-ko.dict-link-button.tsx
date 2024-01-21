import { FC } from 'react'
import { useRecoilValue } from 'recoil'
import { wordsFamily } from '@/recoil/words/words.state'
import { useOpenNewTab } from '@/hooks/use-open-new-tab'
import StyledImageButtonAtom from '@/atoms/StyledImageButton'

const EN_KO_NAVER_DICTIONARY_PREFIX = `https://en.dict.naver.com/#/search?range=all&query=`

interface Props {
  wordId: string
}
const EnKoNaverDictionaryLinkButton: FC<Props> = ({ wordId }) => {
  const word = useRecoilValue(wordsFamily(wordId))
  const link = EN_KO_NAVER_DICTIONARY_PREFIX + word?.term
  const onOpenNewTab = useOpenNewTab(link)

  if (!word || word.languageCode !== `en` || !word.term) return null

  return (
    <StyledImageButtonAtom
      url={link}
      onClick={onOpenNewTab}
      imageSrc="/dictionary_icons/naver-dictionary.png"
    />
  )
}

export default EnKoNaverDictionaryLinkButton
