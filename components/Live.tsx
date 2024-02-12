import { useMyPresence, useOthers } from "@/liveblocks.config"
import LiveCursor from "./cursor/LiveCursor"
import { useCallback, useEffect, useState } from "react";
import CursorChat from "./cursor/CursorChat";
import { CursorMode } from "@/type";

const Live = () => {
    const others = useOthers()
    const [{ cursor }, updateMyPresence] = useMyPresence() as any;
    const [cursorState, setCursorState] = useState({
        mode: CursorMode.Hidden,
    })

    const handlePointerMove = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y

        updateMyPresence({ cursor: { x, y } })
    }, [])

    const handlePointerLeave = useCallback((e: React.PointerEvent) => {
        setCursorState({ cursor: CursorMode.Hidden })
        updateMyPresence({ cursor: null, message: null })
    }, [])

    const handlePointerDown = useCallback((e: React.PointerEvent) => {
        e.preventDefault();

        const x = e.clientX - e.currentTarget.getBoundingClientRect().x
        const y = e.clientY - e.currentTarget.getBoundingClientRect().y

        updateMyPresence({ cursor: { x, y } })
    }, [])

    // this useEffect used for tracking keyboard event
    useEffect(() => {
        const onKeyUp = (e: React.KeyboardEvent) => {
            if (e.key === '/') {
                setCursorState({
                    mode: CursorMode.Chat,
                    previousMessage: null,
                    message: ''
                })
            }
            else if (e.key === 'Escape') {
                updateMyPresence({ message: '' })
                setCursorState({ mode: CursorMode.Hidden })
            }
        }
        const onKeyDown = (e: React.KeyboardEvent) => {
            if (e.key === '/') {
                e.preventDefault()
            }
        }

        window.addEventListener('keyup', onKeyUp)
        window.addEventListener('keydown', onKeyDown)

        return () => {
            window.addEventListener('keyup', onKeyUp)
            window.addEventListener('keydown', onKeyDown)
        }
    }, [updateMyPresence])

    return (
        <div onPointerMove={handlePointerMove} onPointerLeave={handlePointerLeave} onPointerDown={handlePointerDown}
            className="h-screen">
            {cursor && (
                <CursorChat
                    cursor={cursor}
                    cursorState={cursorState}
                    setCursorState={setCursorState}
                    updateMyPresence={updateMyPresence} />
            )}
            <LiveCursor others={others} />
        </div>
    )
}

export default Live