import HipData from "../assets/data/Angles_Hip.csv";

import { csv } from "d3";

import styled from "styled-components";
import { useRef, useEffect, useState } from "react";

// import p5 from "p5";
const p5 = (window as any).p5;


const VisContainer = styled.div`
    width: 100%;
    height: 100vh;
    position: relative;


`;






function rotate(cx: any, cy: any, x: any, y: any, angle: any) {
    var radians = (Math.PI / 180) * angle,
        cos = Math.cos(radians),
        sin = Math.sin(radians),
        nx = (cos * (x - cx)) + (sin * (y - cy)) + cx,
        ny = (cos * (y - cy)) - (sin * (x - cx)) + cy;
    return [nx, ny];
}


const SketchInstance = (sampleData: any) => (sketch: any) => {

    let width = document.body.clientWidth;
    let height = document.body.clientHeight;

    let startIndex = 0;
    let endIndex = sampleData.length - 1;
    let index = startIndex;


    let x = width / 2;
    let y = height / 2;
    // let z = 0;
    let increment = 20;

    setInterval(() => {

        // if (index < sampleData.length - 1) {
        // if (index < 500) {
        //     index += 1;
        // } else {
        //     // index = 0;
        //     index = 500;
        // }

        if (index < endIndex) {
            index += 1;
        } else {
            // index = 0;
            index = endIndex;
        }

    }, 1);



    sketch.setup = () => {
        sketch.createCanvas(width, height);
        // sketch.debugMode();
        sketch.frameRate(30);
        sketch.fill("#ffffff");
        // sketch.rotateZ(0.01);

    };

    sketch.draw = () => {
        sketch.background("#ffffff");
        // let axis = [1, 1, 0];
        // sketch.rotate(0.1, axis);
        // console.log("d", sampleData[index]);
        // const { anterior, lateral, rotation, time } = sampleData[index];
        // let xValue = anterior * increment;
        // let yValue = lateral * increment;
        // sketch.scale(1);
        sketch.stroke("#CCCCCC");
        sketch.strokeWeight(1);
        sketch.noFill();
        sketch.beginShape();

        // let x = width / 2;
        // let y = height / 2;

        for (let i = startIndex; i <= index; i++) {
            const { anterior, lateral, rotation } = sampleData[i];
            let xValue = anterior * increment;
            let yValue = lateral * increment;
            let zValue = rotation;

            const [nx, ny] = rotate(x, y, x + xValue, y + yValue, zValue);
            sketch.curveVertex(nx, ny);

            // sketch.push();
            // sketch.rotate(zValue);
            // sketch.curveVertex(x + xValue, y + yValue);
            // sketch.pop();

            // console.log(x + xValue, y + yValue, z + zValue);

            // x += xValue;
            // y += yValue;
            // sketch.curveVertex(x, y);
            // sketch.curveVertex(x + xValue, y + yValue);
        }
        // sketch.ellipse(x + xValue, y + yValue, 10, 10);

        sketch.endShape();

        const { anterior, lateral } = sampleData[index];
        let xValue = anterior * increment;
        let yValue = lateral * increment;
        sketch.fill("#CCCCCC");
        sketch.noStroke();
        sketch.ellipse(x + xValue, y + yValue, 10, 10);


    }



}

const SensorDataTest = () => {

    let [sampleData, setSampleData] = useState<any>(null);


    const p5ContainerRef = useRef(null);

    useEffect(() => {

        if (p5ContainerRef && p5ContainerRef.current && sampleData) {
            // On component creation, instantiate a p5 object with the sketch and container reference 
            const p5Instance = new p5(SketchInstance(sampleData), p5ContainerRef.current);


            // On component destruction, delete the p5 instance
            return () => {
                p5Instance.remove();
            }

        }
    }, [p5ContainerRef, sampleData]);

    // useEffect(() => {

    //     if(sampleData) {
    //         const dataIndexInterval = setInterval(() => {

    //             setDataIndex((current: number) => {

    //                 if(current < sampleData.length - 1) {
    //                     return current + 1;
    //                 } else {
    //                     return 0;
    //                 }

    //             })
    //         }, 50);

    //         return () => clearInterval(dataIndexInterval);

    //     }

    // }, [sampleData]);


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

    // console.log(sampleData)


    return (<>
        <VisContainer ref={p5ContainerRef} >
        </VisContainer>

    </>
    );
}

export default SensorDataTest;