// Card.jsx
import {
  Box,
  Text,
  VStack,
  Badge,
  Stack,
  HStack,
  Divider,
} from "@chakra-ui/react";

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
  const sectionNo = voter?.["AC "]?.[" Part "]?.[" SR"];
  const location =
    locationMap[voter?.Location || sectionNo] || "Location not found";

  const fatherHindi = cleanPrefix(voter?.["Father's "]?.[" Husband's Name"]);
  const fatherEnglish = cleanPrefix(
    voter?.["Father's "]?.[" Husband's Name (Hindi)"],
  );

  return (
    <Box
      id="print-card"
      p={4}
      border="1px solid"
      borderColor="gray.300"
      borderRadius="lg"
      bg="white"
      color="black"
      w={{ base: "100%", sm: "320px" }}
      maxW="360px"
      mx="auto"
      boxShadow="sm"
    >
      {/* Ward Mitra Header (Poster style like ref image) */}
      <Box
        mb={3}
        p={3}
        border="1px solid"
        borderColor="gray.700"
        borderRadius="md"
        textAlign="center"
        bg="white"
      >
        <Box display="flex" alignItems={"center"} justifyContent={"center"}>
          <img
            width={"100px"}
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1770890010/logoward_ckymld.webp"
          />
        </Box>

        <Divider my={1} borderColor="gray.500" />

        <HStack
          align={"center"}
          justify={"space-between"}
          spacing={1}
          textAlign={"start"}
        >
          <Text fontSize="14px" color="gray.700" fontWeight={600}>
            चुनाव चिन्ह:
            <span
              style={{
                fontSize: "22px",
              }}
            >
              <Text>Baby Walker</Text>
            </span>
          </Text>

          <Text
            textAlign={"end"}
            fontSize="14px"
            color="gray.700"
            fontWeight={600}
          >
            क्रम संख्या:{" "}
            <span
              style={{
                fontSize: "22px",
              }}
            >
              <Box
                display="flex"
                alignItems={"center"}
                justifyContent={"center"}
                border="1px solid"
                borderColor="white"
                px={2}
                py={1}
                w={"40px"}
                h={"40px"}
                borderRadius="7px"
                fontWeight={700}
                bg={"black"}
                color={"white"}
                ml={4}
              >
                2
              </Box>
            </span>
          </Text>
        </HStack>

        {/* Symbol */}
        <Box
          my={3}
          display="flex"
          alignItems={"center"}
          justifyContent={"space-between"}
          gap={6}
        >
          <img
            width={"100px"}
            src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1770890388/CHUNAOCINHA_jmibxp.webp"
          />
          <Box
            border="2px solid black"
            w="100px"
            h="100px"
            overflow="hidden"
            borderRadius="md"
          >
            <img
              src="https://res.cloudinary.com/dddnxiqpq/image/upload/v1770890369/PIC_zxl5pf.webp"
              alt=""
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
                transform: "scale(1.2)",
                transformOrigin: "top center",
              }}
            />
          </Box>
        </Box>

        <Box bg="black" color="white" borderRadius={4}>
          <Text
            letterSpacing={1.4}
            fontSize={"22px"}
            fontWeight={800}
            textTransform={"uppercase"}
          >
            नाज़िमा रज़ा{" "}
          </Text>
        </Box>

        <Divider my={2} borderColor="gray.500" />

        <Text textTransform={'uppercase'} fontSize="sm" fontWeight="bold">
          Fir Ek Baar, Dil Se Aabhar
        </Text>
      </Box>

      <HStack align="center" my={4}>
        <Divider borderColor="gray.500" />
        <Text
          fontSize="2xs"
          color="gray.600"
          whiteSpace="nowrap"
          px={2}
          display="flex"
          alignItems="center"
          gap={1}
        >
          ✂️ TEAR HERE FOR BOOTH – यहाँ से फाड़ें
        </Text>
        <Divider borderColor="gray.500" />
      </HStack>

      {/* Header */}
      <VStack spacing={1} mb={2}>
        <Text fontWeight="bold" fontSize="lg" color="blue.700">
          {voter?.["Epic No"]}
        </Text>
        <Text fontSize="xs" color="gray.600">
          (Voter ID / EPIC No.)
        </Text>
      </VStack>

      {/* <Divider my={2} /> */}

      {/* Rows like official app */}
      <VStack
        align="stretch"
        spacing={2}
        border={"2px dotted #b8b8b8"}
        borderRadius={"8px"}
        p={2}
      >
        <Row label="Name">
          <Text fontWeight="semibold">{voter?.["Name(English)"] || "—"}</Text>
          <Text fontSize="xs" color="gray.600">
            {voter?.["Name(Hindi)"] || ""}
          </Text>
        </Row>

        <Row label="Parent / Spouse">
          <Text>{fatherEnglish || "—"}</Text>
          <Text fontSize="xs" color="gray.600">
            {fatherHindi || ""}
          </Text>
        </Row>

        <TwoCol label="Age" value={voter?.["Age"]} />
        <TwoCol label="Gender" value={voter?.["Gender"]} />
      </VStack>

      <Divider my={3} />

      <VStack
        align="stretch"
        spacing={2}
        border={"2px dotted #b8b8b8"}
        borderRadius={"8px"}
        p={2}
      >
        <Row label="Assembly Constituency">
          <Text fontSize="xs" color="gray.600">
            {"63 - Ranchi"}
          </Text>
        </Row>

        <Row label="AC Part No.">
          <Text fontSize="xs">{"227"}</Text>
        </Row>
        <Row label="AC Serial No.">
          <Text fontSize="xs">{"172"}</Text>
        </Row>
      </VStack>

      <Divider my={3} />

      {/* Footer */}
      <Text textAlign={"start"} fontWeight={600} fontSize={"14px"}>
        Serial No. {voter?.["SR No"] || "61/1"}
      </Text>
      {/* Footer */}
      <Text textAlign={"start"} fontWeight={600} fontSize={"14px"}>
        Polling Station -
      </Text>

      <Text textAlign={"start"} fontSize="xs" color="gray.700" noOfLines={3}>
        {location?.hindi} <br /> {location?.english}
      </Text>

      <Divider my={2} />
      <Text textAlign={"center"} my={0} fontWeight={600} fontSize={"14px"}>
        Disclaimer
      </Text>
      <Text
        fontWeight={600}
        textAlign={"center"}
        fontSize="8px"
        color="gray.600"
      >
        This output is computer genreated and is provided only for the
        information to the voter. This should not be used for any legal or
        official purposes.
      </Text>
    </Box>
  );
}

function TwoCol({ label, value }) {
  return (
    <HStack align="flex-start" justify="space-between">
      <Text fontSize="sm" color="gray.700">
        {label}
      </Text>
      <Text fontSize="sm" fontWeight="semibold" textAlign="right">
        {value || "—"}
      </Text>
    </HStack>
  );
}

function Row({ label, children }) {
  return (
    <HStack align="flex-start" justify="space-between">
      <Text fontSize="sm" color="gray.700" minW="110px">
        {label}
      </Text>
      <Box textAlign="right">{children}</Box>
    </HStack>
  );
}
