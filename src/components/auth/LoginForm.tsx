import {
  Button,
  Stack,
} from "@chakra-ui/react";
import {useRouter} from "next/router";


export const LoginForm = () => {


  const router = useRouter();


  const handleAnimalsClick = (event: any) => {
    event.preventDefault();
    router.push('/animals');
  };

  const handlePlaygroundClick = (event: any) => {
    event.preventDefault();
    router.push('/playground');
  };

  return (
        <Stack spacing='5'>

          <Button colorScheme='blue' onClick={(e)=>handleAnimalsClick(e)}>
            Animals
          </Button>
          <Button colorScheme='blue' onClick={(e)=>handlePlaygroundClick(e)}>
            Playground
          </Button>
        </Stack>
  );
};
