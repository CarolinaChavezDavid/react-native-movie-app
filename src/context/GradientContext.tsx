import React, { createContext, useState } from "react";

interface ImagePosterColors {
    primary: string,
    secondary: string
}

interface ContextProps{
    colors: ImagePosterColors,
    prevColors: ImagePosterColors,
    setMainColors: (colors: ImagePosterColors) => void,
    setPrevMainColors: (colors: ImagePosterColors) => void
}

export const GradientContext = createContext({} as ContextProps);


export const GradientProvider = ({children}: any) => {
    const [colors, setcolors] = useState<ImagePosterColors>({
        primary: 'red',
        secondary: 'blue'
    })

    const [prevColors, setprevColors] = useState<ImagePosterColors>({
        primary: 'transparent',
        secondary: 'transparent'
    })

    const setMainColors = (colors: ImagePosterColors) => {
        setcolors(colors);
    }

    const setPrevMainColors = (colors: ImagePosterColors) => {
        setprevColors(colors)
    }

    return(
        <GradientContext.Provider value={{
            colors,
            prevColors,
            setMainColors,
            setPrevMainColors

        }} >
            {children}
        </GradientContext.Provider>
    )
}