import { Box, chakra, Stack, VStack } from "@chakra-ui/react";
import { Container } from "@/components/wrappers/Container";
import { LoginForm } from "@/components/auth/LoginForm";
import { StrictMode } from "react";
import { SEO } from "@/google/seo";


export default function IndexPage() {
  return (
    <>
      {/*Google search engine optimization, the configurations that google expects when a web page is exposed in the web*/}
      <SEO />
      {/*Strict Mode is a tool for highlighting potential problems in React applications.
       It acts as a "linting" layer for React, performing checks and warning you about best practices,
       performance issues, or usage of deprecated APIs during development.
       It is not a feature that changes how your application behaves,
       but it helps you to write better, more efficient, and future-proof React code.*/}
      <StrictMode>
        <Box bg="gray.50" minHeight="100vh">
          <Container
            maxWidth="lg"
            paddingY={{ base: "12vh", md: "16vh" }}
            paddingX={{ sm: "8" }}
          >
            <Stack
              spacing="8"
              paddingY={{ sm: "8" }}
              paddingX={{ base: "4", sm: "10" }}
              boxShadow={{ sm: "md" }}
              borderRadius={{ sm: "3xl" }}
              backgroundColor="white"
            >
              <VStack spacing="6">
                <Stack spacing={{ base: "2", md: "3" }} textAlign="center">
                  <chakra.h1 textStyle="heading/sm" fontWeight="medium">
                    Animals React
                  </chakra.h1>
                </Stack>
              </VStack>

              <LoginForm />
            </Stack>
          </Container>
        </Box>
      </StrictMode>
    </>
  );
}
