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
import { useMemo, useState } from "react";
import { voters } from "./list.js";
import VoterCard from "./components/VoterCard.jsx";

export default function Home() {
  const [epic, setEpic] = useState("");
  const [result, setResult] = useState(null);
  const toast = useToast();
  const [loading, setLoading] = useState(false);

  // 🔥 Pre-index voters by EPIC No for O(1) lookup
  const voterMap = useMemo(() => {
    const map = new Map();
    voters.forEach((v) => {
      const epicKey = v?.["Epic No"]?.toString().trim().toLowerCase();
      if (epicKey) map.set(epicKey, v);
    });
    return map;
  }, []);

  const normalizeEpic = (val = "") => val.toString().trim().toLowerCase();

  const handleSearch = () => {
    setLoading(true);
    const key = normalizeEpic(epic);
    const found = voterMap.get(key);

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

    setTimeout(() => {
      setLoading(false);
    }, 500);
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
      bg={'blackAlpha.800'}
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
            required
            value={epic}
            onChange={(e) => setEpic(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <Button colorScheme="orange" onClick={handleSearch}>
            Search
          </Button>
        </HStack>

        {loading ? (
          <Spinner />
        ) : (
          result && (
            <>
              <VoterCard voter={result} />

              <HStack>
                <Button colorScheme="blue" onClick={window.print}>
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
