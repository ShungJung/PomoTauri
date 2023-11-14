import sunIcon from "/icons/sun.svg";
import moonIcon from "/icons/moon.svg";
import Mode from "../types/Mode";

interface EditButtonProps {
    mode:Mode;
    handleModeChange: () => void;
}

function DarkModeButton({mode, handleModeChange}: EditButtonProps)
{
    return (
        <button onClick={handleModeChange}>
            {mode == Mode.Display
                ? <img src={sunIcon} className="w-10 h-10" alt="Bright"/>
                :<img src={moonIcon} className="w-10h-10" alt="Dark" />
            }
        </button>
    )
}

export default DarkModeButton