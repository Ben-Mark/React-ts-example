import { Box, BoxProps } from '@chakra-ui/react'

export function Container(props: BoxProps) {
  return (
    <Box
      paddingX={{ base: '5', md: '8', lg: '12' }}
      maxWidth='7xl'
      marginX='auto'
      {...props}
    />
  )
}
