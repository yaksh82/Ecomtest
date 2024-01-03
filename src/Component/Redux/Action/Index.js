export const addcart = (product) =>{

    return{

        type : "ADDITEM",
        payload : product
    }
}

export const delCart = (product) =>{

    return{

        type : "DELITEM",
        payload : product
    }
}
