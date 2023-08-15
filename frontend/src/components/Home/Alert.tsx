import React from "react";
import { Alert as AlertContainer, AlertIcon } from "@chakra-ui/react";

const Alert: React.FC = () => {
  return (
    <AlertContainer status="error" rounded="md">
      <AlertIcon />
      No data yet or an error occurred
    </AlertContainer>
  );
};

export default Alert;
