import sunIcon from "/icons/sun.svg";
import moonIcon from "/icons/moon.svg";

import Theme from "../types/Theme";

interface DarkModeButtonProps {
    theme: Theme;
    handleThemeChange: () => void;
}

function DarkModeButton({theme, handleThemeChange}: DarkModeButtonProps)
{
    return (
        <button onClick={handleThemeChange}>
            {theme == Theme.Light
                ? <img src={sunIcon} className="w-10 h-10" alt="Bright"/>
                : <img src={moonIcon} className="w-10h-10" alt="Dark" />
            }
        </button>
    )
}

export default DarkModeButton