import { heading3, textLarge } from "@/foundation/styles"
import { ReactNode } from "react"
import { RiArrowDownSLine } from "react-icons/ri"
import { Drawer } from "../../Drawer"

type TimelineIconProps = {
    icon: ReactNode
}

export const TimelineIcon = ({ icon }: TimelineIconProps) => {
    return (
        <div className="flex flex-row justify-center items-center aspect-square w-16 rounded-full bg-white-smoke">
            <span className={`${heading3} !text-licorice-900`}>{icon}</span>
        </div>
    )
}

type TimelineItemProps = {
    title: ReactNode
    description: ReactNode
}

export const TimelineItem = ({
    title,
    description
}: TimelineItemProps) => {
    return (
        <Drawer
            classNames={{
                container: `bg-chestnut-500 rounded-xl`,
                drawerFaceContainer: ` bg-mikado-yellow-500 rounded-md rounded-xl text-left p-4`,
                drawerContentContainer: ``
            }}
            drawerFace={
                <div className={`flex flex-row`}>
                    <div className="flex flex-col flex-1">
                        <h2 className={`${heading3} !text-licorice-900`}>{title}</h2>
                    </div>
                    <RiArrowDownSLine className={`text-[3rem] transition-transform self-center `} />
                </div>}
            drawerContent={
                <div className={`${textLarge} flex flex-row bg-chestnut-500 p-4 rounded-b-md`}>
                    {description}
                </div>}
        />
    )
}