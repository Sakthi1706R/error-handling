class Bank {
    users = [
     {accountNo: 443301, balance: 12000, username: 'Jackie', password:'1234'},
     {accountNo: 443302, balance: 35000, username: 'Julie', password:'1234'},
     {accountNo: 443303, balance: 15000, username: 'Bheema', password:'1234'},
    ];
 
    // Method without error handling
    getBalanceWithoutErrorHandling(accountNo) {
     const result = this.users.find((x) => x.accountNo === accountNo);
     
     // Handle undefined result if accountNo is not found
     if (result) {
       console.log(`Balance: ${result.balance}, Account Holder: ${result.username}`);
     } else {
       console.log('Account not found');
     }
    }
 
    // Method with error handling
    getBalance(accountNo, password) {
     try {
         const result = this.users.find((x) => x.accountNo === accountNo);
 
         // Handle case where account is not found
         if (result) {
             const isValidPassword = result.password === password;
 
             // Handle case where password is incorrect
             if (isValidPassword) {
                 console.log(`Balance: ${result.balance}, Account Holder: ${result.username}`);
             } else {
                 throw 'Invalid password';
             }
         } else {
             throw `Invalid Account No: ${accountNo}`;
         }
     } catch (error) {
         console.log(error);
     }
   }
 }
 
 let stateBank = new Bank();
 
 // Testing the method with invalid password
 stateBank.getBalance(443301, '12346');
 