import { useForm } from "react-hook-form";
import {
  Box,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Heading,
} from "@chakra-ui/react";
import { motion } from "framer-motion"

import { useCallback, useEffect, useState } from "react";
import useCRUD from "./hooks/useCrud";
import UserCard from "./UserCard";

export default function App() {
  const initialState = [
    { id: "1234", name: "Fernando", email: "fernandobosco@gmail.com" },
    { id: "1234", name: "Maria", email: "fernandobosco@gmail.com" },
    { id: "1234", name: "Jurandir", email: "fernandobosco@gmail.com" },
    { id: "1234", name: "Thiago", email: "fernandobosco@gmail.com" },
    { id: "1234", name: "Gabi", email: "fernandobosco@gmail.com" },
    { id: "1234", name: "Laura", email: "fernandobosco@gmail.com" },
  ];
  // const getUsers = useCallback(() => {
  //   return ;
  // }, []);

  // const [users, setUsers] = useState([]);

  const {
    list,
    removeObjectById,
    editObjectById,
    getObjectById,
    addObject,
  } = useCRUD(initialState);

  // useEffect(() => {
  //   setUsers(getUsers());
  // }, [getUsers]);

  const { register, handleSubmit, watch, errors } = useForm();
  const onSubmit = (data) => addObject(data);

  return (
    <>
      <Container centerContent>
        <Box display="flex" h="80vh" alignItems="center">
          <Box maxW="xl">
            <Heading>Simple React CRUD</Heading>
            <form onSubmit={handleSubmit(onSubmit)}>
              <FormControl mt="20px" id="name">
                <FormLabel>Complete name</FormLabel>
                <Input
                  type="name"
                  name="name"
                  ref={register({ required: true })}
                />
              </FormControl>
              <FormControl id="email">
                <FormLabel>Email address</FormLabel>
                <Input
                  type="email"
                  name="email"
                  ref={register({ required: true })}
                />
              </FormControl>
              <Button type="submit" mt="10px" colorScheme="blue">
                Create
              </Button>
            </form>
          </Box>
        </Box>
        {list.map((item) => (
          <UserCard
            user={item}
            removeObjectById={removeObjectById}
            editObjectById={editObjectById}
          />
        ))}
      </Container>
    </>
  );
}

