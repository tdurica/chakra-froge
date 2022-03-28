/*eslint-disable*/
import React from "react";
import { Flex, Link, List, ListItem, Text } from "@chakra-ui/react";
import PropTypes from "prop-types";
import { NavLink } from 'react-router-dom';

export default function AppFooter(props) {
  // const linkTeal = useColorModeValue("green.400", "red.200");=
  return (
    <Flex id='AppFooter'
      flexDirection="column"
      alignItems="center"
      justifyContent="space-between"
      px="20px"
      opacity='0.8'
    >
      <List display="flex"
            my={{ base: "10px", xl: "15px" }}
      >
        <ListItem me={{ base: "20px", md: "44px", }}>
          <Text color="gray.400">
            &copy; {1900 + new Date().getYear()},{" "}
            <Link
              as={NavLink}
              color="green.300"
              to="../"
              target="_parent"
            >
              {"Ribbit"}
            </Link>
          </Text>

        </ListItem>
        <ListItem me={{ base: "20px", md: "44px", }}>
          <Link href="https://froge.fi"
            target="_blank"
            color="gray.400">
            {"Back to Home"}
          </Link>
        </ListItem>
        <ListItem me={{ base: "20px", md: "44px", }}>
          <Link color="gray.400"
            target="_blank"
            href="https://froge.fi">
            {"Support"}
          </Link>
        </ListItem>
      </List>
    </Flex>
  );
}
