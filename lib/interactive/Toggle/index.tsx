import { useState } from "react";

type Props = {
    className?: string
}

export function Toggle({ className = '' }: Props) {
    /// Delete me 
    const [isToggled, setIsToggled] = useState<boolean>(false);

    return (
        <div className="self-center">
            <div
                className={`relative flex flex-row w-[125px] h-[50px] bg-gray-200 rounded-full ${className}`}
                onClick={() => setIsToggled(!isToggled)}
            >
                <div className={`absolute transition transition-all duration-300 ease-in-out self-center h-[50px] w-[50px] my-2 rounded-full ${isToggled ? 'bg-green-300 left-[5%]' : 'bg-red-300 right-[5%]'}`}></div>
            </div>
        </div>

    )
}