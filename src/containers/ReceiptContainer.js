import React from 'react';

import useGlobal from '../store/store'

const ReceiptContainer = () => {
  const [globalState, globalActions] = useGlobal()
  console.log('this is globalActions', globalActions)
  return (
      <div>
        <h2>Your cart</h2>
      </div>
    )
}
export default ReceiptContainer