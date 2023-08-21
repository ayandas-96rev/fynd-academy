import { Box, Stack } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';

import { BiUserCheck } from 'react-icons/bi';
import { SlGraph } from 'react-icons/sl';
import { HiOutlinePuzzle } from 'react-icons/hi';
import DashboardButton from '../components/DashboardButton';
import { BsCheckCircle } from 'react-icons/bs';

const Dashboard = () => {
	return (
		<Stack
			w={'100%'}
			h={'100%'}
			align={'top'}
			direction={{ base: 'column-reverse', md: 'row' }}
			gap={0}
		>
			<Stack
				direction={{ base: 'row', md: 'column' }}
				w={{ md: '250px', lg: '300px', xl: '400px', base: '100vw' }}
				h={{ md: '100%', base: 'fit-content' }}
				bg={'brand.600'}
				pos={'relative'}
				zIndex={1}
				color={'white'}
				p={{ base: 4, sm: 5, md: 7 }}
				pt={{ md: '50px' }}
				gap={{ base: 4, sm: 5 }}
			>
				<DashboardButton
					text={'Your Profile'}
					to={'/dashboard/profile'}
					icon={<BiUserCheck size={'21px'} />}
				></DashboardButton>
				<DashboardButton
					text={'Application Status'}
					to={'/dashboard/application-status'}
					icon={<SlGraph size={'18px'} />}
				></DashboardButton>
				<DashboardButton
					text={'Enrolled Course'}
					to={'/dashboard/enrolled-course'}
					icon={<HiOutlinePuzzle size={'18px'} />}
				></DashboardButton>
				<DashboardButton
					text={'Enrollments'}
					to={'/dashboard/enrollments'}
					icon={<BsCheckCircle size={'17px'} />}
				></DashboardButton>
			</Stack>

			<Box
				w={'100%'}
				h={'100%'}
				overflowY={'auto'}
				p={[4, 6, 10]}
				pt={[6, 10, 10]}
			>
				<Outlet />
			</Box>
		</Stack>
	);
};

export default Dashboard;
