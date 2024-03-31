/* eslint-disable import/no-cycle */
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { RootState } from "../store";

export interface Task {
  id?: any;
  task: string;
  isDone?: boolean;
}

interface FormState {
  tasks: Task[];
}

const initialState: FormState = {
  tasks: [],
};

const taskSlice = createSlice({
  name: "tasksmaster",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      const updatedTask = { ...action.payload, isDone: false }; // Set isDone to false initially
      return {
        ...state,
        tasks: [...state.tasks, updatedTask],
      };
    },
    toggleTaskDone: (state, action: PayloadAction<number>) => {
      const taskId = action.payload;
      state.tasks = state.tasks.map((task) =>
        task.id === taskId ? { ...task, isDone: !task.isDone } : task,
      );
    },
    removeTask: (state, action: PayloadAction<any>) => {
      state.tasks = state.tasks.filter((tas) => tas.task !== action.payload);
    },
    resetTask: (state) => {
      state.tasks = [];
    },
  },
});

export const { addTask, resetTask, removeTask, toggleTaskDone } =
  taskSlice.actions;

export const selectAllTasks = (state: RootState) => state.tasksmaster.tasks;

export const taskReducer = taskSlice.reducer;
