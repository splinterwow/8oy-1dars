import { createSlice } from "@reduxjs/toolkit";


const users = [
    {id: 1, name: "John", age : 21, img: "https://avatars.mds.yandex.net/i?id=c73f0df7da71c3d7165bfcb122a00d7dcf8a5c653744d2a9-7132066-images-thumbs&n=13" },
    {id: 2, name: "Alex", age : 23, img: "https://avatars.mds.yandex.net/i?id=2df9aad645eff9fd54beee05cff770352738d096-8497237-images-thumbs&n=13" },
    {id: 3, name: "Tom", age : 29, img: "https://avatars.mds.yandex.net/i?id=a8ffc42530d11d373e07ff512a9e4a96a6562d79-12731000-images-thumbs&n=13" },
    {id: 4, name: "Tim", age : 43, img: "https://avatars.mds.yandex.net/i?id=7bc4727a25f8f2245c1b7486ffdfaaabbd3f138f-13604111-images-thumbs&n=13" },
]
export const usersSlice = createSlice({
  name: "users",
  initialState:users,
  reducers: {
    add: (state, action) => {
      return [...state, action.payload];
    },
    remove: (state, action) => {
      return state.filter((item) => item.id !== action.payload)
    },
  },
});

export const { add, remove } = usersSlice.actions;

export default usersSlice.reducer;
