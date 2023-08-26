import { Carousel } from '@mantine/carousel';

function Demo() {
  return (
    <Carousel
      withIndicators
      height={200}
      slideSize="33.333333%"
      slideGap="md"
      loop
      align="start"
      breakpoints={[
        { maxWidth: 'md', slideSize: '50%' },
        { maxWidth: 'sm', slideSize: '100%', slideGap: 0 },
      ]}
    >
      <Carousel.Slide><div style={{color:"red",display:"flex",justifyContent:"center"}}>adsfasdf</div></Carousel.Slide>
      <Carousel.Slide><div style={{color:"red"}}>adsfasdf</div></Carousel.Slide>
      <Carousel.Slide><div style={{color:"red"}}>adsfasdf</div></Carousel.Slide>
      {/* ...other slides */}
    </Carousel>
  );
}

export default Demo;