const validatePassword=(password)=>{
  const lowerCase=/[a-z]/g;
  const upperCase=/[A-Z]/g;
  const numbers = /[0-9]/g;
  const len= password.length;
  console.log('password from validator',password);
  const validator=(reg)=>password.match(reg);
  return !validator(lowerCase)?'must contain lowercase letters':
          !validator(upperCase)?'must contain lowercase letters':
            !validator(numbers)?'must conatin a number':
              len<8?'must contain minimum of 8 characters':'valid password';
};

module.exports=validatePassword;
