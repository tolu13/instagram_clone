import { Box, Button, Flex, Image, Input, Text, VStack } from "@chakra-ui/react";
import React from "react";
import { useState } from "react";
import { useNavigate} from "react-router-dom";

export const AuthForm = () => {
    const [isLogin, setIsLogin] = useState(true);
    const navigate = useNavigate();
    const [inputs, setInputs] = useState({
        email:'',
        password:'',
        confirmPassword:''
    });
    const handleAuth = () =>{
        if (!inputs.email || !inputs.password) {
            alert("please fill all the fields")
            return;
        }
        navigate("/");
    };
  return (
    <>
    {/* adding logo and input form */}
      <Box border={"1px solid blue"} borderRadius={6} padding={5}>
        <VStack spacing={4}>
          <Image src="/logo.png" h={22} cursor={"pointer"} alt="instagram" />
          <Input placeholder="Email" fontSize={14} type="email" value={inputs.email} onChange={(e) => setInputs ({...inputs, email: e.target.value})} />
          <Input placeholder="Password" fontSize={14} type="password"  value={inputs.password} onChange={(e) => setInputs({...inputs, password: e.target.value})} />

            {!isLogin ? <Input placeholder="Confirm Password" fontSize={14} type="password" value={inputs.confirmPassword} onChange={(e) => setInputs({...inputs, confirmPassword: e.target.value})} /> : null}

            <Button w={"full"} colorScheme="blue" size={"sm"} fontSize={14} onClick={handleAuth}>
                {isLogin ? "Login" : "Sign Up"}
            </Button>
            {/*----- OR -----*/}
            <Flex alignItems={"center"} justifyContent={"center"} my={4} gap={1} w={"full"}>
              <Box  flex={2} h={"1px"} bg={"gray.500"} />
              <Text mx={1} color={"white"}>OR</Text>
              <Box flex={ 2} h={"1px"} bg={"gray.500"} />
            </Flex>

            <Flex alignItems={"center"} justifyContent={"center"} cursor={"pointer"}>
                <Image  src="/google.png" h={"5"}  alt="Google logo"/>
                <Text mx={2} color={"blue.500"}>
                    Login with Google
                </Text>
            </Flex>
        </VStack>
      </Box>

      <Box border={"1px solid blue"} borderRadius={6} padding={5}>
        <Flex alignItems={"center"} justifyContent={"center"} >
          <Box mx={2} fontSize={14}>
            {isLogin ? "Don't have an account" : "Already have an account"}
          </Box>
          <Box onClick={() => setIsLogin(!isLogin)} color={"blue.500"} cursor={"pointer"}>
            {isLogin ? "Signup": "login"}
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default AuthForm;
