import HipData from "../assets/data/Angles_Hip.csv";

import { csv, curveNatural } from "d3";

import styled from "styled-components";
import { useEffect, useState } from "react";
import { line } from "d3";


const VisContainer = styled.svg`
    width: 100%;
    height: 100vh;
    position: relative;

    & path {
        stroke: #CCCCCC;
        fill: none;
    }
`;




function rotate(cx: any, cy: any, x: any, y: any, angle: any) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}


const SensorDataLineGenerator = () => {

    let width = document.body.clientWidth;
    let height = document.body.clientHeight;

    let [sampleData, setSampleData] = useState<any>(null);

    useEffect(() => {

        csv(HipData, (d: any) => {

            return {
                time: +d.Time,
                anterior: +d['Anterior tilt'],
                lateral: +d['Lateral tilt'],
                rotation: +d['Rotation']
            }

        }).then((d) => {
            setSampleData(d);
        });

        return () => undefined;

    }, []);

    let pathD: any = "";
    if (sampleData) {

        let coordinates: any[] = [];

        const increment = 10;
        let x = width / 2;
        let y = height / 2;
        // let z = 0;

        for (let i = 0; i < sampleData.length; i++) {
            const { anterior, lateral, rotation } = sampleData[i];
            let xValue = anterior * increment;
            let yValue = lateral * increment;
            let zValue = rotation;

            const [nx, ny] = rotate(x, y, x + xValue, y + yValue, zValue);

            coordinates.push({ x: nx, y: ny });
        }

        const lineGenerator = line()
            .x((d: any) => d.x)
            .y((d: any) => d.y)
            .curve(curveNatural);

        pathD = lineGenerator(coordinates);

    }

    return (<>
        <VisContainer>
            <path d={pathD} />
        </VisContainer>

    </>
    );
}

export default SensorDataLineGenerator;