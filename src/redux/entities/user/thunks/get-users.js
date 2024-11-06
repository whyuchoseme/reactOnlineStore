import { createAsyncThunk } from "@reduxjs/toolkit";
import { selectUserIds } from "../selectors";

export const getUsers = createAsyncThunk(
  "users/getUsers",
  async () => {
    const responce = await fetch("http://localhost:3001/api/users");

    return await responce.json();
  },
  {
    condition: (_, { getState }) => !selectUserIds(getState())?.length,
  }
);
