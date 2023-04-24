import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
interface StarProps {
  star: number;
}
const Star = ({ star }: StarProps) => {
  return (
    <Flex>
      {Array(star)
        .fill(null)
        .map((item, index) => (
          <StarIcon boxSize="3" mr="1" color="rate" key={index} />
        ))}
      {Array(5 - star)
        .fill(null)
        .map((item, index) => (
          <StarIcon boxSize="3" mr="1" color="grey.400" key={index} />
        ))}
    </Flex>
  );
};

export default Star;
