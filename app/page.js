"use client";
import {
  Box,
  Input,
  Button,
  Text,
  VStack,
  HStack,
  Heading,
  useToast,
  Spinner,
  Center,
} from "@chakra-ui/react";
import { useState } from "react";
import VoterSlip from "./components/VoterSlip.jsx";

export default function Home() {
  const [epic, setEpic] = useState("");
  const [result, setResult] = useState(null);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  const normalizeEpic = (val = "") => val.toString().trim().toUpperCase();
  const isValidEpic = normalizeEpic(epic).length === 10;

  const handleSearch = async () => {
    const key = normalizeEpic(epic);

    if (!isValidEpic) {
      toast({
        title: "EPIC must be exactly 10 characters",
        status: "warning",
        duration: 2000,
        isClosable: true,
      });
      return;
    }

    try {
      setLoading(true);
      setResult(null);

      const res = await fetch(`/api/voters?epic=${encodeURIComponent(key)}`);
      if (!res.ok) throw new Error("Not found");

      const data = await res.json();
      if (!data) {
        toast({
          title: "No record found",
          status: "error",
          duration: 2000,
          isClosable: true,
        });
      } else {
        setResult(data);
        // Optional: auto-open print dialog in in-app browsers
        // setTimeout(() => window.print(), 600);
      }
    } catch (err) {
      toast({
        title: "No record found",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
      setResult(null);
    } finally {
      setLoading(false);
    }
  };

  const resetView = () => {
    setResult(null);
    setEpic("");
  };

  return (
    <Box minH="100vh"  p={6}>
      {/* PRINT VIEW (only card) */}
      {result ? (
        <Center minH="100vh" flexDir="column" gap={4}>
          <VoterSlip voter={result} />
          <HStack>
            <Button colorScheme="blue" onClick={() => window.print()}>
              Print
            </Button>
            <Button variant="outline" onClick={resetView}>
              Search Another
            </Button>
          </HStack>
        </Center>
      ) : (
        /* SEARCH VIEW */
        <VStack
          spacing={6}
          maxW="600px"
          w={"100%"}
          mx="auto"
          minH="100vh"
          align="center"
          justify="center"
        >
          <Box display="flex" alignItems={"center"} justifyContent={"center"}>
            <img
              width={"450px"}
              src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1770897814/WAR_2_fltadx.webp"
            />
          </Box>

          <HStack w={{ base: "100%", md: "400px" }}>
            <Input
              w={"100%"}
              placeholder="Enter EPIC Number"
              required
              value={epic}
              onChange={(e) => setEpic(e.target.value.toUpperCase())}
              onKeyDown={(e) =>
                isValidEpic && e.key === "Enter" && handleSearch()
              }
            />
            <Button
              colorScheme="orange"
              onClick={handleSearch}
              isLoading={loading}
              isDisabled={!isValidEpic || loading}
            >
              Search
            </Button>
          </HStack>

          {!isValidEpic && epic.length > 0 && (
            <Text fontSize="sm" color="whiteAlpha.700">
              EPIC must be exactly 10 characters
            </Text>
          )}

          {loading && <Spinner />}
        </VStack>
      )}
    </Box>
  );
}
