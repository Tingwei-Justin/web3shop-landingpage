import React from 'react'
import times from "lodash/times";
import Marquee from "react-marquee-slider";
import Image from 'next/image';

interface Props {
    direction?: "rtl" | "ltr",
    size?: number,
}

function DemoSlider({ direction = "rtl", size = 200 }: Props) {
    return (
        <div tw="flex flex-col justify-center">
            <Marquee
                velocity={20}
                scatterRandomly={false}
                direction={direction}
                resetAfterTries={100}
                onInit={() => {
                    return;
                }}
                onFinish={() => {
                    return;
                }}
            >
                {/* <div tw="flex gap-4"> */}
                {times(26, Number).map((id) => (
                    <div className="px-4" key={id}>
                        <Image
                            className="rounded-lg"
                            alt="demo-image"
                            src={`/demo/${id + 1}.png`}
                            layout="intrinsic"
                            width={size}
                            height={size}
                        />
                    </div>

                ))}
            </Marquee>
        </div>
    )
}

export default DemoSlider