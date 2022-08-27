import {
    Box,
    Text,
    Img,
    Button,
    Divider,
    Flex,
    Grid,
    GridItem,
    Heading,
    Spacer,
    Stack,
   
    HStack,
    Icon
    
  } from "@chakra-ui/react";
//  

  
  function Navbar() {
   
  
    return (
      
      
      <Box >
        <HStack  margin="2%" gap="2rem" my="1rem" fontFamily={"sans-serif"} cursor="pointer" >
          
          <Img width={"200px"} src="https://coschedule.com/img/cos-logo-full-color.svg"/>
          
          <Text _hover={{color:"#F37e5d"}}>Products</Text>
          <Text _hover={{color:"#F37e5d"}}>WhyCoSchedule</Text>
          <Text _hover={{color:"#F37e5d"}}>Resourecs</Text>
          <Text _hover={{color:"#F37e5d"}}>Pricing</Text>
          <Spacer />
          
         
         <Text _hover={{color:"#F37e5d"}}>Sign In</Text>
         <Text _hover={{color:"#F37e5d"}}>Get A Demo</Text>
         <Button color={"white"} backgroundColor={"#F37e5d"}>Create My Calendar</Button>
           

          
        </HStack>
        
        
          
         
         
      </Box>
    );
  }
  
  export default Navbar;
  