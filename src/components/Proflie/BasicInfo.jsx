import {
	Box,
	Grid,
	GridItem,
	Heading,
	Image,
	Input,
	InputGroup,
	InputLeftElement,
	Stack,
	Text,
	Textarea,
	VStack,
} from '@chakra-ui/react';
import { BsTelephoneFill } from 'react-icons/bs';

import Abhisek from '../../assets/abhisek.png';

const BasicInfo = () => {
	return (
		<Box pt={4}>
			<Heading fontSize={'3xl'} textAlign={'center'} mb={10}>
				Edit your basic info
			</Heading>
			<Stack
				direction={{ lg: 'row', base: 'column' }}
				align={{ lg: 'start', base: 'center' }}
				justify={{ lg: 'space-between' }}
				maxW={'4xl'}
				m={'auto'}
				gap={10}
				pb={5}
			>
				<Image
                    mt={1}
					minW={{ xl: 200, base: 150 }}
					w={{ xl: 200, base: 150 }}
					h={{ xl: 200, base: 150 }}
					objectFit={'cover'}
					bg={'gray.100'}
					borderRadius={7}
					border={'2px solid'}
					borderColor={'brand.200'}
					src={Abhisek}
				/>
				<Grid
					maxW={'4xl'}
					w={'100%'}
					m={'auto'}
					templateRows="repeat(5, 1fr)"
					templateColumns="repeat(4, 1fr)"
					gap={4}
				>
					<GridItem colSpan={2}>
						<VStack align={'left'} fontWeight={'600'} gap={1}>
							<Text pl={2}>First Name</Text>
							<Input
								placeholder="Your First Name"
								value={'Abhisek'}
								disabled
								_disabled={{
									bg: '#00000011',
									border: '2px solid',
									borderColor: 'brand.200',
									cursor: 'not-allowed',
								}}
							/>
						</VStack>
					</GridItem>
					<GridItem colSpan={2}>
						<VStack align={'left'} fontWeight={'600'} gap={1}>
							<Text pl={2}>Last Name</Text>
							<Input
								placeholder="Your Last Name"
								value={'Maiti'}
								disabled
								_disabled={{
									bg: '#00000011',
									border: '2px solid',
									borderColor: 'gray.400',
									cursor: 'not-allowed',
								}}
							/>
						</VStack>
					</GridItem>
					<GridItem colSpan={4}>
						<VStack
							align={'left'}
							fontWeight={'600'}
							gap={1}
							w={'100%'}
						>
							<Text pl={2}>Email</Text>
							<Input
								border={'2px solid'}
								borderColor={'brand.200'}
								placeholder="Your Email"
								type="email"
							/>
						</VStack>
					</GridItem>
					<GridItem colSpan={4}>
						<VStack
							align={'left'}
							fontWeight={'600'}
							gap={1}
							w={'100%'}
						>
							<Text pl={2}>Phone Number</Text>
							<InputGroup>
								<InputLeftElement
									pointerEvents="none"
									bg={'#00000009'}
								>
									<BsTelephoneFill color="gray.300" />
								</InputLeftElement>
								<Input
									border={'2px solid'}
									borderColor={'brand.200'}
									type="tel"
									placeholder="Phone number"
									pl={'50px'}
								/>
							</InputGroup>
						</VStack>
					</GridItem>
					<GridItem colSpan={4} rowSpan={2}>
						<VStack
							align={'left'}
							fontWeight={'600'}
							gap={1}
							w={'100%'}
						>
							<Text pl={2}>About</Text>
							<Textarea
								border={'2px solid'}
								borderColor={'brand.200'}
								placeholder="Your summary"
								rows={4}
								resize={'none'}
							/>
						</VStack>
					</GridItem>
				</Grid>
			</Stack>
		</Box>
	);
};

export default BasicInfo;
