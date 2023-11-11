// // Icons
// const sunIcon = document.querySelector(".sun");
// const moonIcon = document.querySelector(".moon");

// // Theme Vars
// const userTheme = localStorage.getItem("theme");
// const systemTheme = window.matchMedia("(prefers-color-scheme: dark").matches;

// // Icon Toggling
// const iconToggle = () => {
//     moonIcon.classList.toggle("display-none");
//     sunIcon.classList.toggle("display-none");
// };
// // Initial Theme Check
// const themeCheck = () => {
//     if(userTheme === "dark" || (!userTheme && systemTheme)) {
//         document.documentElement.classList.add("dark");
//         moonIcon.classList.add("display-none");
//         return;
//     }
//     sunIcon.classList.add("display-none");
// };
// // Manual Theme Switch
// const themeSwitch = () => {
//     if(document.documentElement.classList.contains('dark')) {
//         document.documentElement.classList.remove("dark");
//         localStorage.setItem("theme", "light");
//         iconToggle();
//         return;
//     }
//     document.documentElement.classList.add("dark");
//     localStorage.setItem("theme", "dark");
//     iconToggle();
// };
// // Call theme switch on clicking buttons
// sunIcon.addEventListener("click", () => {
//     themeSwitch();
// });

// moonIcon.addEventListener("click", () => {
//     themeSwitch();
// });
// // Invoke theme check on intial load
// themeCheck();

// On page load or when changing themes, best to add inline in `head` to avoid FOUC
if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
    document.documentElement.classList.add('dark')
} else {
    document.documentElement.classList.remove('dark')
}
  
// Whenever the user explicitly chooses light mode
localStorage.theme = 'light'
  
// Whenever the user explicitly chooses dark mode
localStorage.theme = 'dark'
  
// Whenever the user explicitly chooses to respect the OS preference
localStorage.removeItem('theme')

import { useState } from "react";

enum Theme {
    Light,
    Dark
}

const App = () => {
    const [theme,setTheme] = useState<Theme>(Theme.Light);

    const options =[
        {
            iconPath:"sun",
            text:'light'
        },
        {
            iconPath: "moon",
            text: "dark",
        },
    ];
    
    return(
        <section className="min-h-screen pt-8 dark:text-gray-100 dark:bg-slate-900 duration-100">
            <div className="max-w-3xl mx-auto px-5">
                {options.map((opt) => (
                    <button 
                        key={opt.text} 
                        className="w-8 h-8 leading-9 text-xl rounded-full m-1 text-sky-600"
                        onClick={() => {
                            if (opt.text == "light") {
                                setTheme(Theme.Light)
                            } else if (opt.text == "dark") {
                                setTheme(Theme.Dark)
                            }
                        }}
                    >
                        <img src={opt.iconPath} alt={opt.text}/>
                    </button>
                ))}
            </div>
        </section>
    )
}

export default App;