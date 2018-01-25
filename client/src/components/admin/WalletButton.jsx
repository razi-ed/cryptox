import React from 'react';
import {Button} from 'material-ui';

export const WalletButton=()=>(
  <div className="wallet-button" style={{width: '20%', display: 'flex', justifyContent: 'center', padding: '2%'}}>
    <Button color={'accent'} style={{border: '1px solid'}}>Wallet</Button>
  </div>
)
;
