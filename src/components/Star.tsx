import { Flex } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";
interface StarProps {
  star: number;
}
const Star = ({ star }: StarProps) => {
  const starArr = [0, 0, 0, 0, 0];
  return (
    <Flex>
      {starArr.map((item, index) => {
        return (
          <StarIcon
            boxSize="3"
            mr="1"
            color={index < star ? "rate" : "grey.400"}
            key={index}
          />
        );
      })}
    </Flex>
  );
};

export default Star;
