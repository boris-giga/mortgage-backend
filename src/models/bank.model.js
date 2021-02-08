'use strict';
const dbConn = require('./../../config/db.config');
//Bank object create
const Bank = function(bank){
  this.id = bank.id;
	this.name = bank.name;
	this.interestRate = bank.interestRate;
	this.maximumLoan = bank.maximumLoan;
	this.downPaymentPercent = bank.downPaymentPercent;
	this.loanTerm = bank.loanTerm;

};
Bank.create = function (newBank, result) {
dbConn.query("INSERT INTO banks set ?", newBank, function (err, res) {
if(err) {
  console.log("error: ", err);
  result(err, null);
}
else{
  console.log(res.insertId);
  result(null, res.insertId);
}
});
};
// Bank.findById = function (id, result) {
// dbConn.query("Select * from employees where id = ? ", id, function (err, res) {
// if(err) {
//   console.log("error: ", err);
//   result(err, null);
// }
// else{
//   result(null, res);
// }
// });
// };
Bank.findAll = function (result) {
dbConn.query("Select * from banks", function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  console.log('banks : ', res);
  result(null, res);
}
});
};
Bank.update = function(id, bank, result){
dbConn.query("UPDATE banks SET name=?, interestRate=?, maximumLoan=?, downPaymentPercent=?, loanTerm=? WHERE id = ?", [bank.name,bank.interestRate,bank.maximumLoan,bank.downPaymentPercent,bank.loanTerm, id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}else{
  result(null, res);
}
});
};
Bank.delete = function(id, result){
dbConn.query("DELETE FROM banks WHERE id = ?", [id], function (err, res) {
if(err) {
  console.log("error: ", err);
  result(null, err);
}
else{
  result(null, res);
}
});
};
module.exports= Bank;