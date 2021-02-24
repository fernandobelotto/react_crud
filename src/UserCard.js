
import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import { Box, Button, Text, useTheme } from "@chakra-ui/react";
import MotionBox from './MotionBox'

export default function UserCard({ user, removeObjectById }) {
  const theme = useTheme();

  const { red, gray, white } = theme.colors;
  const variants = {
    hidden: { opacity: 0.5 },
    visible: { opacity: 0.9 },
  }
 
  return (
    <MotionBox
      w="100%"
      p="10px"
      m="10px"
      borderWidth="1px"
      borderRadius="lg"
      overflow="auto"
      bg={gray[500]}
      flexDirection="row"
      display="flex"
      justifyContent="space-between"
      animate={{ scale: 1.05, y: -5, boxShadow: theme.shadows.xl}}
      transition={{ ease: "easeOut", duration: 0.2 }}
    >
      <Box>
        <Text color={gray[300]}>Name</Text>
        <Text color={white} fontWeight="semibold" fontSize={20}>
          {user.name}
        </Text>
        <Text color={gray[300]}>Email</Text>
        <Text color={white} fontWeight="semibold" fontSize={20}>
          {user.email}
        </Text>
      </Box>

      <Box display="flex" flexDirection="column" justifyContent="space-around">
        <Button
          color={white}
          leftIcon={<DeleteIcon />}
          bg={red[500]}
          onClick={() => removeObjectById(user.id)}
        >
          Delete
        </Button>
        <Button leftIcon={<EditIcon />}>Edit</Button>
      </Box>
    </MotionBox>
  );
}