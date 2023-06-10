import {
  Box,
  Button,
  Flex,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import BabyChart from "../../../imgs/babychart.svg";
import React, { useEffect, useState } from "react";
import DescriptionProfile from "./DescriptionProfile";
import { ArraChartProfile } from "../../../dummydata/data";
import { Profile, UserId, User } from "../../../models/types";
import ModalEditExpectation from "./ModalEditExpectation";
import { useQuery } from "@apollo/client";
import { GET_EXPECTATION } from "../../../graphql/query/getExpectation";
import { ExpectationResponse } from "../../../models/interfaces";
interface Data {
  data: Profile | undefined;
  dataUser: string | undefined;
}
const Expectation = (props: Data) => {
  const userID = localStorage.getItem("userid");
  const { data: EXPECTATIONID } = useQuery<
    ExpectationResponse,
    UserId
  >(GET_EXPECTATION, {
    variables: {
      userId: props.dataUser
        ? props.dataUser
        : JSON.parse(`"${userID}"`),
    },
  });
  ArraChartProfile[0].chartTitle = `Age range: ${EXPECTATIONID?.getExpectation.Age} years old`;
  ArraChartProfile[1].chartTitle = `Characteristics: ${EXPECTATIONID?.getExpectation.Characteristics}`;
  ArraChartProfile[2].chartTitle = `Type: ${EXPECTATIONID?.getExpectation.Type}`;
  ArraChartProfile[3].chartTitle = `Paid: ${EXPECTATIONID?.getExpectation.Paid}$`;
  ArraChartProfile[4].chartTitle = `Distance: ${EXPECTATIONID?.getExpectation.Distance} km`;
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [idShowModal, setIdShowModal] = useState(
    ArraChartProfile[0].id,
  );
  const opentModal = (id: string) => {
    setIdShowModal(id);
  };
  return (
    <Box>
      <Flex justify="flex-end" mb="14">
        <Button onClick={onOpen} variant="editCharactic" mt="0">
          Edit characteristics
        </Button>
      </Flex>
      <ModalEditExpectation
        isOpen={isOpen}
        onClose={onClose}
        expectation={EXPECTATIONID?.getExpectation}
        dataUserId={props.dataUser}
      />
      <Box position="relative" w="fit-content" m="0 auto" mb="16">
        <Box
          w="96"
          h="96"
          bg="chart"
          margin="0 auto"
          clipPath="polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)"
        >
          <Flex align="center" justify="center" w="full" h="full">
            <Image src={BabyChart} />
          </Flex>
        </Box>
        {ArraChartProfile.map((item, index) => (
          <Box
            position="absolute"
            sx={item.backgroundBoxWrapper}
            key={item.id}
          >
            <Flex
              sx={item.backgroundFlex}
              border={
                idShowModal === item.id ? "1px solid #E3A5A8" : ""
              }
              borderRadius={idShowModal === item.id ? "full" : ""}
            >
              <Box
                onMouseEnter={() => opentModal(item.id)}
                w="4"
                h="4"
                bg="primary_color"
                borderRadius="full"
              ></Box>
            </Flex>
            <Text sx={item.backgroundText}>{item.chartHeading}</Text>
            {idShowModal === item.id && (
              <Box
                sx={item.backgroundBox}
                _before={item.backgroundBoxBefore}
              >
                {item.chartTitle}
              </Box>
            )}
          </Box>
        ))}
      </Box>
      <DescriptionProfile
        show={false}
        setShow={() => console.log("hello")}
        data={props.data?.Description}
      />
    </Box>
  );
};

export default Expectation;
