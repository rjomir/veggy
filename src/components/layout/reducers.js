//actions
export const selectCategory = (category) => {
    return {
        type: "CATEGORY",
        category
    }
}

export const selectCurrency = (currency) => {
    return {
        type: "CURRENCY",
        currency
    }
}

export const setIsLoading = (isLoading) => {
    return {
        type: "IS_LOADING",
        isLoading
    }
}

//reducers
export const category = (state = "Men", action) => {
    switch(action.type){
        case "CATEGORY": {
            return action.category
        }
        default: {
            return state
        }
    }
}

export const currency = (state = "USD", action) => {
    switch (action.type) {
        case "CURRENCY": {
            return action.currency
        }
        default:{
            return state
        }
    }
}

export const isLoading = (state = false, action) => {
    switch (action.type) {
        case "IS_LOADING": {
            return action.isLoading
        }
        default:{
            return state
        }
    }
}

