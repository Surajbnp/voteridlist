// Card.jsx
import { Box, Text, VStack, Badge, Stack } from "@chakra-ui/react";

const locationMap = {
  "16/1": "उर्दू दिनी मकतब इमारत सरिया कर्बला बैंक रोड (कमरा सं० 1)",
  "16/2": "उर्दू दिनी मकतब इमारत सरिया कर्बला बैंक रोड (कमरा सं० 2)",
  "16/3": "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 1)",
  "16/4": "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 2)",
  "16/5": "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 3)",
  "16/6": "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 1)",
  "16/7": "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 2)",
  "16/8": "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 3)",
  "16/9": "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 4)",
  "16/10": "राजकीय उर्दू प्राथमिक विद्यालय पत्थरकुदवा (कमरा सं० 1)",
  "16/11": "राजकीय हिन्दी प्राथमिक विद्यालय पत्थरकुदवा (कमरा सं० 2)",
  "16/12": "राजकीय हिन्दी मध्य विद्यालय चर्च रोड",
  "16/13": "सामुदायिक भवन पत्थरकुदवा (कमरा सं० 1)",
  "16/14": "सामुदायिक भवन पत्थरकुदवा (कमरा सं० 2)",
  "16/15": "वाई०एम०सी०ए० पत्थरकुदवा (कमरा सं० 1)",
  "16/16": "वाई०एम०सी०ए० पत्थरकुदवा (कमरा सं० 2)",
  "16/17": "राजकीय हिन्दी प्राथमिक विद्यालय पत्थरकुदवा (कमरा सं० 1)",
  "16/18": "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 5)",
  "16/852": "राँची नगर निगम वार्ड ऑफिस, चर्च रोड, कर्बला चौक (कमरा सं० 4)",
  "16/853": "राजकीय मध्य विद्यालय चर्च रोड हिन्दी/उर्दू (कमरा सं० 6)",
};

export default function VoterCard({ voter }) {
  const location = locationMap[voter?.sectionNo] || "Location not found";

  return (
    <Box
      id="print-card"
      p={{ base: 3, sm: 4 }}
      border="1px dashed"
      borderColor="gray.400"
      borderRadius="md"
      bg="white"
      color="black"
      w={{ base: "100%", sm: "300px" }}   // full width on mobile, 300px for print
      maxW="320px"
      fontSize={{ base: "sm", sm: "sm" }}
      lineHeight="1.4"
      mx="auto"                           // center on larger screens
    >
      {/* Location */}
      <Text
        fontSize="xs"
        fontWeight="semibold"
        mb={2}
        noOfLines={{ base: 3, sm: 2 }}     // clamp long location on small screens
      >
        📍 {location}
      </Text>

      <VStack align="stretch" spacing={1}>
        <InfoRow label="EPIC" value={voter?.epicNo} />
        <InfoRow label="Name" value={voter?.name || voter?.nameHi} />
        <InfoRow label="Parent" value={voter?.parentName || voter?.parentNameHi} />
        {voter?.age && <InfoRow label="Age" value={voter.age} />}
        <InfoRow label="Gender" value={voter?.gender} />
        {voter?.serialNo && <InfoRow label="Serial" value={voter.serialNo} />}
      </VStack>

      <Stack mt={2} align="flex-start">
        <Badge
          colorScheme="purple"
          fontSize="xs"
          px={2}
          py={1}
          borderRadius="sm"
        >
          Section No: {voter?.sectionNo || "—"}
        </Badge>
      </Stack>
    </Box>
  );
}

/* Small reusable row for responsive layout */
function InfoRow({ label, value }) {
  return (
    <Text fontSize="sm">
      <b>{label}:</b>{" "}
      <Text as="span" wordBreak="break-word">
        {value || "—"}
      </Text>
    </Text>
  );
}
