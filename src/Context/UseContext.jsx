import { useReducer } from 'react'
import { contentCreate } from './ContectCreate'
import { Data } from '../Apidata/Data'


const initialSatate = {
    count: 0,
    product: Data,
    darkmode: false
}
const reducerFunctin = (state, action) => {

    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + 1,
                product: state.product,
                darkmode: state.darkmode
            }

        case 'DECREMENT':
            return {
                count: state.count - 1,
                product: state.product,
                darkmode: state.darkmode
            }
        case 'TOGGLE':
            return {
                count: state.count,
                product: state.product,
                darkmode: !state.darkmode
            }

        default:
            return state

    }
}
export const DataProvider = (props) => {

    const [state, dispatch] = useReducer(reducerFunctin, initialSatate)

    return (
        <contentCreate.Provider value={{ state, dispatch }} >
            {props.children}
        </contentCreate.Provider>
    )
}