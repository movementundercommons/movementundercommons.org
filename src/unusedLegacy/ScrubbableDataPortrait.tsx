import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import ValDrummingSpriteSheet1 from "../assets/graphics/spritesheets/valdrumming.png";
import ValDrummingSpriteSheet2 from "../assets/graphics/spritesheets/valdrumming2.png";



/* val drumming:


spritesheet 1 has 100 sprites, each 800x800
starting file: /Users/stevengbraun/Desktop/Projects/Data Portraits/Video Edits/Val Drumming Frames/Sequence 01036.jpg
ending file: /Users/stevengbraun/Desktop/Projects/Data Portraits/Video Edits/Val Drumming Frames/Sequence 01135.jpg

spritesheet 2 has 100sprites
start: /Users/stevengbraun/Desktop/Projects/Data Portraits/Video Edits/Val Drumming Frames/Sequence 01136.jpg
end: /Users/stevengbraun/Desktop/Projects/Data Portraits/Video Edits/Val Drumming Frames/Sequence 01235.jpg

*/

const ScrubbableDataPortraitContainer = styled.div`
    width: 100%;
    max-width: 500px;
    aspect-ratio: 1 / 1;

    padding: 5px;
    border-left: 1px dashed #3e3e3e;
    border-right: 1px dashed #3e3e3e;

    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;

    & img {
        display: none;
    }

    & canvas {
        width: 100%;
        border-radius: 5px;
            box-shadow: 0px 0px 25px 15px rgb(162, 162, 162);

    }
`;

const spriteSize = 800; // val drumming
const nCols = 10; // val drumming
// const nRows = 10; // val drumming
const nSprites = 100; // val drumming

const ScrubbableDataPortrait = () => {


    const useImage = ValDrummingSpriteSheet1;

    const useImages = [ValDrummingSpriteSheet1, ValDrummingSpriteSheet2];


    let [imageStatus, setImageStatus] = useState(useImages.map((img, index) => {

        return { img, index, ready: false };

    }))

    let [ctx, setCtx] = useState<any>(null);


    let [imageIndex, setImageIndex] = useState(0);
    let [mouseX, setMouseX] = useState(0);
    let [containerWidth, setContainerWidth] = useState(undefined);

    let canvasRef = useRef<any>(null);
    let imageRef = useRef<any>(null);
    let imageRef2 = useRef<any>(null);

    let containerRef = useRef<any>(null);




    // const SpriteSheetImage = new Image();
    // SpriteSheetImage.src = useImage;
    // SpriteSheetImage.onload = () => {

    //     setImageReady(true);

    // }



    useEffect(() => {


        if (containerWidth && containerRef && containerRef.current) {

            let { left } = containerRef.current.getBoundingClientRect();

            const increment = containerWidth / (nSprites * 2);

            let newImageIndex = Math.floor((mouseX - left) / increment);
            if (newImageIndex != imageIndex) setImageIndex(newImageIndex);
        }


    }, [mouseX]);

    useEffect(() => {

        if (canvasRef && canvasRef.current) {

            // canvasRef.current.width = spriteSize;
            // canvasRef.current.height = spriteSize;

            setCtx(canvasRef.current.getContext("2d"));
        }

    }, [canvasRef]);


    useEffect(() => {

        if (containerRef && containerRef.current) {

            let { width } = containerRef.current.getBoundingClientRect();

            setContainerWidth(width);


        }
    }, [containerRef]);

    useEffect(() => {


        if (containerWidth) {
            canvasRef.current.width = containerWidth;
            canvasRef.current.height = containerWidth;

        }

    }, [containerWidth]);


    useEffect(() => {

        let useImageNumber = Math.floor(imageIndex / 100);

        let isReady = imageStatus && imageStatus.find(({ index }) => index == useImageNumber)!.ready;

        console.log("uu", useImageNumber, isReady);
        if (isReady) {

            let useRef;
            if (useImageNumber == 0) {
                useRef = imageRef;
            } else {
                useRef = imageRef2;

            }
            if (ctx && useRef && useRef.current) {
                let offsetIndex = imageIndex - (useImageNumber * 100);
                let mappedIndex = offsetIndex % nCols;

                let sx = mappedIndex * spriteSize;
                let sy = (offsetIndex / nCols > 0 ? Math.floor(offsetIndex / nCols) : 0) * spriteSize;
                ctx.drawImage(useRef.current, sx, sy, spriteSize, spriteSize, 0, 0, containerWidth, containerWidth);

            }

        }

        // if (imageIndex < 100) {

        //     if (ctx && imageReady && imageRef && imageRef.current) {
        //         let mappedIndex = imageIndex % nCols;

        //         let sx = mappedIndex * spriteSize;
        //         let sy = (imageIndex / nCols > 0 ? Math.floor(imageIndex / nCols) : 0) * spriteSize;
        //         ctx.drawImage(imageRef.current, sx, sy, spriteSize, spriteSize, 0, 0, containerWidth, containerWidth);

        //     }

        // } else {

        //     if (ctx && imageReady2 && imageRef2 && imageRef2.current) {
        //         let offsetIndex = imageIndex - 100;
        //         let mappedIndex = offsetIndex % nCols;

        //         let sx = mappedIndex * spriteSize;
        //         let sy = (offsetIndex / nCols > 0 ? Math.floor(offsetIndex / nCols) : 0) * spriteSize;
        //         ctx.drawImage(imageRef2.current, sx, sy, spriteSize, spriteSize, 0, 0, containerWidth, containerWidth);

        //     }

        // }

    }, [imageIndex]);




    // if (ctx && imageReady == true) {

    //     if (imageRef && imageRef.current) {

    //         let index = imageIndex;
    //         let mappedIndex = index % nCols;

    //         let sx = mappedIndex * spriteSize;
    //         let sy = (index / nCols > 0 ? Math.floor(index / nCols) : 0) * spriteSize;
    //         ctx.drawImage(imageRef.current, sx, sy, spriteSize, spriteSize, 0, 0, spriteSize, spriteSize);


    //     }
    // }


    const handleMouseMove = (e: any) => {
        // console.log("ee", e.clientX);
        setMouseX(e.clientX);
    }



    const handleImageReady = (imageIndex: number) => {

        setImageStatus((current: any[]): any => {

            let updated = current.map((c) => {

                if (c.index == imageIndex) {
                    return {
                        ...c,
                        ready: true
                    }
                } else {

                    return c;

                }

            });

            return updated;
        })

    }

    return <ScrubbableDataPortraitContainer ref={containerRef} onMouseMove={(e) => handleMouseMove(e)}>
        <img src={useImage} onLoad={() => handleImageReady(0)} ref={imageRef} />
        <img src={ValDrummingSpriteSheet2} onLoad={() => handleImageReady(1)} ref={imageRef2} />
        <canvas ref={canvasRef}>

        </canvas>

    </ScrubbableDataPortraitContainer>
}

export default ScrubbableDataPortrait;