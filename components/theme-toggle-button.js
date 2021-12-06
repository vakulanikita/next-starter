import { AnimatePresence, motion } from 'framer-motion'
import { IconButton, useColorMode, useColorModeValue } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

export default function ThemeToggleButton() {
  const { toggleColorMode } = useColorMode();
  const color = useColorModeValue('purple', 'orange');
  const icon = useColorModeValue(<MoonIcon />, <SunIcon />);

  return (
    <IconButton
      colorScheme={color}
      icon={icon}
      onClick={toggleColorMode}
    ></IconButton>
  )
}
