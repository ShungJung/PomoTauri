import { useEffect, useState } from "react";
import { isPermissionGranted, requestPermission, sendNotification } from '@tauri-apps/api/notification';

// import clockIcon from "/icons/clock.svg";
// import slotsIcon from "/icons/slots.svg";
// import heartIcon from "/icons/heart.svg";

import Slot from "./types/Slot";
import TimerDisplay from "./components/TimerDisplay";
import SlotsBar from "./components/SlotsBar";
import StatusSetter from "./components/StatusSetter";

function App() {
  const [slots, setSlots] = useState<Slot[]>([
    { name: "Work", time: 25 },
    { name: "Rest", time: 5 },
  ]);
  const [currentSlot, setCurrentSlot] = useState(0)
  const [intervalID, setIntervalID] = useState(0)
  const [time, setTime] = useState(0)

  const [started, setStarted] = useState(false)

  // TODO CRUD slots.
  // TODO Add sounds to notification.
  // TODO Save settings in storage.
  // TODO Add eslint.
  // TODO Have Fun :).

  useEffect(() => {
    setSlots([
      { name: "Work", time: 25 },
      { name: "Rest", time: 5 },
    ])
    setTime(slots[currentSlot].time)
  }, [])


  async function Notify(message: string) {
    let permissionGranted = await isPermissionGranted();

    if (!permissionGranted) {
      const permission = await requestPermission();
      permissionGranted = permission === 'granted';
    }

    if (permissionGranted) {
      sendNotification(message);
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

              Notify(slots[newCurrentSlot].name)
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

  function handleSlotChange(index: number) {
    setCurrentSlot(index)
    setTime(slots[index].time)
  }

  return (
    <>
      <SlotsBar
        slots={slots}
        currentSlot={currentSlot}
        handleSlotChange={handleSlotChange}
      />

      <TimerDisplay time={time} />

      <StatusSetter
        started={started}
        handleStartChange={handleStartChange}
      />

      {/* <div className="
        flex flex-row gap-3
        text-3xl
      ">
        <button>
          <img 
            src={slotsIcon}
            alt="Slots Settings" 
            className="w-8 h-8"
          />
        </button>
        <button>
          <img 
            src={clockIcon}
            alt="Clock Settings" 
            className="w-8 h-8"
          />
        </button>
        <img 
          src={heartIcon}
          alt="Cool Heart" 
          className="w-8 h-8"
        />
      </div> */}
      <div></div>
    </>
  )
}

export default App
