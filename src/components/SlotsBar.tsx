import { useState } from "react";
import Mode from "../types/Mode";
import Slot from "../types/Slot"

interface SlotsBarProps {
    slots: Slot[];
    currentSlot: number;
    mode: Mode;
    handleSlotChange: (index: number) => void;
    handleCreateSlot: (newSlot: Slot) => void;
    handleDeleteSlot: (index: number) => void;
}

function SlotsBar({ slots, currentSlot, mode, handleSlotChange, handleCreateSlot, handleDeleteSlot }: SlotsBarProps) {
    const [isCreating, setIsCreating] = useState(false)
    const [name, setName] = useState("")

    return (
        <div className="flex flex-row gap-5">
            {slots.map((slot, index) =>
                <div 
                    key={index}
                    className="relative"
                >
                    {mode == Mode.Edit
                        ?<button
                            className="
                                absolute
                                top-[-0.75rem]
                                right-[-0.25rem]
                            "
                            onClick={() => { handleDeleteSlot(index) }}
                        >
                            X
                        </button>
                        : null
                    }
                    <button
                        className={`
                            w-32
                            rounded
                            text-xl
                            ${index == currentSlot ? "bg-blue-200" : "bg-gray-200"}
                        `}
                        onClick={() => { handleSlotChange(index) }}
                    >
                        {slot.name}
                    </button>
                </div>
            )}
            {mode == Mode.Edit
                ?<button
                    className={`
                        w-32
                        rounded
                        text-xl
                        bg-purple-200
                    `}
                    onClick={() => {
                        setIsCreating(!isCreating)
                        handleCreateSlot
                    }}
                >
                    {isCreating
                        ? <input 
                            type="text" 
                            className="
                                w-28 h-6
                                rounded
                            "
                            value={name}
                            onChange={(e) => {setName(e.target.value)}}
                            onKeyDown={(e) => {
                                if (e.key === "Enter") {
                                    e.preventDefault()

                                    handleCreateSlot({name, time: 0})
                                    setIsCreating(false)
                                }
                            }}
                            autoFocus
                        />
                        : "+"
                    }
                </button>
                : null
            }
        </div>
    )
}

export default SlotsBar