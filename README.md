#### This is a test exersise for ElifTech IT School *"Mortgage calculator"*

###### Task overview:
  Create a web application where users can create banks and calculate mortgage 
payments using one of these bank’s settings.

###### Technical details:
  Use any programming language, any database management system, any language 
for the server to manage connections to DB. Use any preferred design style 
or any UI/UX library.

###### Banks management page:
  On this page, a user should be able to see the list of all earlier created 
banks and create/edit/remove the bank. Banks must be stored in the database, 
the corresponding API should be provided for that. Here is the example of bank 
schema that might be convenient to use during the development (though we 
encourage you to investigate it a little bit more and find other parameters 
that are utilized in bank systems nowadays):
  - Bank name
  - Interest rate - the annual percentage rate that expresses the amount of
  money the bank charges additionally for the use of assets the person 
  borrowed money for.
  - Maximum loan - the maximum amount of money a bank is able to borrow.
  - Minimum down payment - the amount of money a person needs to pay upfront 
  (if a person takes a loan of $300.000 and bank minimum down payment is 20%, 
  it means that person must pay the bank $60.000 as an initial mortgage payment)
  - Loan term - a period of time in which a person must pay off the loan 
  (usually banks have several loan programs, but for this task, let’s assume 
  each bank has only one fixed term)

###### Mortgage calculator page:
  Here the user can see the payment plan for his mortgage. This page should 
contain the following inputs:
  - Initial loan (example: $280.000)
  - Down payment (example: $20.000)
  - Bank (enter the name or select from dropdown)
  Based on entered data you can apply the next formula to calculate monthly 
mortgage payment:

> TP = IL (i + (i / (1 + i)^n - 1))
>
> TP - total payment
> IL - initial loan
> i - interest rate per month
> n - number of month

  User’s entered data should be validated accordingly to the selected bank,
for example down payment satisfies the minimum down payment boundary of the
bank, the bank is capable of giving a requested loan.
	
  The application should be deployed and available through the Internet.
The repository should contain a README file with a project setup instruction.

###### Bonus ideas
  On the mortgage calculator page you can also display a monthly payments table
that has the following structure:

| Month | Total payment | Interest payment | Loan balance | Equity |
|:-----:|:-------------:|-----------------:|-------------:|-------:|

Where:
  - Month - is a number of a month (if the bank loan term is 20 years, it will
be a range from 1 to 240).
  - Total payment - calculated by the formula given above.
  - Interest payment - the amount of money the person pays the bank as interest.
It’s calculated as the bank interest rate multiplied by the loan balance of
the previous month thus this amount should decrease over time.
  - Loan balance - the amount of money that is left for the person to pay off. 
  - Equity - is the portion of a home's current value that the person actually
possesses at any given time. Obviously, it should increase over time.

  Here is the example how table should look like for annual interest rate = 5%,
loan = $45.000, term = 3 months, down payment = $20.000:

| Month | Total payment | Interest payment | Loan balance |   Equity   |
|:-----:|--------------:|-----------------:|-------------:|-----------:|
|   1   |      15.125,17|            187,65|     30.062,48|   34.937,52|
|   2   |      15.125,17|            125,36|     15.062,67|   49.937,33|
|   3   |      15.125,17|             62,66|             0|   64.999,84|

  As you can see, after three months person’s equity is *equal to the loan 
amount ($45.000) + down payment ($20.000). The loan balance became zero. In the
table we rounded a calculation, so it’s equal to $64.999,84 there

###### Implement bank loan history
  If a user tried to calculate a mortgage you can keep this record in the 
database and show this record inthe history of the specific bank.

######  Charts and animations
  You can visualize any kind of bank information and plot it on the chart or 
create some animations for bank CRUD operations. 

