import React from 'react';
import { 
  Button, 
  Card, 
  CardHeader, 
  CardBody, 
  Text, 
  Heading, 
  Stack, 
  StackDivider,
  Flex,
  Avatar,
  Box, 
  HStack, 
  Link,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon, 
} from "@chakra-ui/react";
export default function Home(){
  return (
<Accordion>
  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Introduce
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
    <> 
      <Card>
        <CardHeader>
        <Heading size='md'>自己紹介</Heading>
          <Flex gap='4'>
            <Flex flex='1' gap='4' alignItems='center' flexWrap='wrap'>
              <Avatar name='Segun Adebayo' src='https://automaton-media.com/wp-content/uploads/2021/09/20210924-176674-header.jpg' />
              <Box>
                <Heading size='sm'>tana</Heading>
                <Text>Iyatomi lab</Text>
              </Box>
            </Flex>
          </Flex>

        </CardHeader>
        <CardBody>
          <Stack divider={<StackDivider />} spacing='4'>
            <Box bg='red.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                好きな食べ物
              </Heading>
              <Text pt='2' fontSize='sm'>
                お前
              </Text>
            </Box>
            <Box bg='green.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                趣味
              </Heading>
              <Text pt='2' fontSize='sm'>
                スキーすき
              </Text>
            </Box>
            <Box bg='blue.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                やっているバイト
              </Heading>
              <Text pt='2' fontSize='sm'>
                塾バイト(ブラック)
              </Text>
            </Box>
          </Stack>
        </CardBody>
      </Card>
      </>
    </AccordionPanel>
  </AccordionItem>

  <AccordionItem>
    <h2>
      <AccordionButton>
        <Box as='span' flex='1' textAlign='left'>
          Section 2 title
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat.
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  );
}
// export default function Home(){
//   return (
//   <Box bg="gray.800" p={4}>
//   <HStack spacing={8}>
//     <Link href="#" color="white">Home</Link>
//     <Link href="#" color="white">About</Link>
//     <Link href="#" color="white">Contact</Link>
//   </HStack>
// </Box>
//   );
// }
//import { Box, Heading, Button, VStack, HStack, Text } from '@chakra-ui/react';
//import { Button, ButtonGroup } from '@chakra-ui/react'
/*export default function Home() {//ボタン
    return (
    <>
    <h1>Hello</h1>
    <h2>world</h2>
    <h2>konnitiha</h2>
    <Button colorScheme='blue'>Button</Button>    
    </>
    
    )
}*/
/*const App = () => {// ボタンがクリックされたときのハンドラ関数
    
    const handleClick1 = () => {
      alert('Button 1 clicked!');
    };
  
    const handleClick2 = () => {
      alert('Button 2 clicked!');
    };
  
    return (
      <Box textAlign="center" fontSize="xl">
        <VStack spacing={8} mt={10}>
          <Heading>Welcome to Chakra UI</Heading>
          <Text>
            This is an example of a simple webpage created with Chakra UI.
          </Text>
          <HStack spacing={4}>
            <Button colorScheme="teal" size="lg" onClick={handleClick1}>
              Button 1
            </Button>
            <Button colorScheme="blue" size="lg" onClick={handleClick2}>
              Button 2
            </Button>
          </HStack>
        </VStack>
      </Box>
    );
  };
  export default App;*/
/*export default function Home() {//ボタン
    return (
    <>
    <h1>Hello</h1>
    <h2>world</h2>
    <h2>konnitiha</h2>
    <Button colorScheme='blue'>Button</Button>    
    </>
    
    )
}*/
