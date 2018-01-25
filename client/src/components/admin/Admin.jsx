import React from 'react';
import {Typography} from 'material-ui';

import {UserItem} from './UserItem';
import {PermissionControl} from './PersmissionControl';

import {WalletButton} from './WalletButton';
const users=[{name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: false}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: false}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: false}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: true}, {name: 'user', email: 'email@mail.com', isAuthorised: false}, {name: 'user', email: 'email@mail.com', isAuthorised: false}, {name: 'user', email: 'email@mail.com', isAuthorised: true}];
export const Admin=()=>(
  <div className="admin" >
    <Typography type={'display3'}>Admin DashBoard</Typography >
    <Typography type={'display2'}>Users</Typography>
    {users.map((user, index)=><div style={{display: 'flex', justifyContent: 'space-between',
    alignItems: 'stretch'}}>
      <UserItem key={index} name={user.name} email={user.email}/>
      <PermissionControl user={user.email} isAuthorised={user.isAuthorised}/>
      <WalletButton/>
    </div>)}
  </div>
);
