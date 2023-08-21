import {
	Box,
	Button,
	HStack,
	Show,
	Stack,
	Step,
	StepIcon,
	StepIndicator,
	StepNumber,
	StepSeparator,
	StepStatus,
	StepTitle,
	Stepper,
	useToast,
} from '@chakra-ui/react';
import { useState } from 'react';

import BasicInfo from './Proflie/BasicInfo';
import Education from './Proflie/Education';
import Experience from './Proflie/Experience';


const steps = ['Basic Info', 'Education', 'Experience'];

const Profile = () => {
	const [stepIndex, setStepIndex] = useState(0);
	const toast = useToast();

	const incrementStep = () => {
    if(stepIndex<3)
      setStepIndex((step) => step + 1);
	};
	const decrementStep = () => {
    if(stepIndex>0)
		setStepIndex((step) => step - 1);
	};

	const onSave = () => {
		toast({
			title: 'Successfully saved details',
			description: 'Your details were updated.',
			status: 'info',
			duration: 3000,
			isClosable: true,
		});
	};

	return (
		<Stack direction={'column'} w={'100%'}>
			<Stepper
				index={stepIndex}
				border={'3px solid'}
				borderColor={'brand.300'}
				p={[3,5,5]}
				borderRadius={10}
				colorScheme="brand"
			>
				{steps.map((step, index) => (
					<Step key={index}>
						<StepIndicator>
							<StepStatus
								complete={<StepIcon />}
								incomplete={<StepNumber />}
								active={<StepNumber />}
							/>
						</StepIndicator>
						<Show above='sm'>
							<Box flexShrink="0">
								<StepTitle>{step}</StepTitle>
							</Box>
						</Show>
						<StepSeparator />
					</Step>
				))}
			</Stepper>

			{stepIndex == 0 && <BasicInfo />}
			{stepIndex == 1 && <Education />}
			{(stepIndex == 2 || stepIndex == 3) && <Experience />}

			<HStack
				justify={'space-between'}
				fontWeight={'600'}
				w={'100%'}
				gap={1}
				py={{md: 10, base: 5}}
			>
				<HStack>
					<Button
						display={stepIndex == 0 ? 'none' : 'flex'}
						onClick={decrementStep}
					>
						Back
					</Button>
				</HStack>
				<HStack>
					{stepIndex < 3 && (
						<Button
							bg={
								'linear-gradient(61deg, #EBF1FD 60%, transparent)'
							}
							bgSize={'130%'}
							bgPos={'bottom'}
							_hover={{ bgPos: 'left' }}
							color={'dark'}
							border={'2px solid'}
							borderColor={'brand.300'}
							transition={'0.25s'}
							colorScheme="brand"
							onClick={() => {
								onSave();
								incrementStep();
							}}
						>
							Save Details
						</Button>
					)}
					{stepIndex < 2 && (
						<Button colorScheme="brand" onClick={incrementStep}>
							Next
						</Button>
					)}
				</HStack>
			</HStack>
		</Stack>
	);
};

export default Profile;
