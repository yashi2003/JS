const accountId = 1234567 //constant variable
let accountEmail = "abc@example.com" //variable that can be reassigned
var accountPassword ="123" //variable that can be reassigned // not used in modern JS because block scope and functional scope problem
accountCity = "Jaipur" //variable that can be reassigned without declaration // (not recommended, but works in non-strict mode)
let accountState; //variable that can be reassigned but not initialized

// accountId = 2 // This will throw an error because accountId is a constant
accountEmail = " hc@hc.com" // This is allowed
accountPassword = "1234" // This is allowed
console.log(accountId);
console.table([{ accountId, accountEmail, accountPassword, accountCity, accountState }]);
