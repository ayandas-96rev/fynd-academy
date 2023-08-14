import { Center, Heading, Text } from "@chakra-ui/react"

const Home = () => {
  return (
    <>
        <Center flexDirection={'column'} gap={5} w={'100%'} pt={5}>
            <Heading>
                Home Component Toiri nei
            </Heading>
            <Text>Login Tep</Text>
            <Text>Okhane Signup tep</Text>
            <Text>Responsive ache</Text>
        </Center>
    </>
  )
}

export default Home