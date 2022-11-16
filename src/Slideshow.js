import Carousel from 'react-bootstrap/Carousel'

function Slideshow(){
    return(
        <Carousel>
            <Carousel.Item>
                <img src="./images/1c472c933b13d3d5258a5311c2756b4c.jpg"/>
                <Carousel.Caption>
                    <h3>Test</h3>
                    <p>Hello world</p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <Carousel.Caption>
                    <h3>Test2</h3>
                    <p>Hello world</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default Slideshow;