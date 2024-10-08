const initState: InitState = {
    isLoading: false,
}
/*Первый вызов: Проверка начального состояния
Redux вызывает каждый редюсер с state = undefined и action = { type: undefined }, чтобы получить начальное состояние каждого редюсера.
    Это помогает убедиться, что каждый редюсер корректно инициализирует свое состояние.
    Второй вызов: Проверка корректности редюсеров
Redux вызывает редюсеры с action = { type: "@@redux/INIT" } для проверки их способности обрабатывать действия.
    Это внутренний механизм проверки, чтобы убедиться, что редюсеры не возвращают undefined для неизвестных действий.
    Третий вызов: Инициализация хранилища
После получения начального состояния и проверки редюсеров, Redux снова вызывает редюсеры для инициализации состояния хранилища.
    Это позволяет убедиться, что хранилище корректно инициализируется с начальным состоянием.*/

/*@@redux/INIT: Этот тип действия используется для инициализации хранилища и получения начального состояния от всех редюсеров.
    @@redux/PROBE_UNKNOWN_ACTION: Этот тип действия используется для проверки того, что редюсеры корректно обрабатывают
неизвестные действия и не возвращают undefined в качестве состояния.*/
enum Action {
    CHANGE_LOADING = 'CHANGE_LOADING'
}



export const loadingReducer: LoadingReducer = (state = initState, action) => { // fix any
    switch (action.type) {
        case (Action.CHANGE_LOADING):
            return { ...state, isLoading: !action.isLoading }
        default:
            return state
    }
}






export const loadingAC = (isLoading: boolean) => ({ type: 'CHANGE_LOADING', isLoading } as const)


//----------------------------------types_loding_reducer---------------------------------------
interface LoadingReducer {
    (state: InitState | undefined, action: RootLoadingType): InitState
}

export type RootLoadingType = LoadingType

type LoadingType = ReturnType<typeof loadingAC>

type InitState = {
    isLoading: boolean
}

