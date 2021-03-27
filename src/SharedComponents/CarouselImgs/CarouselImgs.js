import { Carousel } from 'react-bootstrap';
export default function CarouselImgs(props) {
    //Pictures are 2560 * 1440
  return (
    <Carousel>
        {props.pictures.map(imgObj=>(
            <Carousel.Item key={imgObj.alt}>
            <img
              className='d-block w-100'
              src={imgObj.img}
              alt={imgObj.alt}
            />
          </Carousel.Item>
        ))}
     
    </Carousel>
  );
}
