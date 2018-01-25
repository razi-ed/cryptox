import React from 'react';
import {Button} from 'material-ui';
export const PermissionControl=(props)=>(
  <div style={{width: '20%', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
  <Button raised color={props.isAuthorised?'primary':'accent'}>
    {props.isAuthorised?'Deny Access':'Grant Access'}
  </Button>
  </div>
)
;
