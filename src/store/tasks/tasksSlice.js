import { createSlice } from '@reduxjs/toolkit';
import { tasksApi } from './tasksApi';

const initialState = {
    tasks: [],
    id: '',
    title: '',
    description: '',
    status: '',
    priority: ''
};

export const tasksSlice = createSlice({
    name: 'tasks',
    initialState,
    selectors: {
        selectTasks: (state) => state.tasks,
        selectInProgress: (state) => state.columns.inProgress,
        selectDone: (state) => state.columns.done
    },
    extraReducers: (builder) => {
        builder.addMatcher(tasksApi.endpoints.addTask.matchFulfilled, (state, { payload }) => {
            console.log(payload);
            // state.columns.todo.push(payload);
        });

        builder.addMatcher(tasksApi.endpoints.deleteTask.matchFulfilled, (state, { payload }) => {
            const id = payload.id;

            state.columns.todo = state.columns.todo.filter((item) => item.id !== id);

            state.columns.inProgress = state.columns.inProgress.filter((item) => item.id !== id);

            state.columns.done = state.columns.done.filter((item) => item.id !== id);
        });

        builder.addMatcher(tasksApi.endpoints.updateTask.matchFulfilled, (state, { payload }) => {
            const id = payload.id;

            const toDoTask = state.columns.todo.find((item) => item.id === id);

            const inProgressTask = state.columns.inProgress.find((item) => item.id === id);

            const doneTask = state.columns.done.find((item) => item.id === id);

            if (toDoTask) {
                state.columns.todo = state.columns.todo.filter((item) => item.id !== id);

                state.columns.todo.push(payload);
            }

            if (inProgressTask) {
                state.columns.inProgress = state.columns.inProgress.filter(
                    (item) => item.id !== id
                );

                state.columns.inProgress.push(payload);
            }

            if (doneTask) {
                state.columns.done = state.columns.done.filter((item) => item.id !== id);

                state.columns.done.push(payload);
            }
        });

        builder.addMatcher(tasksApi.endpoints.changeTask.matchFulfilled, (state, { payload }) => {
            const id = payload.id;

            const toDoTask = state.columns.todo.find((item) => item.id === id);

            const inProgressTask = state.columns.inProgress.find((item) => item.id === id);

            const doneTask = state.columns.done.find((item) => item.id === id);

            if (toDoTask) {
                state.columns.todo = state.columns.todo.filter((item) => item.id !== id);

                state.columns.todo.push(payload);
            }

            if (inProgressTask) {
                state.columns.inProgress = state.columns.inProgress.filter(
                    (item) => item.id !== id
                );

                state.columns.inProgress.push(payload);
            }

            if (doneTask) {
                state.columns.done = state.columns.done.filter((item) => item.id !== id);

                state.columns.done.push(payload);
            }
        });
    }
});

export const { selectToDo, selectInProgress, selectDone } = tasksSlice.selectors;

export const tasksReducer = tasksSlice.reducer;
