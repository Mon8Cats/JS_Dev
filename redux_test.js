const redux = require("redux");
const { createStore, combineReducers } = redux;

// (1) Action Creator = function returns object with type and payload
const createClaim = (name, amount) => {
  return {
    type: "CREATE_CLAIM",
    payload: {
      name: name,
      amount: amount
    }
  };
};

const createPolicy = name => {
  return {
    type: "CREATE_POLICY",
    payload: {
      name: name,
      amount: 200
    }
  };
};

const deletePolicy = name => {
  return {
    type: "DELETE_POLICY",
    payload: {
      name: name
    }
  };
};

// (2) Reducers -- modify and return state
const claimsReducer = (exClaims = [], action) => {
  switch (action.type) {
    case "CREATE_CLAIM":
      return [...exClaims, action.payload];
    default:
      return exClaims;
  }
};

const accountingReducer = (backOfMoney = 10000, action) => {
  switch (action.type) {
    case "CREATE_CLAIM":
      return backOfMoney - action.payload.amount;
    case "CREATE_POLICY":
      return backOfMoney + action.payload.amount;
    default:
      return backOfMoney;
  }
};

const policyReducer = (exPolicies = [], action) => {
  switch (action.type) {
    case "CREATE_POLICY":
      return [...exPolicies, action.payload.name];
    case "DELETE_POLICY":
      return exPolicies.filter(policy => policy != action.payload.name);
    default:
      return exPolicies;
  }
};

// combine Reducers
const allReducers = combineReducers({
  accounting: accountingReducer,
  policy: policyReducer,
  claim: claimsReducer
});

// (3) Stoe
const store = createStore(allReducers);

// (4) Dispatch
store.dispatch(createPolicy("Steve"));
store.dispatch(createPolicy("Tom"));
store.dispatch(createPolicy("John"));
store.dispatch(createPolicy("Dave"));
store.dispatch(createPolicy("Alex"));
store.dispatch(createClaim("Alex", 50));
store.dispatch(deletePolicy("Tom"));

console.log(store.getState());
