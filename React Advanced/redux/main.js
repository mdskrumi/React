const createPolicy = (name, amount) => {
    return {
        type: "CREATE_POLICY",
        payload: {
            name,
            amount,
        }
    };
};


const deletePolicy = (name) => {
    return {
        type: "DELETE_POLICY",
        payload: {
            name,
        }
    };
};


const createClaim = (name, amount) => {
    return {
        type: "CREATE_CLAIM",
        payload: {
            name,
            amount,
        }
    };
};


const claimHistory = (oldListOfClaims = [], action) => {
    if (action.type === "CREATE_CLAIM") {
        return [...oldListOfClaims, action.payload];
    }


    return oldListOfClaims;
};


const accounting = (oldBagOfMoney = 0, action) => {
    if (action.type === 'CREATE_CLAIM') {
        return oldBagOfMoney - action.payload.amount;
    }
    else if (action.type === "CREATE_POLICY") {
        return oldBagOfMoney + action.payload.amount;
    }
    return oldBagOfMoney;
};



const policies = (listOfPolicies = [], action) => {
    if (action.type === "CREATE_POLICY") {
        return [...listOfPolicies, action.payload.name];
    }
    else if (action.type === "DELETE_POLICY") {
        return listOfPolicies.filter((name) => name !== action.payload.name);
    }
    else {
        return listOfPolicies;
    }
}

console.log(Redux);