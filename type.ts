import { User, BaseUserMeta } from "@liveblocks/client"

export type Presence = any

export type LiveCursorProps = {
    others: readonly User<Presence, BaseUserMeta>[]
}

export enum CursorMode {
    Hidden,
    Chat,
    ReactionSelector,
    Reaction,
}

// cursor state which define chats type
export type CursorState =
    | {
        mode: CursorMode.Hidden;
    }
    | {
        mode: CursorMode.Chat;
        message: string;
        previousMessage: string | null;
    }
    | {
        mode: CursorMode.ReactionSelector;
    }
    | {
        mode: CursorMode.Reaction;
        reaction: string;
        isPressed: boolean;
    };

// cursor chat props
export type CursorChatProps = {
    cursor: { x: number; y: number };
    cursorState: CursorState;
    setCursorState: (cursorState: CursorState) => void;
    updateMyPresence: (
        presence: Partial<{
            cursor: { x: number; y: number };
            cursorColor: string;
            message: string;
        }>
    ) => void;
};

// navbar props
export type NavbarProps = {
    activeElement: ActiveElement;
    imageInputRef: React.MutableRefObject<HTMLInputElement | null>;
    handleImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    handleActiveElement: (element: ActiveElement) => void;
};