import Mode from "../types/Mode";

interface StatusSetterProps {
    started: boolean;
    mode: Mode;
    handleStartChange: () => void;
    handleReset: () => void;
}

function StatusSetter({ started, mode, handleStartChange, handleReset }: StatusSetterProps) {
    return (
        <div className="flex flex-row gap-8">
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
                    ? "Pause"
                    : "Start"
                }
            </button>
            {started
                ? <button
                    className={`
                        w-48
                        rounded
                        text-3xl
                        bg-yellow-200

                        disabled:opacity-50
                    `}
                    onClick={handleReset}
                    disabled={mode == Mode.Edit}
                >
                    Reset
                </button>
                : null
            }
        </div>
    )
}

export default StatusSetter