# mortgage-backend
Це бекендна частина додатку, написана на NodeJS i mySQL.
how to take database configs:
heroku config | findstr CLEARDB_DATABASE_URL

available APIs:

* GET https://quiet-inlet-20067.herokuapp.com/api/v1/banks - returns all banks from db
* POST https://quiet-inlet-20067.herokuapp.com/api/v1/banks - creates new bank in db
* PUT https://quiet-inlet-20067.herokuapp.com/api/v1/banks/{id} - updates bank
* DELETE https://quiet-inlet-20067.herokuapp.com/api/v1/banks/{id} - removes bank from db

example request body:

{
    "name":"kredo",
    "interestRate": 12.5,
    "maximumLoan": 4000000,
    "downPaymentPercent":20.1,
    "loanTerm":240
}
