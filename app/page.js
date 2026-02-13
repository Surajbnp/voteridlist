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
} from "@chakra-ui/react";
import { useState } from "react";
import VoterCard from "./components/VoterCard.jsx";

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

      if (!res.ok) {
        throw new Error("Not found");
      }

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

  const handlePrint = () => {
    const printContent = document.getElementById("print-card")?.innerHTML;
    if (!printContent) return;

    const win = window.open("", "", "width=350,height=600");
    win.document.write(`
      <html>
        <head>
          <title>Print</title>
          <style>
            body { font-family: Arial; padding: 10px; }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
    win.document.close();
    win.focus();
    win.print();
    win.close();
  };

  return (
    <Box
      minH="100vh"
      bg={"blackAlpha.800"}
      p={6}
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
    >
      <VStack spacing={6} maxW="600px" w={"100%"} mx="auto">
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
            color={'white'}
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

        {loading ? (
          <Spinner />
        ) : (
          result && (
            <>
              <VoterCard voter={result} />

              <HStack>
                <Button colorScheme="blue" onClick={handlePrint}>
                  Print Card
                </Button>
              </HStack>
            </>
          )
        )}
      </VStack>
    </Box>
  );
}
