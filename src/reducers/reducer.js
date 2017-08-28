const modaleId = (state = 0, action) => {
    switch (action.type){
        case 'lireModal':
            return action.modalId;
        default:
            return state
    }
}

export default modaleId