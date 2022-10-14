import {configureStore} from "@reduxjs/toolkit";
import api from "./AxiosApi";
import UserReducer from "./reducers/UserReducer";
import CategoryReducer from "./reducers/CategoryReducer";
import CollectionReducer from "./reducers/CollectionReducer";
export default configureStore({
    reducer: {
        UserReducer,CategoryReducer,CollectionReducer
    },
    middleware: [api]
})
