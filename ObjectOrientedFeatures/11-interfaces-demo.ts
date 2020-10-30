
/**
 * By Default, Methods declared inside interface are abstract.
 * Interface can not have any non-abstract method.
 */

interface IMyBank {
    openBankAccount(): void;
    closeBankAccount(): void;
}

interface IBankAccount extends IMyBank {
    deposit(): void;
    withdraw(): void;
    balance(): void;
}

class SavingAccount implements IBankAccount {

    openBankAccount(): void {
        console.log("Open Saving Account..");
    }
    closeBankAccount(): void {
        console.log("Close Saving Account");
    }
    deposit(): void {
        console.log('Deposit in Saving Account..!!')
    }
    withdraw(): void {
        console.log('Withdrawal from Saving Account..!!')
    }
    balance(): void {
        console.log("Balance in Saving Account");
    }

}

class CurrentAccount implements IBankAccount, IMyBank {

    openBankAccount(): void {
        console.log("Open Current Account..");
    }
    closeBankAccount(): void {
        console.log("Close Current Account");
    }

    deposit(): void {
        console.log('Deposit in Current Account..!!')
    }
    withdraw(): void {
        console.log('Withdrawal from Current Account..!!')
    }
    balance(): void {
        console.log("Balance in Current Account");
    }
}

var savingAccount = new SavingAccount();
savingAccount.deposit();
savingAccount.withdraw();
savingAccount.balance();

var currentAccount = new CurrentAccount();
currentAccount.openBankAccount()
currentAccount.closeBankAccount()
currentAccount.deposit();
currentAccount.withdraw();
currentAccount.balance();