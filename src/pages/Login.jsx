import {
	Box,
	Button,
	Checkbox,
	HStack,
	Heading,
	Image,
	Input,
	Show,
	Text,
	VStack,
} from '@chakra-ui/react';

import { FcGoogle } from 'react-icons/fc';
import { Link } from 'react-router-dom';

import LoginBanner from '../assets/login-banner.png';

const Login = () => {
	return (
		<HStack justify={'center'} pt={'8'}>
			<HStack
				maxW={{xl: '6xl', lg: '4xl'}}
				w={'100%'}
				justify={{md:'space-between', base: 'center'}}
				align={'bottom'}
				spacing={{lg:'50px'}}
			>
				<VStack p={3} align={'start'}>
					<VStack color={'brand.500'} align={'start'}>
						<Heading fontSize={'3xl'}>Hi! Welcome Back.</Heading>
						<Box
							borderRadius={2}
							h={'14px'}
							w={'120%'}
							bg={'linear-gradient(61deg, #10409D, transparent)'}
						/>
					</VStack>
					<VStack align={'start'} mt={7} width={{sm:'', base: '100%'}}>
						<Text fontSize={'sm'}>
							Continue with google or Enter details
						</Text>
						<Button
							display={'flex'}
							gap={3}
							w={{sm: 450, base: '85vw'}}
							variant={'outline'}
							size={'md'}
							fontSize={15}
							borderWidth={2}
							borderColor={'brand.300'}
							borderRadius={15}
						>
							<FcGoogle fontSize={'21px'} />
							Continue with Google
						</Button>
					</VStack>
					<HStack justify={'space-between'} w={'100%'} pt={5}>
						<Box
							h={'2px'}
							minW={'100px'}
							w={'100%'}
							bg={'brand.200'}
						/>
						<Text color={'brand.200'}>or</Text>
						<Box
							h={'2px'}
							minW={'100px'}
							w={'100%'}
							bg={'brand.200'}
						/>
					</HStack>
					<VStack spacing={3} color={'brand.500'} w={'100%'}>
						<Input
							placeholder="Email"
							size="md"
							w={'100%'}
							border={'none'}
							borderBottom={'2px solid'}
							borderColor={'brand.500'}
							borderRadius={0}
              _focus={{borderRadius: 5}}
						/>
						<Input
							placeholder="Password"
							size="md"
							w={'100%'}
							border={'none'}
							borderBottom={'2px solid'}
							borderColor={'brand.500'}
							borderRadius={0}
              _focus={{borderRadius: 5}}
						/>
						<HStack justify={'space-between'} w={'100%'} fontSize={'sm'}>
							<Checkbox><Text fontSize={'sm'}>Remember Me</Text></Checkbox>
							<Link to={'/'}>
								<Text
                  fontWeight={600}
									decoration={'underline'}
								>
									Forgot password?
								</Text>
							</Link>
						</HStack>
						<Button
							mt={5}
							w={'100%'}
							size={'lg'}
							bg={
								'linear-gradient(61deg, #10409D 50%, transparent)'
							}
							bgSize={'130%'}
							bgPos={'bottom'}
							_hover={{ bgPos: 'left' }}
							transition={'0.25s'}
							color={'white'}
							borderRadius={15}
						>
							Login
						</Button>
						<Link style={{ width: '100%' }} to={'/signup'}>
							<Text textAlign={'right'} w={'100%'} fontSize={'sm'}>
								Don&apos;t have an account?{' '}
								<Text
									fontWeight={600}
									as={'span'}
									decoration={'underline'}
								>
									Signup Now
								</Text>
							</Text>
						</Link>
					</VStack>
				</VStack>

        <Show above='md'>
          <HStack
            m={10}
            mb={5}
            mr={0}
            border={{xl:'1px solid'}}
            borderRadius={10}
            boxShadow={{xl: '-2px 4px 2px #514572'}}
            width={'100%'}
            justify={'center'}
            align={'bottom'}
          >
            <Image src={LoginBanner} w={'330px'} objectFit={'contain'} objectPosition={'bottom'}></Image>
          </HStack>
        </Show>
			</HStack>
		</HStack>
	);
};

export default Login;
