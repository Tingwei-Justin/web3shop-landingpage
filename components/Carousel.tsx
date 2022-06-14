import Image from 'next/image';
import React, { useState, useRef, useEffect, useCallback } from 'react'
import tw from 'twin.macro';
//your images
const nfts = [
    {
        name: "ZOOO Club",
        id: "6066",
        imageURI: "/tiger.png",
        info: "Sold for 6.66ETH/22,666 USD",
        soldTime: "6 hour ago"
    },
    {
        name: "ZOOO Club",
        id: "6666",
        imageURI: "/bear.png",
        info: "Sold for 6.66ETH/22,666 USD",
        soldTime: "6 hour ago"
    },
    {
        name: "ZOOO Club",
        id: "6006",
        imageURI: "/wolf.png",
        info: "Sold for 6.66ETH/22,666 USD",
        soldTime: "6 hour ago"
    },
    {
        name: "ZOOO Club",
        id: "6067",
        imageURI: "/tiger.png",
        info: "Sold for 6.66ETH/22,666 USD",
        soldTime: "6 hour ago"
    },
    {
        name: "ZOOO Club",
        id: "6667",
        imageURI: "/bear.png",
        info: "Sold for 6.66ETH/22,666 USD",
        soldTime: "6 hour ago"
    },
    {
        name: "ZOOO Club",
        id: "6007",
        imageURI: "/wolf.png",
        info: "Sold for 6.66ETH/22,666 USD",
        soldTime: "6 hour ago"
    },
    // {
    //     name: "ZOOO Club",
    //     id: "1",
    //     imageURI: "/demo/1.png",
    //     info: "Sold for 6.66ETH/22,666 USD",
    //     soldTime: "6 hour ago"
    // },
    // {
    //     name: "ZOOO Club",
    //     id: "2",
    //     imageURI: "/demo/2.png",
    //     info: "Sold for 6.66ETH/22,666 USD",
    //     soldTime: "6 hour ago"
    // },
    // {
    //     name: "ZOOO Club",
    //     id: "3",
    //     imageURI: "/demo/3.png",
    //     info: "Sold for 6.66ETH/22,666 USD",
    //     soldTime: "6 hour ago"
    // }
]

function Carousel() {
    const len = nfts.length;
    // console.log(len);
    const [activeIndex, setActive] = useState(0);



    useEffect(() => {
        const interval = setInterval(() => setActive(x => (x + 1) % len), 5000);
        return () => {
            clearInterval(interval);
        };
    }, []);

    // useEffect(() => {
    //     console.log(activeIndex);
    // }, [activeIndex]);

    const goLast = () => {
        setActive(x => getLast(x))
    }

    const goNext = () => {
        setActive(x => getNext(x))
    }


    const getLast = (index) => {
        if (index === 0) {
            return len - 1;
        } else {
            return index - 1;
        }
    }

    const getNext = (index) => {
        if (index === len - 1) {
            return 0;
        } else {
            return index + 1;
        }
    }

    return (
        <div className="my-8 w-full mt-20">
            <div className="flex justify-around gap-3 md:gap-8 items-center">
                <div
                    className="p-2 md:p-6 scale-75 hover:(cursor-pointer)"
                    style={{ backgroundColor: "#897ea7" }}
                >
                    <Image
                        alt="Mountains"
                        src={nfts[getLast(activeIndex)].imageURI}
                        layout="intrinsic"
                        width={350}
                        height={350}
                    />
                    <div className='mt-6 relative'>
                        <div className="absolute right-2">
                            <Image
                                alt="hand"
                                src="/hand.png"
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>{`${nfts[getLast(activeIndex)].name}`}</div>
                        {/* <div>{nfts[getLast(activeIndex)].info}</div>
                        <div>{nfts[getLast(activeIndex)].soldTime}</div> */}
                    </div>
                </div>
                <div
                    tw="p-2 md:p-6  hover:(cursor-pointer shadow-[0px 1px 5px 3px rgba(255, 255, 255, 0.5)])"
                    style={{ backgroundColor: "#96c8dc", border: "2px solid #FFFFFF" }}
                >
                    <Image
                        alt="Mountains"
                        src={nfts[activeIndex].imageURI}
                        layout="intrinsic"
                        width={350}
                        height={350}
                    />
                    {/* <img  src={nft.imageURI}/> */}
                    <div className='mt-6 relative'>
                        <div className="absolute right-2">
                            <Image
                                alt="hand"
                                src="/hand.png"
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>{`${nfts[activeIndex].name}`}</div>
                        {/* <div>{nfts[activeIndex].info}</div>
                        <div>{nfts[activeIndex].soldTime}</div> */}
                    </div>
                </div>
                <div
                    className="p-2 md:p-6 scale-75 hover:(cursor-pointer)"
                    style={{ backgroundColor: "#e2c0c4" }}
                >
                    <Image
                        alt="Mountains"
                        src={nfts[getNext(activeIndex)].imageURI}
                        layout="intrinsic"
                        width={350}
                        height={350}
                    />

                    <div className='mt-6 relative'>
                        <div className="absolute right-2">
                            <Image
                                alt="hand"
                                src="/hand.png"
                                layout="fixed"
                                width={20}
                                height={20}
                            />
                        </div>
                        <div>{`${nfts[getNext(activeIndex)].name}`}</div>
                        {/* <div>{nfts[getNext(activeIndex)].info}</div>
                        <div>{nfts[getNext(activeIndex)].soldTime}</div> */}
                    </div>
                </div>
            </div>

            <div className="rects mt-10">
                <div className='px-10 hover:cursor-pointer' onClick={goLast}>
                    <img src="/right.svg" alt="right-arrow" />
                </div>

                {/* <span tw="px-4">&#10229;</span> */}
                {nfts.map((value, index) => (
                    <div
                        key={index}
                        className={activeIndex === index ? "rect active" : "rect"}
                        onClick={() => setActive(index)}
                    />
                ))}

                <div className='px-10 hover:cursor-pointer' onClick={goNext}>
                    <img src="/left.svg" alt="left-arrow" />
                </div>


                {/* <span tw="px-4">&#x27F6;</span> */}
            </div>
        </div>
    );
}

export default Carousel