import { FC, Fragment, useCallback } from 'react'
import { Card, Box, CardContent, Typography, CardActions } from '@mui/material'
import StyledTextField from '@/atoms/StyledTextField'
import { useOutsideClicked } from '@/hooks/use-outside-clicked.hook'
import StyledTextButtonAtom from '@/atoms/StyledTextButton'
import { useKeyPress } from '@/hooks/use-key-press.hook'
import { usePostWordWithStringHook } from '@/hooks/words/use-post-word-with-string.hook'
import { useRecoilValue } from 'recoil'
import { searchInputState } from '@/recoil/words/searchInput.state'
import WordCardSkeleton from '../molecule_word_card/index.skeleton'
import { useDynamicFocus } from '@/hooks/use-dynamic-focus.hook'
import { isShowingArchivedState } from '@/recoil/preferences/preference.state'

const PRIVATE_FINAL_ADD_NEW_WORD_MESSAGE = `Add your new word...`

const NewWordBox: FC = () => {
  const searchInput = useRecoilValue(searchInputState)
  const isShowingArchived = useRecoilValue(isShowingArchivedState)

  // TODO: This is possibly too long. I think it could be better,
  // TODO: But then for the current code status sake, it looks good.
  const [
    loading,
    userInput,
    setUserInput,
    isWritingMode,
    setWritingMode,
    onClickOpenWritingMode,
    onClickPostWordWritingModeClose,
    onClickPostWordWritingModeOpen,
  ] = usePostWordWithStringHook()

  const [inputRef, onPostWordWithFocus] = useDynamicFocus(
    onClickPostWordWritingModeOpen,
  )
  const onHitEnter = useCallback(() => {
    if (isWritingMode) onPostWordWithFocus()
    else setWritingMode(true)
  }, [isWritingMode, setWritingMode, onPostWordWithFocus])

  useKeyPress(`Enter`, onHitEnter)
  useKeyPress(`Escape`, onClickPostWordWritingModeClose)
  const ref = useOutsideClicked(onClickPostWordWritingModeClose)

  if (searchInput || isShowingArchived) return null

  if (isWritingMode) {
    return (
      <Fragment>
        <Card
          style={{ width: `100%`, borderRadius: 9, cursor: `text` }}
          ref={ref}
        >
          <CardContent>
            <StyledTextField
              ref={inputRef}
              value={userInput}
              onChange={setUserInput}
              disabled={loading}
              label={PRIVATE_FINAL_ADD_NEW_WORD_MESSAGE}
              usePlaceholder
              isAutoFocused
            />
          </CardContent>
          <CardActions>
            <Box flexGrow={1} />
            <StyledTextButtonAtom
              onClick={onClickPostWordWritingModeClose}
              title={`Close`}
            />
          </CardActions>
        </Card>
        {loading && <WordCardSkeleton />}
      </Fragment>
    )
  }

  return (
    <Card
      style={{ width: `100%`, borderRadius: 9, cursor: `text` }}
      onClick={onClickOpenWritingMode}
    >
      <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {PRIVATE_FINAL_ADD_NEW_WORD_MESSAGE}
        </Typography>
      </CardContent>
    </Card>
  )
}

export default NewWordBox
