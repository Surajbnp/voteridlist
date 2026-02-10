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
} from "@chakra-ui/react";
import { useState } from "react";
import { voters } from "./list.js";
import VoterCard from "./components/VoterCard.jsx";

export default function Home() {
  const [epic, setEpic] = useState("");
  const [result, setResult] = useState(null);
  const toast = useToast();

  const handleSearch = () => {
    const found = voters.find(
      (v) => v.epicNo.toLowerCase() === epic.trim().toLowerCase(),
    );

    if (!found) {
      setResult(null);
      toast({
        title: "No record found",
        status: "error",
        duration: 2000,
        isClosable: true,
      });
    } else {
      setResult(found);
    }
  };

  const handlePrint = () => {
    const printContent = document.getElementById("print-card").innerHTML;
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
    <Box minH="100vh" bg="gray.900" color="white" p={6}>
      <VStack spacing={6} maxW="600px" mx="auto">
        <Heading>Voter Search</Heading>

        <HStack w="100%">
          <Input
            placeholder="Enter EPIC Number"
            value={epic}
            onChange={(e) => setEpic(e.target.value)}
          />
          <Button colorScheme="orange" onClick={handleSearch}>
            Search
          </Button>
        </HStack>

        {result && (
          <>
            <VoterCard voter={result} />

            <HStack>
              <Button colorScheme="blue" onClick={handlePrint}>
                Print Card
              </Button>
            </HStack>
          </>
        )}
      </VStack>
    </Box>
  );
}
