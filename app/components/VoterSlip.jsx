// Card.jsx (Thermal Slip - Clean Voter Only)
import { Box, Text, VStack, HStack, Divider, Flex } from "@chakra-ui/react";

const locationMap = {
  "16/1": {
    hindi: "उर्दू दिनी मकतब इमारत सरिया कर्बला बैंक रोड (कमरा सं० 1)",
    english: "URDU DINI MAKTAB IMARAT SARIYA KARBALA BANK ROAD (ROOM NO. 1)",
  },
  "16/2": {
    hindi: "उर्दू दिनी मकतब इमारत सरिया कर्बला बैंक रोड (कमरा सं० 2)",
    english: "URDU DINI MAKTAB IMARAT SARIYA KARBALA BANK ROAD (ROOM NO. 2)",
  },
  "16/3": {
    hindi: "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 1)",
    english:
      "RANCHI MUNICIPALITY WARD OFFICE, CHURCH ROAD, KARBALA CHOWK (ROOM NO. 1)",
  },
  "16/4": {
    hindi: "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 2)",
    english:
      "RANCHI MUNICIPALITY WARD OFFICE, CHURCH ROAD, KARBALA CHOWK (ROOM NO. 2)",
  },
  "16/5": {
    hindi: "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 3)",
    english:
      "RANCHI MUNICIPALITY WARD OFFICE, CHURCH ROAD, KARBALA CHOWK (ROOM NO. 3)",
  },
  "16/6": {
    hindi: "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 1)",
    english: "RAJAKIYA MIDDLE SCHOOL CHURCH ROAD HINDI/URDU (ROOM NO. 1)",
  },
  "16/7": {
    hindi: "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 2)",
    english: "RAJAKIYA MIDDLE SCHOOL CHURCH ROAD HINDI/URDU (ROOM NO. 2)",
  },
  "16/8": {
    hindi: "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 3)",
    english: "RAJAKIYA MIDDLE SCHOOL CHURCH ROAD HINDI/URDU (ROOM NO. 3)",
  },
  "16/9": {
    hindi: "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 4)",
    english: "RAJAKIYA MIDDLE SCHOOL CHURCH ROAD HINDI/URDU (ROOM NO. 4)",
  },
  "16/10": {
    hindi: "राजकीय उर्दू प्राथमिक विद्यालय पत्थरकुदवा (कमरा सं० 1)",
    english: "RAJAKIYA URDU PRIMARY SCHOOL PATTHERKUDWA (ROOM NO. 1)",
  },
  "16/11": {
    hindi: "राजकीय हिन्दी प्राथमिक विद्यालय पत्थरकुदवा (कमरा सं० 2)",
    english: "RAJAKIYA HINDI PRIMARY SCHOOL PATTHERKUDWA (ROOM NO. 2)",
  },
  "16/12": {
    hindi: "राजकीय हिन्दी मध्य विद्यालय चर्च रोड",
    english: "RAJAKIYA HINDI MIDDLE SCHOOL CHURCH ROAD",
  },
  "16/13": {
    hindi: "सामुदायिक भवन पत्थरकुदवा (कमरा सं० 1)",
    english: "COMMUNITY BUILDING PATTHERKUDWA (ROOM NO. 1)",
  },
  "16/14": {
    hindi: "सामुदायिक भवन पत्थरकुदवा (कमरा सं० 2)",
    english: "COMMUNITY BUILDING PATTHERKUDWA (ROOM NO. 2)",
  },
  "16/15": {
    hindi: "वाई०एम०सी०ए० पत्थरकुदवा (कमरा सं० 1)",
    english: "W.M.C.A. PATTHERKUDWA (ROOM NO. 1)",
  },
  "16/16": {
    hindi: "वाई०एम०सी०ए० पत्थरकुदवा (कमरा सं० 2)",
    english: "W.M.C.A. PATTHERKUDWA (ROOM NO.2)",
  },
  "16/17": {
    hindi: "राजकीय हिन्दी प्राथमिक विद्यालय पत्थरकुदवा (कमरा सं० 1)",
    english: "RAJAKIYA HINDI PRIMARY SCHOOL PATTHERKUDWA (ROOM NO. 1)",
  },
  "16/18": {
    hindi: "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 5)",
    english: "RAJAKIYA MIDDLE SCHOOL CHURCH ROAD HINDI/URDU (ROOM NO. 5)",
  },
  "16/852": {
    hindi: "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 4)",
    english:
      "RANCHI MUNICIPALITY WARD OFFICE, CHURCH ROAD, KARBALA CHOWK (ROOM NO. 4)",
  },
  "16/853": {
    hindi: "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 6)",
    english: "RAJAKIYA MIDDLE SCHOOL CHURCH ROAD HINDI/URDU (ROOM NO. 6)",
  },
};

const cleanPrefix = (str = "") => str.replace(/^\((H|F)\)\s*/i, "").trim();

export default function VoterCard({ voter }) {
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
      lineHeight="1.6"
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
            WARD 16
          </Text>
          <Text textAlign="center" fontWeight="900" fontSize="32px">
            {voter?.["Epic No"] || "—"}
          </Text>
          <Text fontWeight={700} textAlign={"center"} fontSize={"xl"}>
            {"(VOTER ID)"}
          </Text>
        </VStack>

        <Divider borderColor="black" />

        <Text fontSize="18px" fontWeight="700">
          VOTER NAME
        </Text>
        <Text fontWeight="800" fontSize="32px">
          {voter?.["Name(Hindi)"] || "—"}
        </Text>
        <Text mt={-4} fontSize="24px" fontWeight="600">
          {voter?.["Name(English)"] || ""}
        </Text>

        <Divider borderColor="black" />

        <Text fontSize="18px" fontWeight="700">
          RELATION NAME
        </Text>
        <Text fontWeight="800" fontSize="32px">
          {fatherHindi || "—"}
        </Text>
        <Text mt={-4} fontSize="24px" fontWeight="600">
          {fatherEnglish || ""}
        </Text>

        <Divider borderColor="black" />

        <HStack justify="space-between">
          <Box>
            <Text fontSize="22px" fontWeight="700">
              AGE
            </Text>
            <Text fontWeight="400" fontSize="26px">
              {voter?.Age || "—"}
            </Text>
          </Box>
          <Box textAlign="right">
            <Text fontSize="22px" fontWeight="700">
              GENDER
            </Text>
            <Text fontWeight="400" fontSize="26px">
              {voter?.Gender || "—"}
            </Text>
          </Box>
        </HStack>

        <Divider borderColor="black" />

        <Flex justify="space-between">
          <Box>
            <Text fontSize="22px" fontWeight="700">
              AC / PART / SR
            </Text>
            <Text fontWeight="800" fontSize="28px">
              {assemblyNo}/{partNo}/{serialNo}
            </Text>
          </Box>
          <Box>
            <Text fontSize="22px" fontWeight="700">
              BOOTH NO
            </Text>
            <Text fontWeight="800" fontSize="28px">
              {booth}
            </Text>
          </Box>
        </Flex>

        <Divider borderColor="black" />

        <VStack spacing={-2}>
          <Text fontSize="16px" fontWeight="700" textAlign="center">
            SERIAL NUMBER
          </Text>
          <Text
            textAlign="center"
            fontWeight="900"
            fontSize="42px" // ⬅️ bigger serial number
            letterSpacing="3px"
          >
            {voter?.["Serial No"] || "—"}
          </Text>
        </VStack>

        <Divider borderColor="black" />

        <Text fontSize="18px" fontWeight="700">
          POLLING STATION
        </Text>
        <Text fontSize="22px" fontWeight="800">
          {location?.hindi || "—"}
        </Text>
        {/* <Text fontSize="12px" fontWeight="600">
          {location?.english || ""}
        </Text> */}

        <Divider borderColor="black" />

        <Text fontSize="9px" textAlign="center" fontWeight="600">
          This output is computer generated and provided for voter information
          only.
        </Text>
      </VStack>
    </Box>
  );
}
