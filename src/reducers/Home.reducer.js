

const initState = 0;

export default function homeState(state = initState, action) {
    switch (action.type) {
        case 'home':
            return action.data;
        default:
            return state;
    }
}