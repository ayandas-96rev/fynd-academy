import { Box, Stack, Step, StepDescription, StepIcon, StepIndicator, StepNumber, StepSeparator, StepStatus, StepTitle, Stepper } from "@chakra-ui/react"
import { useState } from "react";

const steps = [
    { title: 'Application Submission', description: 'You Have Successfully applied to Java Fullstack Developer Course' },
    { title: 'Waiting for the next steps', description: 'Your resume is waiting to be shortlisted' },
  ]

const ApplicationStatus = () => {
    const [step, setStep] = useState(1);
    return (
    <Stack minW={'lg'} direction={'column'} w={'100%'} h={'100%'}>
        <Stepper index={step} orientation='vertical' height='400px' gap='0' colorScheme="brand">
        {steps.map((step, index) => (
            <Step key={index}>
            <StepIndicator>
                <StepStatus
                complete={<StepIcon />}
                />
            </StepIndicator>

            <Box flexShrink='0'>
                <StepTitle>{step.title}</StepTitle>
                <StepDescription>
                    {step.description}
                </StepDescription>
            </Box>

            <StepSeparator />
            </Step>
        ))}
        </Stepper>
    </Stack>
  )
}

export default ApplicationStatus