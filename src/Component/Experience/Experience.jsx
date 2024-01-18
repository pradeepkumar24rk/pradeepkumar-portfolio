import { Timeline, Text} from "@mantine/core";
import "./Experience.css";
import { intenship } from "../../data";

const Experience = () => {
 

  return (
  <div className="Experience">
    <div className='head'>
            <h1 style={{textTransform:"uppercase"}}>Experience</h1>
        </div>
      <div className="Timeline">
        <Timeline active={1} color="green" bulletSize={24} lineWidth={3}>
          {intenship.map((data) => {
            return (
              <Timeline.Item >
                <Text color="white" size="xl" >
                  {data.title}
                </Text>
                <Text color="dimmed" size="md" align="justify"  pl={30}>
                  {data.desc}
                </Text>
                <Text size="xs" color="white" mt={4}>
                  {data.date}
                </Text>
              </Timeline.Item>
            );
          })}
        </Timeline>
      </div>
  </div>
  );
};

export default Experience;
