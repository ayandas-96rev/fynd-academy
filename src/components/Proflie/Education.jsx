/* eslint-disable react/prop-types */
import {
	Box,
	Heading,
	Input,
	Select,
	SimpleGrid,
	Text,
	VStack,
} from '@chakra-ui/react';

const Education = () => {
	return (
		<Box pt={4}>
			<Heading fontSize={'3xl'} textAlign={'center'} mb={10}>
				Education Details
			</Heading>
			<SimpleGrid
				columns={2}
				spacing={10}
				w={'100%'}
                maxW={'4xl'}
                m={'auto'}
				align={'center'}
				gap={5}
                mb={'100px'} 
			>
				<VStack align={'start'} fontWeight={'600'} gap={1}>
					<Text pl={2}>University/College</Text>
					<Input placeholder="Your University/College" />
				</VStack>
				<VStack align={'start'} fontWeight={'600'} gap={1}>
					<Text pl={2}>Course</Text>
					<Select placeholder="Select your course">
						{[
							'Btech in Computer Science',
							'Btech in other streams',
							'Bachelor of Computer Application',
						].map((course) => (
							<option key={course} value={course}>
								{course}
							</option>
						))}
					</Select>
				</VStack>
				<VStack align={'start'} fontWeight={'600'} gap={1}>
					<Text pl={2}>Year of Graduation</Text>
					<Select placeholder="Your Graduation Year">
						{[2022, 2023, 2024, 2025].map((year) => (
							<option key={year} value={year}>
								{year}
							</option>
						))}
					</Select>
				</VStack>
				<VStack align={'start'} fontWeight={'600'} gap={1}>
					<Text pl={2}>CGPA</Text>
					<Input placeholder="Your Overall GPA" />
				</VStack>
			</SimpleGrid>
			
		</Box>
	);
};

export default Education;
