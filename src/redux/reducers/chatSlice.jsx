import { createSlice } from '@reduxjs/toolkit'

const initalState = {
  chats: [],
  currentChatId: null,
}

const chatSlice = createSlice({
  name: 'chat',
  initialState: initalState,
  reducers: {
    setChats: (state, action) => {
      state.chats = action.payload
    },
    setCurrentChatId: (state, action) => {
      state.currentChatId = action.payload
    },
    addChat: (state, action) => {
      state.chats.push(action.payload)
    },
    removeChat: (state, action) => {
      state.chats = state.chats.filter(chat => chat.id !== action.payload)
    },
    updateChat: (state, action) => {
      const chat = state.chats.find(chat => chat.id === action.payload.id)
      if (chat) {
        chat.messages = action.payload.messages
      }
    },
    clearChats: (state) => {
      state.chats = []
      state.currentChatId = null
    }
  }
})

export const { setChats, setCurrentChatId, addChat, removeChat, updateChat, clearChats } = chatSlice.actions