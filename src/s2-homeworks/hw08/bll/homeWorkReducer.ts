import { UserType } from '../HW8'

type ActionType =
    | { type: 'sort'; payload: 'up' | 'down' }
    | { type: 'check'; payload: number }

enum Sort {
    up = "up",
    down = 'down'
}

export const homeWorkReducer = (state: Array<UserType>, action: ActionType): UserType[] => { // need to fix any
    let newState = null;
    switch (action.type) {
        case 'sort': { // by name
            newState = [...state];
            newState.sort((a: UserType, b: UserType) => {
                if (a.name === b.name) return 0;
                if (action.payload === Sort.up)
                    return a.name > b.name ? 1 : -1;
                return a.name < b.name ? 1 : -1;
            });
            return newState // need to fix
        }
        case 'check': {
            newState = state.filter((el: UserType) => el.age > 18
            )
            // newState.sort((a: UserType, b: UserType) => {
            //     return a.age - b.age
            // })
            return newState // need to fix
        }
        default:
            return state
    }
}
