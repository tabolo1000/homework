import {loadingReducer, RootLoadingType} from './loadingReducer'
import {combineReducers, Dispatch, legacy_createStore} from 'redux'
import { themeReducer } from '../../hw12/bll/themeReducer'
import {useDispatch} from "react-redux";

const reducers = combineReducers({
    loading: loadingReducer, // hw10
    theme: themeReducer, // hw12
})
    // вызывает reducers c начальным состоянием второй на коректность их работы

//  Функция combineReducers принимает объект, где ключи являются именами свойств состояния,
// а значения — соответствующими редюсерами, которые управляют этими частями состояния.
// Она возвращает один объединённый редюсер, который можно использовать в хранилище Redux.
// export type Reducer<S = any, A extends Action = AnyAction> = (
//   state: S | undefined,
//   action: A
// ) => S
/*Инициализация состояния:
    Функция, созданная combineReducers, вызывает каждый дочерний редюсер
    с неопределенным состоянием и пустым действием, чтобы получить их начальные состояния.
    Эти начальные состояния объединяются в одно начальное состояние всего приложения.
    Обработка действия:
    Когда выполняется dispatch, созданный редюсер вызывает каждый дочерний редюсер
    с текущим состоянием этой части и действием.
    Каждый дочерний редюсер возвращает новое состояние для своей части.
    Эти новые состояния объединяются в новое состояние всего приложения.*/

const store = legacy_createStore(reducers)



export default store

export type AppStateType = ReturnType<typeof reducers>
/*Позволяет автоматически вывести тип состояния приложения, возвращаемого корневым редюсером.
* Так как reducers это функция
* */


// @ts-ignore
window.store = store // for dev // для того чтобы автотесты видели состояние данных
