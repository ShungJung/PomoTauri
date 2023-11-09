import Mode from "../types/Mode";

interface StatusSetterProps {
    started: boolean;
    mode: Mode;
    handleStartChange: () => void
}

function StatusSetter({ started, mode, handleStartChange }: StatusSetterProps) {
    return (
        <div>
            <button
                className={`
                    w-48
                    rounded
                    text-3xl
                    ${started ? "bg-red-200" : "bg-green-200"}

                    disabled:opacity-50
                `}
                onClick={handleStartChange}
                disabled={mode == Mode.Edit}
            >
                {started
                    ? "Stop"
                    : "Start"
                }
            </button>
        </div>
    )
}

export default StatusSetter