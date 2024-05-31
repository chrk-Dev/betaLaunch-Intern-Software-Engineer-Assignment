"use client"
import { useState } from "react"
import VectorStyle from "../assets/Vector.svg"
import CloseIcon from "../assets/Close.svg"






export default function WelcomeBaner() {

    const [isOpen, setisOpen] = useState(true)



    const closeBanner=()=>{
        setisOpen(false)
    }

    return (
        
        isOpen && 
                <div className="flex  gap-5 justify-between px-4 mx-6 mt-6 bg-white rounded-lg border border-gray-300 border-solid max-md:flex-wrap max-md:mr-2.5">
                    <div className="flex flex-col my-auto max-md:max-w-full">
                        <div className="text-2xl font-semibold tracking-tight leading-8 text-black max-md:max-w-full">
                            Welcome back, John Doe
                        </div>
                        <div className="mt-3.5 text-sm leading-6 text-pink-700  max-md:max-w-full">
                            <span className="text-neutral-500">
                                The end of the year is coming. Are you planning your performance
                                interviews? You can do this super efficiently with Acmy.
                            </span>
                            <br />
                            <a target="_blank" href="https://www.betalaunch.io/" className="text-pink-700 underline"> Look here for more information</a>
                           
                        </div>
                    </div>
                    <img

                        loading="lazy"
                        src={VectorStyle.src}
                        className="shrink-0 max-w-full aspect-[1.37] w-[167px]"
                    />
                    <a onClick={closeBanner}>
                    <img
                        loading="lazy"
                        src={CloseIcon.src}
                        className="shrink-0 self-start mt-4 w-6 aspect-square"
                    />
                    </a>
                </div>
               

        )
        
    
}