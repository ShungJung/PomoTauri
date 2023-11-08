type StatusSetterProps = {
    started: boolean;
    handleStartChange: () => void
}

function StatusSetter({ started, handleStartChange }: StatusSetterProps) {
    return (
        <div>
            <button
                className={`
                    w-48
                    rounded
                    text-3xl
                    ${started ? "bg-red-200" : "bg-green-200"}
                `}
                onClick={handleStartChange}
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