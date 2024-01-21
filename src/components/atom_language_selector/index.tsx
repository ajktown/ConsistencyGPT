import { FC, useCallback, useState, Fragment, useMemo } from 'react'
import { Box, Typography } from '@mui/material'
import StyledDropDown from '@/atoms/StyledDropDown'
import { usePutWord } from '@/hooks/words/use-put-word.hook'
import { useRecoilValue } from 'recoil'
import { wordsFamily } from '@/recoil/words/words.state'
import { GlobalLanguageCode } from '@/global.interface'
import { PROTECTED_AVAILABLE_LANGUAGE_MAP } from '@/global.constants'

interface OrientationStyle {
  mainBox: object
  secondaryBox: { mb?: number; mr?: number }
  fontSize: number
}

const verticalStyle: OrientationStyle = {
  mainBox: {}, // nothing
  secondaryBox: { mb: 0.4 },
  fontSize: 12,
}

const horizontalStyle: OrientationStyle = {
  mainBox: { display: `flex`, alignItems: `center` },
  secondaryBox: { mr: 0.7 },
  fontSize: 14,
}

interface Props {
  wordId: string
  useVerticalStyle?: boolean
  hideTitle?: boolean
}
const LanguageSelector: FC<Props> = ({
  wordId,
  useVerticalStyle,
  hideTitle,
}) => {
  const word = useRecoilValue(wordsFamily(wordId))
  const [, onPutWord] = usePutWord(wordId)

  const [selectedId, setSelectedId] = useState(word?.languageCode)

  const onChange = useCallback(
    (id: string) => {
      const convertedLnCode = id as GlobalLanguageCode
      setSelectedId(convertedLnCode)
      onPutWord({ languageCode: convertedLnCode })
    },
    [onPutWord],
  )

  const orientationStyle = useVerticalStyle ? verticalStyle : horizontalStyle
  const items = useMemo(
    () =>
      Array.from(PROTECTED_AVAILABLE_LANGUAGE_MAP).map(([, lang]) => ({
        id: lang.code,
        title: lang.nativeNameWithFlag,
      })),
    [],
  )

  return (
    <Box {...orientationStyle.mainBox}>
      {!hideTitle && (
        <Fragment>
          <Typography
            color="text.secondary"
            fontSize={orientationStyle.fontSize}
          >
            {` `}
            {`Language`}
          </Typography>
          <Box {...orientationStyle.secondaryBox} />
        </Fragment>
      )}
      <StyledDropDown
        items={items}
        selectedId={selectedId}
        onChange={onChange}
      />
    </Box>
  )
}

export default LanguageSelector
