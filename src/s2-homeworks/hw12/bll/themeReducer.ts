const initState:InitialState  = {
    themeId: 1,
};

export const themeReducer: ThemeReducer = (state = initState, action) => {
    switch (action.type) {
        case 'SET_THEME_ID':
            return {
                ...state,
                themeId: action.id
            };
        default:
            return state;
    }
};




//---------------Actions_Creaters----------------------------------------------------------


export const changeThemeId = (id: number) => ({ type: 'SET_THEME_ID', id } as const) // fix any




//---------------Type_theme_reducer--------------------------------------------------------

type InitialState = {
    themeId: number
}
interface ThemeReducer {
    (state: InitialState | undefined, action: ChangeThemeId): InitialState;
}
export type ChangeThemeId = ReturnType<typeof changeThemeId>