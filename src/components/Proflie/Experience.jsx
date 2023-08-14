import {
	Box,
	FormLabel,
	Grid,
	GridItem,
	Heading,
	Input,
	Text,
	VStack,
} from '@chakra-ui/react';

const Experience = () => {
  return (
    <Box pt={4}>
			<Heading fontSize={'3xl'} textAlign={'center'} mb={10}>
				Experience Details
			</Heading>
            <Grid
                maxW={'4xl'}
                m={'auto'}
                templateRows='repeat(4, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={4}
            >
                <GridItem colSpan={2}>
                    <VStack align={'start'} fontWeight={'600'} gap={1}>
                        <Text pl={2}>Company Name</Text>
                        <Input placeholder="ABC Company" />
                    </VStack>
                </GridItem>
                <GridItem colSpan={2}>
                    <VStack align={'start'} fontWeight={'600'} gap={1}>
                        <Text pl={2}>Designation</Text>
                        <Input placeholder="Your Role in Company" />
                    </VStack>
                </GridItem>
                <GridItem colSpan={2}>
                    <VStack align={'start'} fontWeight={'600'} gap={1}>
                        <Text pl={2}>Start Date</Text>
                        <Input placeholder="Your Role in Company" type='date'/>
                    </VStack>
                </GridItem>
                <GridItem colSpan={2}>
                    <VStack align={'start'} fontWeight={'600'} gap={1}>
                        <Text pl={2}>End Date</Text>
                        <Input placeholder="Your Role in Company" type='date'/>
                    </VStack>
                </GridItem>
                <GridItem colSpan={4}>
                    <VStack align={'start'} fontWeight={'600'} gap={1}>
                        <Text pl={2}>Your Resume/CV</Text>
                        <FormLabel w={'100%'}>
                            <Text
                                color={'gray.600'}
                                p={3}
                                py={2}
                                borderRadius={5}
                                border={'2px dashed'}
                                borderColor={'gray.300'}
                                w={'100%'}
                                textAlign={'center'}
                                cursor={'pointer'}
                                transition={'0.25s'}
                                _hover={{borderColor: 'gray.400'}}
                            >Drag and Drop/ Choose from device</Text>
                            <Input placeholder="Upload your resume" type='file' m={0} pos={'absolute'} p={0} h={0} w={0} visibility={'hidden'}/>
                        </FormLabel> 
                    </VStack>
                </GridItem>
                <GridItem colSpan={4}>
                    <VStack align={'start'} fontWeight={'600'} gap={1}>
                        <Text pl={2}>Skills</Text>
                        <Input placeholder="Type you skills"/>
                    </VStack>
                </GridItem>
            </Grid>
		</Box>
  )
}

export default Experience