import editIcon from "/icons/edit.svg";
import cancelIcon from "/icons/cancel.svg";
import Mode from "../types/Mode";

interface EditButtonProps {
    mode: Mode;
    handleModeChange: () => void;
}

function EditButton({mode, handleModeChange}: EditButtonProps) {
    return (
        <button onClick={handleModeChange}>
            {mode == Mode.Display
                ? <img
                    src={editIcon}
                    className="w-10 h-10"
                    alt="Edit"
                />
                : <img
                    src={cancelIcon}
                    className="w-10 h-10"
                    alt="Cancel"
                />
            }
        </button>
    )
}

export default EditButton