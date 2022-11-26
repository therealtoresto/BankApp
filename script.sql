create table banks(
    id serial primary key,
    bank_name varchar(40) not null,
    interest_rate decimal(5,2) not null,
    maximum_loan integer not null,
    minimum_down_payment decimal(5,2) not null,
    loan_term integer not null);