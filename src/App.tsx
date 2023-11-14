import { useState } from "react";

import Slot from "./types/Slot";
import Mode from "./types/Mode";
import Theme from "./types/Theme";

import TimerDisplay from "./components/TimerDisplay";
import SlotsBar from "./components/SlotsBar";
import StatusSetter from "./components/StatusSetter";
import EditButton from "./components/EditButton";
import DarkModeButton from "./components/DarkModeButton";

import notify from "./utils/notify";

function App() {
    const [slots, setSlots] = useState<Slot[]>([
        { name: "Work", time: 69 },
        { name: "Rest", time: 5 },
    ]);
    
    const [currentSlot, setCurrentSlot] = useState(0)
    const [intervalID, setIntervalID] = useState<NodeJS.Timeout>()
    const [time, setTime] = useState(slots[currentSlot].time)
    const [started, setStarted] = useState(false)
    const [mode, setMode] = useState<Mode>(Mode.Display)
    const [theme, setTheme] = useState<Theme>(Theme.Light)

    function handleModeChange() {
        if (mode == Mode.Display) {
            setMode(Mode.Edit)
            clearInterval(intervalID)
            setStarted(false)
            setTime(slots[currentSlot].time)
        } else {
            setMode(Mode.Display)
        }
    }

    function handleThemeChange() {
        if (theme == Theme.Dark) {
            setTheme(Theme.Light)
        } else {
            setTheme(Theme.Dark)
        }
    }

    function handleStartChange() {
        if (!started) {
            const id = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime == 0) {
                        setCurrentSlot(prevCurrentSlot => {
                            let newCurrentSlot = prevCurrentSlot + 1

                            if (prevCurrentSlot == slots.length - 1) {
                                newCurrentSlot = 0
                            }

                            void notify(slots[newCurrentSlot].name)
                            setTime(slots[newCurrentSlot].time)

                            return newCurrentSlot
                        })
                    }
                    return prevTime - 1
                })
            }, 1000)

            setIntervalID(id)
        } else {
            clearInterval(intervalID)
        }

        setStarted(!started)
    }

    function handleReset() {
        clearInterval(intervalID)
        setTime(slots[currentSlot].time)
        setStarted(false)
    }

    function handleSlotChange(index: number) {
        setCurrentSlot(index)
        clearInterval(intervalID)
        setStarted(false)
        setTime(slots[index].time)
    }

    function handleCreateSlot(newSlot: Slot) {
        const slotsArray = [...slots]

        slotsArray.push(newSlot)

        setSlots(slotsArray)
    }

    function handleUpdateSlot(updatedTime: number) {
        const slotsArray = [...slots]

        slotsArray[currentSlot].time = updatedTime

        setSlots(slotsArray)
    }

    function handleDeleteSlot(index: number) {
        const slotsArray = [...slots]

        if (slotsArray.length > 1) {
            slotsArray.splice(index, 1)
            setSlots(slotsArray)
        }

        if (index == currentSlot) {
            setCurrentSlot(0)
            clearInterval(intervalID)
            setStarted(false)
            setTime(slotsArray[0].time)
        }
    }

    return (
        <>
            <div className="flex flex-row gap-10">
                <EditButton
                    mode={mode}
                    handleModeChange={handleModeChange}
                />

                <DarkModeButton 
                    theme={theme}
                    handleThemeChange={handleThemeChange}
                />
            </div>

            <SlotsBar
                slots={slots}
                currentSlot={currentSlot}
                mode={mode}
                handleSlotChange={handleSlotChange}
                handleCreateSlot={handleCreateSlot}
                handleDeleteSlot={handleDeleteSlot}
            />

            <TimerDisplay
                time={time}
                mode={mode}
                handleUpdateSlot={handleUpdateSlot}
            />

            <StatusSetter
                started={started}
                mode={mode}
                handleStartChange={handleStartChange}
                handleReset={handleReset}
            />
        </>

    )

}

export default App
