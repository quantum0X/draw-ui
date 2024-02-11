import { User, BaseUserMeta } from "@liveblocks/client"

export type Presence = any

export type LiveCursorProps = {
    others: readonly User<Presence, BaseUserMeta>[]
}