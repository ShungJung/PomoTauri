import numberToTimeString from "../utils/numberToTimeString";

type TimerDisplayProps = {
    time: number;
}

function TimerDisplay({ time }: TimerDisplayProps) {
    return (
        <h1 className="text-[10rem]">{numberToTimeString(time)}</h1>
    )
}

export default TimerDisplay