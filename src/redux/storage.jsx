import { MMKV } from "react-native-mmkv";

const mmkv = new MMKV();

const reduxStorage = {

  setItem: (key, value) => {
    Storage.se(key, value);
    return Promise.resolve(true)
  },
  getItem: (key) => {
    const value = storage.getString(key)
    return Promise.resolve(value)
  },
  removeItem: (key) => {
    storage.delete(key)
    return Promise.resolve()
  },
  }

export default reduxStorage;