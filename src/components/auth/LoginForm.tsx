import {
  Button,
  Stack,
} from "@chakra-ui/react";
import {useRouter} from "next/router";


export const LoginForm = () => {


  const router = useRouter();


  const handleClick = (event: any) => {
    event.preventDefault();
    router.push('/animals');
  };

  return (
        <Stack spacing='5'>

          <Button colorScheme='blue' onClick={(e)=>handleClick(e)}>
            Animals
          </Button>
        </Stack>
  );
};
