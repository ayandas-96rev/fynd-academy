import { Box, Button, HStack, Text, VStack } from '@chakra-ui/react';
import { Link, Outlet, useLocation } from 'react-router-dom';

import {BiUserCheck} from 'react-icons/bi';
import {SlGraph} from 'react-icons/sl';
import {HiOutlinePuzzle} from 'react-icons/hi';
import { useEffect, useState } from 'react';

const Dashboard = () => {
    const loc= useLocation();
    const [location, setLocation] = useState("");

    useEffect(()=>{
        setLocation(loc.pathname);
    }, [loc])

	return (
		<HStack w={'100%'} h={'100%'} align={'top'}>
			<VStack
				w={['250px', '300px', '400px']}
				h={'100%'}
				bg={'brand.600'}
				pos={'relative'}
				zIndex={1}
				color={'white'}
				p={7}
				pt={'50px'}
                gap={5}
			>
				<Button
					as={Link}
                    to={'/dashboard/profile'}
					w={'100%'}
                    border={'1px solid #ffffff11'}
					bg={location=='/dashboard/profile'?'gray.400':'transparent'}
					color={location=='/dashboard/profile'?'gray.800':'gray.500'}
                    _hover={{bg: location=='/dashboard/profile'?'gray.400':'#ffffff11'}}
                    justifyContent={'start'}
				>
                        
                    <HStack>
                        <BiUserCheck size={'21px'}/>
                        <Text>Your Profile</Text>
                    </HStack>
					
				</Button>
				<Button
					as={Link}
                    to={'/dashboard/application-status'}
					w={'100%'}
                    border={'1px solid #ffffff11'}
					bg={location=='/dashboard/application-status'?'gray.400':'transparent'}
					color={location=='/dashboard/application-status'?'gray.800':'gray.500'}
                    _hover={{bg: location=='/dashboard/application-status'?'gray.400':'#ffffff11'}}
                    justifyContent={'start'}
				>
                    <HStack>
                        <SlGraph size={'18px'}/>
                        <Text>Application Status</Text>
                    </HStack>
					
				</Button>
				<Button
					as={Link}
                    to={'/dashboard/enrolled-course'}
					w={'100%'}
                    border={'1px solid #ffffff11'}
					bg={location=='/dashboard/enrolled-course'?'gray.400':'transparent'}
					color={location=='/dashboard/enrolled-course'?'gray.800':'gray.500'}
                    _hover={{bg: location=='/dashboard/enrolled-course'?'gray.400':'#ffffff11'}}
                    justifyContent={'start'}
				>
                    <HStack>
                        <HiOutlinePuzzle size={'18px'}/>
                        <Text>Enrolled Course</Text>
                    </HStack>
				</Button>
			</VStack>

            <Box w={'100%'} h={'100%'} overflowY={'auto'} p={[4, 6, 10]} pt={[6, 10, 10]}>
                <Outlet />
            </Box>
		</HStack>
	);
};

export default Dashboard;
