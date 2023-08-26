import { Button, Card, Group, Image, Text } from "@mantine/core";
import React from "react";
import { AiFillGithub } from "react-icons/ai";
import { FaPager } from "react-icons/fa";

const Projects = (props) => {
  return (
    <Card shadow="sm" padding="lg" radius="md" withBorder w={350} bg={"#302E2E"}>
      <Card.Section>
        <Image src={props.img} height={180} alt="Norway" />
      </Card.Section>

      <Group position="apart" mt="md" mb="xs">
        <Text weight={500} color="#2fe27a">{props.name}</Text>
      </Group>
      <Group h={150}>
      
      <Text size="sm" color="dimmed">
        {props.describe}
      </Text>
      </Group>

      <Group grow>
        <Button
            component="a"
          variant="light"
          color="green"
          mt="md"
          radius="md"
          href={props.link}
        >
          <AiFillGithub />
        </Button>
        <Button
          variant="light"
          color="green"
          mt="md"
          radius="md"
        >   
          <FaPager />
        </Button>
      </Group>
    </Card>
  );
};

export default Projects;
