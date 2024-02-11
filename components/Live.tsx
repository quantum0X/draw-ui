import { useMyPresence, useOthers } from "@/liveblocks.config"
import LiveCursor from "./cursor/LiveCursor"
import { useCallback } from "react";

const Live = () => {
    const others = useOthers()
    const [{ cursor }, updateMyPresence] = useMyPresence() as any;

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y

        updateMyPresence({ cursor: { x, y } })
    }, [])

    const handlePointerLeave = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        updateMyPresence({ cursor: null, message: null })
    }, [])

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y

        updateMyPresence({ cursor: { x, y } })
    }, [])

    return (
        <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} onPointerDown={handlePointerDown}
            className="h-screen">
            <LiveCursor others={others} />
        </div>
    )
}

export default Live