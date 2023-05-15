export const LS_NAME = 'redux_superStore'

export const myInitialState = {
    user: {},
    filter:{
        search: ''
    }
}

export const getInitialState = () => {
    const dataFromLS = localStorage.getItem(LS_NAME);
    
    return dataFromLS ? JSON.parse(dataFromLS) : myInitialState
}