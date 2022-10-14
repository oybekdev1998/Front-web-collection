import {createSlice} from "@reduxjs/toolkit";
import {apiCall} from "../api";
import {toast} from "react-toastify";

export const slice = createSlice({
    name: 'collection',
    initialState: {
        collection: [],
        current: false,
    },
    reducers: {
        get: (state, action) => {
            state.collection = action.payload.object
        },
        delete: (state, action) => {
            toast.success('User Deleted')
        },
        post: (state, action) => {
            toast.success('Collection Created')

        },
        update: (state, action) => {

        }
    },
})

export const getcollection = () => apiCall({
    url: `/collection`,
    method: 'get',
    onSuccess: slice.actions.get.type

})

export const deleteCollection = (id) => apiCall({
    url: '/collection/' + id,
    method: 'delete',
    onSuccess: slice.actions.delete.type,
    onFail: slice.actions.delete.type
})

export const saveCollection = (data) => apiCall({
    url: '/collection',
    method: 'post',
    data,
    onSuccess: slice.actions.post.type,
    onFail: slice.actions.post.type
})

export const updateCollection = (data) => apiCall({
    url: '/collection/' + data.id,
    method: 'put',
    data,
    onSuccess: slice.actions.update.type,
    onFail: slice.actions.update.type
})

export default slice.reducer
