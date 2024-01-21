import { FC, useCallback, useState } from 'react'
import { FormControl, Select, MenuItem, SelectChangeEvent } from '@mui/material'
import StyledInputBase from './StyledInputBase'

interface Item {
  id: string
  title: string | number
  disabled?: boolean
}
interface Props {
  items: Item[]
  selectedId: string | undefined
  onChange?: (id: string) => any
  runOnChangeWithSameIdSelected?: boolean // Enables running onChange, even when the same id is selected.
  disabled?: boolean
}
const StyledDropDown: FC<Props> = ({
  onChange,
  runOnChangeWithSameIdSelected,
  ...props
}) => {
  const [lastSelected, setLastSelected] = useState(props.selectedId)
  const handleChange = useCallback(
    (e: SelectChangeEvent<string>) => {
      const selectedId = e.target.value
      if (!runOnChangeWithSameIdSelected && lastSelected === selectedId) return

      setLastSelected(selectedId)
      if (onChange) onChange(selectedId)
    },
    [lastSelected, runOnChangeWithSameIdSelected, onChange],
  )

  return (
    <FormControl variant="standard">
      <Select
        value={props.selectedId || ``}
        disabled={props.disabled}
        onChange={handleChange}
        input={<StyledInputBase />}
      >
        {props.items.map((item) => (
          <MenuItem
            key={item.id}
            id={item.id}
            value={item.id}
            disabled={item.disabled}
          >
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default StyledDropDown
