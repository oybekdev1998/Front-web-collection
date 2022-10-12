import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice = createSlice({
    name: 'category',
    initialState: {
        category: [],
        current: false,
    },
    reducers: {
        get: (state, action) => {
            state.category = action.payload.object
        },
        delete: (state, action) => {
            toast.success('User Deleted')
        },
        post: (state, action) => {

        },
        update: (state, action) => {

        }
    },
})

export const getcategory = () => apiCall({
    url: `/category`,
    method: 'get',
    onSuccess: slice.actions.get.type

})

export const categorydelete = (id) => apiCall({
    url: '/category/' + id,
    method: 'delete',
    onSuccess: slice.actions.delete.type,
    onFail: slice.actions.delete.type
})

export const savecategory = (data) => apiCall({
    url: '/category',
    method: 'post',
    data,
    onSuccess: slice.actions.post.type,
    onFail: slice.actions.post.type
})

export const updatecategory = (data) => apiCall({
    url: '/category/' + data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.update.type,
    onFail: slice.actions.update.type
})

export default slice.reducer
