import { useState } from "react";
import Mode from "../types/Mode";
import numberToTimeString from "../utils/numberToTimeString";

interface TimerDisplayProps {
    time: number;
    mode: Mode;
    handleUpdateSlot: (updatedTime: number) => void;
}

function TimerDisplay({ time, mode, handleUpdateSlot }: TimerDisplayProps) {
    const [updatedTime, setUpdatedTime] = useState(time.toString())

    return (
        <>
            {mode == Mode.Edit
                ? <input 
                    type="text"
                    className="
                        w-1/2
                        text-[10rem] text-center
                    "
                    value={updatedTime}
                    onChange={(e) => {setUpdatedTime(e.target.value)}}
                    onKeyDown={(e) => {
                        if (e.key === "Enter") {
                            e.preventDefault()
                            
                            handleUpdateSlot(parseInt(updatedTime))
                        }
                    }}
                    autoFocus
                />
                : <h1 className="
                    w-1/3
                    text-[10rem] text-center
                ">
                    {numberToTimeString(time)}
                </h1>
            }
        </>
    )
}

export default TimerDisplay