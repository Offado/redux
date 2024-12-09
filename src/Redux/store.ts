import { createStoreHook } from "react-redux";
import rootReducer from "./Reducers/rootReducer";

const store = createStoreHook(rootReducer);

export default store;