const logger = (store) => (next) => (action) => {
    switch(action.type) {
        default:
            next(action);
    }
}

export default logger