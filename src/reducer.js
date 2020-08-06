export const initialState = {
    user: null,
    playlists: [],
    playing: false,
    item: null,
    // token: 'BQA-XgsMkpn6oG9xjCnFJ0HtWqj19iyf5cR8ie9AnmpGPQatKXThXb5vUOLOblE2bVdXXL5d4P3NwfKRiUutQmbcxXZKrKZygnqnqfbzOatxYB-OI3qDQ2D_vvhZFUbVO5lOgdtNDU8j_dJl4ARzeU8TfSshh34fRC1lNRrhL0louLVaYWAg',

};

const reducer = (state, action) => {
    console.log(action);

    //action -> type, [payload]

    switch (action.type) {
        case 'SET_USER':
            return {
                ...state,
                user: action.user,
            };
        case "SET_TOKEN":
            return {
                ...state,
                token: action.token,
            };
        case "SET_PLAYLISTS":
            return {
                ...state,
                playlists: action.playlists,
            };
        case "SET_DISCOVER_WEEKLY":
            return {
                ...state,
                discover_weekly: action.discover_weekly,
            }
        default:
            return state;
    }
}

export default reducer;