import { Spinner, HStack, Heading, Center, NativeBaseProvider } from "native-base";

const SpinnerLoading = () => {
  return (
    <NativeBaseProvider>
      <Center flex={1} px="3">
        <HStack space={2} justifyContent="center">
          <Spinner accessibilityLabel="Loading posts" />
          <Heading color="primary.500" fontSize="md">
            Loading
          </Heading>
        </HStack>
      </Center>
    </NativeBaseProvider>
  )
};

export default SpinnerLoading;
