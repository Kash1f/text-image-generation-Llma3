import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  chats: [],
  currentChatId: null,
}

const chatSlice = createSlice({
    name: 'chat',
    initialState: initalState,
    reducers: { 
        addChat: (state, action) => {
            state.chats.push(action.payload)
        },
        setCurrentChatId: (state, action) => {
            state.currentChatId = action.payload
        },
    }
})

export const { addChat, setCurrentChatId } = chatSlice.actions      