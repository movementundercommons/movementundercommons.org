import styled from "styled-components";
import Sensor1Annotation from "../assets/img/sensor-stills/sensor-still-1-annotation@144x.png";
import Sensor1Original from "../assets/img/sensor-stills/sensor-still-1-original@144x.png";
import Sensor2Annotation from "../assets/img/sensor-stills/sensor-still-2-annotation@144x.png";
import Sensor2Original from "../assets/img/sensor-stills/sensor-still-2-original@144x.png";
import Sensor3Annotation from "../assets/img/sensor-stills/sensor-still-3-annotation@144x.png";
import Sensor3Original from "../assets/img/sensor-stills/sensor-still-3-original@144x.png";
import Sensor4Annotation from "../assets/img/sensor-stills/sensor-still-4-annotation@144x.png";
import Sensor4Original from "../assets/img/sensor-stills/sensor-still-4-original@144x.png";
import { useEffect, useState } from "react";
import { breakpoint } from "../constants";

const SensorFrameContainer = styled.div`
    flex: 1;
    margin: 0px;
    margin-top: 50px;
    width: 100%;
    max-width: 600px;
    aspect-ratio: 1.45;
    position: relative;
    box-shadow: 0px 0px 25px 15px rgb(162, 162, 162);
    border-radius: 4px;
    overflow: hidden;

    @media ${breakpoint.laptop} {
        margin-top: 0px;
    }
`;

const SensorFrame = styled.img`

    width: 100%;
    object-fit: cover;
    position: absolute;
    top: 0;
    left: 0;
    background: #000000;
    opacity: 0;


    &.enter {
        opacity: 1;
        transition: opacity 0.5s;
    }


    &.exit {
        opacity: 0;
        transition: opacity 0.5s 0.25s;
    }

    &.exit:last-child {
        transition: unset;
    }

`;



export enum WhichSensorStill {
    Sensor1 = "Sensor1",
    Sensor2 = "Sensor2",
    Sensor3 = "Sensor3",
    Sensor4 = "Sensor4"
}



const sensorImages = [
    Sensor1Annotation,
    Sensor1Original,
    Sensor2Annotation,
    Sensor2Original,
    Sensor3Annotation,
    Sensor3Original,
    Sensor4Annotation,
    Sensor4Original
]

const SensorAnnotation = () => {

    let [frameIndex, setFrameIndex] = useState<number>(0);

    useEffect(() => {

        const frameInterval = setInterval(() => {

            setFrameIndex((currentFrameIndex: number) => {

                if (currentFrameIndex < sensorImages.length - 1) {
                    return currentFrameIndex + 1;
                } else {
                    return 0;
                }
            });

        }, 1500);

        return () => clearInterval(frameInterval);

    })


    return <SensorFrameContainer>
        {sensorImages.map((image: any, index: number) => {

            let className;
            if (index == frameIndex) {
                className = "enter";
            } else if (frameIndex == 0 && index == sensorImages.length - 1) {
                className = "exit";
            } else if (index == frameIndex - 1) {
                className = "exit";
            } else {
                className = "";
            }

            return <SensorFrame key={`sensor_image_${index}`} className={className} src={image} />
        })}
    </SensorFrameContainer>

}

export default SensorAnnotation;