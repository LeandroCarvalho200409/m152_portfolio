import Carousel from 'react-bootstrap/Carousel'
import './slideshow.css'



function Slideshow() {
    return (
        <div className='slideshowContainer'>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/peter-werkman-QNOWmmOi4es-unsplash.jpg"
                        alt="First slide"
                        id='image1'
                        onClick={event => document.getElementById('image1').requestFullscreen({ navigationUI: "show" })}
                    />
                    <Carousel.Caption>
                        <h3>Die Umweltverschmutzung ist ein riesiges Problem</h3>
                        <p>Wie es höchstwahrscheinlich für alle bekannt ist, ist die Umweltverschmutzung ein riesiges globales Problem, welches durch uns Menschen verursacht wird.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100 image"
                        src=""
                        alt="Second slide"
                        id='image2'
                        onClick={event => document.getElementById('image2').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Second slide label</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="holder.js/800x400?text=Third slide&bg=20232a"
                        alt="Third slide"
                        id="image3"
                        onClick={event => document.getElementById('image3').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Produktion der Elektrofahrzeuge</h3>
                        <p>
                            Die Problematik mit den Elektrofahrzeugen fängt schon beim Moment an, wo diese produziert werden und aus der Fabrik kommen. Schon ab diesem Punkt sind sie umweltschädlicher als ein gewöhnliches verbrenner Auto.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/lenny-kuhne-jHZ70nRk7Ns-unsplash.jpg"
                        alt="Third slide"
                        id='image4'
                        onClick={event => document.getElementById('image4').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Produktion der Elektrofahrzeuge</h3>
                        <p>
                            Die Problematik mit den Elektrofahrzeugen fängt schon beim Moment an, wo diese produziert werden und aus der Fabrik kommen. Schon ab diesem Punkt sind sie umweltschädlicher als ein gewöhnliches verbrenner Auto.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/alexander-schimmeck-cFPTHl6s5uY-unsplash(1).jpg"
                        alt="Third slide"
                        id="image5"
                        onClick={event => document.getElementById('image5').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Extrahierung von Lithium für die Batterien</h3>
                        <p>
                            Bei der Extrahierung von Lithium für die Produktion von Batterien für die Elektrofahrzeuge entstehen sehr viele schäden auf die Umwelt und für die Umgebung rundherum.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/elizabeth-jamieson-pzu6AsXbg5c-unsplash.jpg"
                        alt="Third slide"
                        id="image6"
                        onClick={event => document.getElementById('image6').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Elektromobilität in der Aviatik unwahrscheinlich</h3>
                        <p>
                            Ausserdem kann die Elektromobilität zwar für Autos problemlos eingesetzt werde, jedoch ist es in der Aviatik unwahrscheinlich, dass man in näher Zukunft alle Flugzeuge elektrifizieren kann.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/william-william-NndKt2kF1L4-unsplash.jpg"
                        alt="Third slide"
                        id="image7"
                        onClick={event => document.getElementById('image7').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Elektrifizierte Schifffahrt</h3>
                        <p>
                            Nicht nur in der Aviatik wird die Elektrifizierung beinahe unmöglich sein, sondern auch in der Schifffahrt, vor allem was den Gütertransport anbelangt, wird diese Änderung sehr unwahrscheinlich sein.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src=""
                        alt="Third slide"
                        id="image8"
                        onClick={event => document.getElementById('image8').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Elektrische LKWs</h3>
                        <p>
                            Obwohl viele Anbieter bereits elektrisch Betriebene LKWs anbieten, haben diese meistens nicht die gleiche Reichweite, wie ein normaler LKW
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/josh-berquist-pjxe3p4u5aI-unsplash.jpg"
                        alt="Third slide"
                        id="image9"
                        onClick={event => document.getElementById('image9').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>E-fuels als eine ideale Lösung</h3>
                        <p>
                            Um diese Problematik, aber auch andere zu lösen, arbeitet momentan der Autohersteller Porsche zusammen mit Bosch zusammen an der Entwicklung von E-Fuels. E-Fuels werden produziert, indem man anhand dem extrahiertem CO2 aus der Luft neue Kraftstoffe erstellen kann, und somit werden unsere Emissionen gewissermassen recycelt.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/guillaume-perigois-0NRkVddA2fw-unsplash.jpg"
                        alt="Third slide"
                        id="image10"
                        onClick={event => document.getElementById('image10').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Die Politiker weigern sich andere Technologien anzuwenden</h3>
                        <p>
                            Die Politiker aus dieser Welt weigern sich jedoch solche Technologien, wie die E-Fuels anzuwenden. Dies ist so, da die Politik viel in die Entwicklung der Elektromobilität investiert haben. In der EU soll ab 2035 der Verkauf von Neuwagen, welche durch fossile Kraftstoffe betrieben werden, verboten werden.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/Captura de ecrã 2022-11-30 161542.png"
                        alt="Third slide"
                        id="image11"
                        onClick={event => document.getElementById('image11').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Die Stromproblematik</h3>
                        <p>
                            Zurzeit erleben wir in Europa eine Stromkrise. Wenn wir schon jetzt eine Stromkrise erleben. Wie soll es dann sein, wenn jede Person, welche zurzeit ein fossilbetriebenes Fahrzeug besitzt, ein Elektrofahrzeug kauft? Dann wird diese Problematik umso schlimmer. Ebenfalls ist unsere Stromquelle nicht ganz emissionsfrei, sodass man so während des Betriebs eines Elektroautos weiterhin CO2 ausstösst.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/heri-mulyana-MPzKDTtoWHU-unsplash.jpg"
                        alt="Third slide"
                        id="image12"
                        onClick={event => document.getElementById('image12').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Ärmere Personen & Familien</h3>
                        <p>
                            Die Elektroautos sind im Vergleich zu den normalen Autos deutlich teurer und im Occasionsmarkt ist der Angebot solcher Autos noch recht klein. Ausserdem ist die Unterhaltung solcher Fahrzeuge im Falle einer Reparatur viel teurer. Werden deshalb Personen, welche in schlechteren Verhältnissen leben auf ein eigenes Auto verzichten müssen, obwohl dieser für viele Personen nahezu unabgingbar ist, nur, weil sie sich dies einfach nicht leisten können?
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/20221204_112557.jpg"
                        alt="Third slide"
                        id="image13"
                        onClick={event => document.getElementById('image13').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Längere Strecken</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/"
                        alt="Third slide"
                        id="image14"
                        onClick={event => document.getElementById('image14').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Fifth slide label</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src="%PUBLIC_URL%/images/20221204_112454.jpg"
                        alt="Third slide"
                        id="image15"
                        onClick={event => document.getElementById('image15').requestFullscreen()}
                    />

                    <Carousel.Caption>
                        <h3>Akkus von Elektroautos gehen schnell kaputt und müssen daher ersetzt werden</h3>
                        <p>
                            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                        </p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
}

export default Slideshow;