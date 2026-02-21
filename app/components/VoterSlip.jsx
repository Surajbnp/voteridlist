"use client";
// Card.jsx (Thermal Slip - Clean Voter Only)

import { Box, Text, VStack, HStack, Divider, Flex } from "@chakra-ui/react";

const locationMap = {
  "43/1": { hindi: "सामुदायिक भवन अशोक नगर (भाग–1)" },
  "43/2": { hindi: "सामुदायिक भवन अशोक नगर (भाग–2)" },
  "43/3": { hindi: "सामुदायिक भवन अशोक नगर (भाग–3)" },
  "43/4": { hindi: "सामुदायिक भवन अशोक नगर (भाग–4)" },
  "43/5": { hindi: "संत जेवियर स्कूल डोरंडा (कमरा सं० 1)" },
  "43/6": { hindi: "संत जेवियर स्कूल डोरंडा (कमरा सं० 2)" },
  "43/7": { hindi: "संत जेवियर स्कूल डोरंडा (कमरा सं० 3)" },
  "43/8": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 1)" },
  "43/9": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 2)" },
  "43/10": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 3)" },
  "43/11": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 4)" },
  "43/12": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 5)" },
  "43/13": { hindi: "संत जेवियर स्कूल डोरंडा (कमरा सं० 4)" },
  "43/14": { hindi: "संत जेवियर स्कूल डोरंडा (कमरा सं० 5)" },
  "43/15": {
    hindi: "राजकीय हिन्दी/उर्दू प्राथमिक विद्यालय, कडरू (कमरा सं० 1)",
  },
  "43/16": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 6)" },
  "43/900": { hindi: "जवाहर विद्या मंदिर श्यामली (कमरा सं० 7)" },
};

const cleanPrefix = (str = "") =>
  String(str)
    .replace(/^\((H|F)\)\s*/i, "")
    .trim();

export default function VoterCard({ voter = {} }) {
  const acSR = voter?.["AC "]?.[" Part "]?.[" SR"] || "";

  const [assemblyNo = "—", partNo = "—", serialNo = "—"] = acSR
    ? acSR.split("/").map((s) => s.trim())
    : [];

  const booth = voter?.Location || "—";
  const location = locationMap[booth];

  const fatherHindi = cleanPrefix(voter?.["Father's "]?.[" Husband's Name"]);
  const fatherEnglish = cleanPrefix(
    voter?.["Father's "]?.[" Husband's Name (English)"],
  );

  return (
    <Box
      id="print-card"
      bg="white"
      color="black"
      w="100%"
      maxW="120mm"
      mx="auto"
      fontFamily="system-ui, Arial"
      fontSize="14px"
      lineHeight="1.4"
    >
      <VStack spacing={1} align="stretch">
        <Text
          textAlign="center"
          fontWeight="900"
          letterSpacing="2px"
          fontSize="24px"
        >
          WARD MITRA
        </Text>

        <Divider borderColor="black" />

        <VStack spacing={-1}>
          <Text fontSize="22px" fontWeight="700" textAlign="center">
            WARD 43
          </Text>
          <Text textAlign="center" fontWeight="900" fontSize="32px">
            {voter?.["Epic No"] || "—"}
          </Text>
          <Text fontWeight="700" textAlign="center" fontSize="lg">
            (VOTER ID)
          </Text>
        </VStack>

        <Divider borderColor="black" />

        <Text fontSize="18px" fontWeight="700">
          VOTER NAME
        </Text>
        <Text fontWeight="800" fontSize="28px">
          {voter?.["Name(Hindi)"] || "—"}
        </Text>
        <Text mt={-2} fontSize="20px" fontWeight="600">
          {voter?.["Name(English)"] || ""}
        </Text>

        <Divider borderColor="black" />

        <Text fontSize="18px" fontWeight="700">
          RELATION NAME
        </Text>
        <Text fontWeight="800" fontSize="26px">
          {fatherHindi || "—"}
        </Text>
        <Text mt={-2} fontSize="20px" fontWeight="600">
          {fatherEnglish || ""}
        </Text>

        <Divider borderColor="black" />

        <HStack justify="space-between">
          <Box>
            <Text fontSize="18px" fontWeight="700">
              AGE
            </Text>
            <Text fontWeight="400" fontSize="22px">
              {voter?.Age || "—"}
            </Text>
          </Box>
          <Box textAlign="right">
            <Text fontSize="18px" fontWeight="700">
              GENDER
            </Text>
            <Text fontWeight="400" fontSize="22px">
              {voter?.Gender || "—"}
            </Text>
          </Box>
        </HStack>

        <Divider borderColor="black" />

        <Flex justify="space-between">
          <Box>
            <Text fontSize="18px" fontWeight="700">
              AC / PART / SR
            </Text>
            <Text fontWeight="800" fontSize="22px">
              {assemblyNo}/{partNo}/{serialNo}
            </Text>
          </Box>
          <Box>
            <Text fontSize="18px" fontWeight="700">
              BOOTH NO
            </Text>
            <Text fontWeight="800" fontSize="22px">
              {booth}
            </Text>
          </Box>
        </Flex>

        <Divider borderColor="black" />

        <VStack spacing={-2}>
          <Text fontSize="14px" fontWeight="700" textAlign="center">
            SERIAL NUMBER
          </Text>
          <Text
            textAlign="center"
            fontWeight="900"
            fontSize="36px"
            letterSpacing="2px"
          >
            {voter?.["Serial No"] || "—"}
          </Text>
        </VStack>

        <Divider borderColor="black" />

        <Text fontSize="16px" fontWeight="700">
          POLLING STATION
        </Text>
        <Text fontSize="18px" fontWeight="800">
          {location?.hindi || "—"}
        </Text>

        <Divider borderColor="black" />

        <Text fontSize="9px" textAlign="center" fontWeight="600">
          This output is computer generated and provided for voter information
          only.
        </Text>
      </VStack>
    </Box>
  );
}
