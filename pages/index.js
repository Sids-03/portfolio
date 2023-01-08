import { Container , Box , Heading } from '@chakra-ui/react'

const Page = () => {
    return (
        <>
        <Container >
            <Box borderRadius="lg" bg ="red" mb={6} p ={3} align = "center">
                //To-do
            </Box>
            <Box display={{md:'flex'}}>
                <Box flexGrow={1}>
                    <Heading as = "h2" variant = "page-title" >
                        Siddhid Saha
                    </Heading>
                <p> Competitive Programmer | Developer </p>
                </Box>
            </Box>
        </Container>
        </>
    )
}

export default Page