import Slot from "../types/Slot"

type SlotsBarProps = {
    slots: Slot[];
    currentSlot: number;
    handleSlotChange: (index: number) => void;
}

function SlotsBar({ slots, currentSlot, handleSlotChange }: SlotsBarProps) {
    return (
        <div className="flex flex-row gap-5">
            {slots.map((slot, index) =>
                <button
                    key={index}
                    className={`
                        w-32
                        rounded
                        text-xl
                        ${index == currentSlot ? "bg-blue-200" : "bg-gray-200"}
                    `}
                    onClick={() => handleSlotChange(index)}
                >
                    {slot.name}
                </button>
            )}
        </div>
    )
}

export default SlotsBar