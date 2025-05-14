import { createSlice } from '@reduxjs/toolkit';

interface DummyState {
  placeholder: boolean;
}

const initialState: DummyState = {
  placeholder: true,
};

const dummySlice = createSlice({
  name: 'dummy',
  initialState,
  reducers: {},
});

export default dummySlice.reducer;