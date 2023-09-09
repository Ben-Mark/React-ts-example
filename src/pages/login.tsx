import { Container } from '@/components/wrappers/Container'
import { LoginForm } from '@/components/auth/LoginForm'
import { Box, Button, chakra, HStack, Stack, VStack } from '@chakra-ui/react'
import Link from 'next/link'

export default function LoginPage() {
  return (
    <Box bg='gray.50' minHeight='100vh'>
      <Container
        maxWidth='lg'
        paddingY={{ base: '12vh', md: '16vh' }}
        paddingX={{ sm: '8' }}
      >
        <Stack
          spacing='8'
          paddingY={{ sm: '8' }}
          paddingX={{ base: '4', sm: '10' }}
          boxShadow={{ sm: 'md' }}
          borderRadius={{ sm: '3xl' }}
          backgroundColor='white'
        >
          <VStack spacing='6'>
            {/*<LogoSymbol />*/}
            <Stack spacing={{ base: '2', md: '3' }} textAlign='center'>
              <chakra.h1 textStyle='heading/sm' fontWeight='medium'>
                Ben-Mark
              </chakra.h1>
              <HStack spacing='1' justify='center'>
                <chakra.p>Don't have an account?</chakra.p>
                <Button
                  as={Link}
                  href='/sign-up'
                  variant='link'
                  colorScheme='blue'
                  fontWeight='medium'
                >
                  Sign up
                </Button>
              </HStack>
            </Stack>
          </VStack>

          <LoginForm />
        </Stack>
      </Container>
    </Box>
  )
}
