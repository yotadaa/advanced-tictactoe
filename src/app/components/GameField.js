'use client';

import '@/app/globals.css';
import { useEffect, useState } from "react"

export default function ({ player }) {
    const [field, setField] = useState(Array.from({ length: (player + 1) ** 2 }, (_, index) => ({
        index,
        hovered: false,
    })));

    const handleMouseEnter = (event, index) => {
        event.stopPropagation();
        setField((prevField) =>
            prevField.map((item, i) => (i === index ? { ...item, hovered: true } : item))
        );
    };

    const handleMouseLeave = () => {
        setField((prevField) => prevField.map((item) => ({ ...item, hovered: false })));
    };

    const [containerSize, setContainerSize] = useState(140 + (140 * player));
    const cubeSize = (containerSize / (player + 1));

    return (
        <div>
            the game has {player} players, the container size is {containerSize}, <br />
            and the cube size is about {cubeSize}
            <div id='container' className={`bg-yellow-300 rounded-3xl p-[10px]`}
                style={{
                    width: containerSize,
                    height: containerSize
                }}
            >
                <div className='bg-slate-800 w-full h-full rounded-2xl'>
                    <div className="relative grid-container w-full">
                        {field.map((item, index) => (
                            <div
                                key={index}
                                className={`bg-slate-800`}
                                style={{
                                    backgroundColor: item.hovered ? '#475569' : '#1E293B',
                                    width: cubeSize,
                                    height: cubeSize,
                                    borderTopLeftRadius: index === 0 ? '15%' : 0,
                                    borderTopRightRadius: index === player ? "15%" : 0,
                                    borderBottomRightRadius: index === ((player + 1) ** 2) - 1 ? "15%" : 0,
                                    borderBottomLeftRadius: index === ((player + 1) ** 2 - 1) - (player) ? '15%' : 0,
                                }}
                                onMouseEnter={(event) => handleMouseEnter(event, index)}
                                onMouseLeave={handleMouseLeave}
                            >
                                <img />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}