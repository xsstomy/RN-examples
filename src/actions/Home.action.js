export function changeContent(data) {
    return dispatch => {
        dispatch({
            type: 'home', 
            data: data
        });
    };
}
