import React from 'react'
import globalHook from 'use-global-hook'
import * as actions from '../actions/actions'

const initialState = {
    shoppingCart: []
};
const useGlobal = globalHook(React, initialState, actions)
export default useGlobal
