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
                好きなゲーム
              </Heading>
              <Text pt='2' fontSize='sm'>
                モンハン、valorant
              </Text>
            </Box>
            <Box bg='green.100' p='4' borderRadius='md'>
              <Heading size='xs' textTransform='uppercase'>
                趣味
              </Heading>
              <Text pt='2' fontSize='sm'>
                スキー
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
         Conclusion
        </Box>
        <AccordionIcon />
      </AccordionButton>
    </h2>
    <AccordionPanel pb={4}>
      このサイトにアクセスしていただきありがとうございました。
    </AccordionPanel>
  </AccordionItem>
</Accordion>
  );
}