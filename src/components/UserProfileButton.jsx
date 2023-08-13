import { Button, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const UserProfileButton = () => {
	return (
		<Button
			as={Link}
			to={'/login'}
			variant="outline"
			colorScheme="brand"
			flexBasis={{ sm: '160px', xs: '' }}
			w={{ sm: '160px', base: '' }}
			_hover={{ bg: 'brand.100' }}
		>
			<svg
				xmlns="http://www.w3.org/2000/svg"
				width="26"
				height="26"
				viewBox="0 0 35 35"
				fill="none"
			>
				<path
					fillRule="evenodd"
					clipRule="evenodd"
					d="M17.5002 5.83334C14.2772 5.83334 11.6668 8.44376 11.6668 11.6667C11.6668 14.8896 14.2772 17.5 17.5002 17.5C20.7231 17.5 23.3335 14.8896 23.3335 11.6667C23.3335 8.44376 20.7231 5.83334 17.5002 5.83334ZM20.4168 11.6667C20.4168 10.0625 19.1043 8.75001 17.5002 8.75001C15.896 8.75001 14.5835 10.0625 14.5835 11.6667C14.5835 13.2708 15.896 14.5833 17.5002 14.5833C19.1043 14.5833 20.4168 13.2708 20.4168 11.6667ZM26.2502 24.7917C25.9585 23.7563 21.4377 21.875 17.5002 21.875C13.5627 21.875 9.04183 23.7563 8.75016 24.8063V26.25H26.2502V24.7917ZM5.8335 24.7917C5.8335 20.9125 13.6064 18.9583 17.5002 18.9583C21.3939 18.9583 29.1668 20.9125 29.1668 24.7917V29.1667H5.8335V24.7917Z"
					fill="url(#paint0_linear_265_81)"
				/>
				<defs>
					<linearGradient
						id="paint0_linear_265_81"
						x1="6.00015"
						y1="6"
						x2="29.0002"
						y2="29"
						gradientUnits="userSpaceOnUse"
					>
						<stop stopColor="#6D10FC" />
						<stop offset="1" stopColor="#F96295" />
					</linearGradient>
				</defs>
			</svg>
			<Text fontWeight={700} ml={2} color={'brand.900'}>
				Login
			</Text>
		</Button>
	);
};

export default UserProfileButton;
