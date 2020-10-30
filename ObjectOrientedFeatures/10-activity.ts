
/**
 * we will create saving account and current account from an abstract class BankAccount.
 * We cannot withdraw more than a limit per day from saving account (20000)
 * No limit  to withdraw from current account for current account
 */

/*
abstract class BankAccount {
   welcomemessage(): void {
       console.log('Welcome to My Bank')
   }
   abstract deposit(amount: number): void;
   abstract withdraw(amount: number): void;
   abstract balance(): void;
}
class SavingAccount extends BankAccount {
   protected savingBalance: number = 0;
   deposit(amount: number): void {
       this.savingBalance += amount;
       console.log(`Deposit amount is ${amount}`)
   }
   withdraw(amount: number): void {
       if (amount <= 20000 && amount <= this.savingBalance) {
           this.savingBalance -= amount;
           console.log(`Withdraw amount is ${amount}`)
       } else {
           if (amount > 20000) {
               console.log(`Withdraw amount ${amount} exceeds the maximum withdrawal amount`)
           } else {
               console.log(`Withdraw amount ${amount} exceeds the saving limit : ${this.savingBalance}`)
           }
       }
   }
   balance(): void {
       super.welcomemessage();
       console.log(`The saving balance is ${this.savingBalance}`);
   }

}

class CurrentAccount extends BankAccount {
   protected currentBalance: number = 0;
   deposit(amount: number): void {
       this.currentBalance += amount;
       console.log(`Deposit amount is ${amount}`)
   }
   withdraw(amount: number): void {
       if (amount <= this.currentBalance) {
           this.currentBalance -= amount;
           console.log(`Withdraw amount is ${amount}`)
       } else {
           console.log(`Withdraw amount ${amount} exceeds the current balance ${this.currentBalance}`)
       }
   }
   balance(): void {
       super.welcomemessage();
       console.log(`The current balance is ${this.currentBalance}`);
   }

}
class DMATAccount extends BankAccount {
   protected DMATBalance: number = 0;
   deposit(amount: number): void {
       this.DMATBalance += amount;
       console.log(`Deposit amount is ${amount}`)
   }
   withdraw(amount: number): void {
       if (amount <= 20000 && amount <= this.DMATBalance) {
           this.DMATBalance -= amount;
           console.log(`Withdraw amount is ${amount}`)
       } else {
           if (amount > 20000) {
               console.log(`Withdraw amount ${amount} exceeds the maximum withdrawal amount`)
           } else {
               console.log(`Withdraw amount ${amount} exceeds the DMAT balance ${this.DMATBalance}`)
           }
       }
   }
   balance(): void {
       super.welcomemessage();
       console.log(`The DMAT balance is ${this.DMATBalance}`);
   }

}
class FixedAccount extends BankAccount {
   protected FixedBalance: number = 0;
   deposit(amount: number): void {
       this.FixedBalance += amount;
       console.log(`Deposit amount is ${amount}`)
   }
   withdraw(amount: number): void {
       if (amount <= 20000 && amount <= this.FixedBalance) {
           this.FixedBalance -= amount;
           console.log(`Withdraw amount is ${amount}`)
       } else {
           if (amount > 20000) {
               console.log(`Withdraw amount ${amount} exceeds the maximum withdrawal amount`)
           } else {
               console.log(`Withdraw amount ${amount} exceeds the fixed balance ${this.FixedBalance}`)
           }
       }
   }
   balance(): void {
       super.welcomemessage();
       console.log(`The fixed balance is ${this.FixedBalance}`);
   }

}
class RDAccount extends BankAccount {
   protected RDBalance: number = 0;
   deposit(amount: number): void {
       this.RDBalance += amount;
       console.log(`Deposit amount is ${amount}`)
   }
   withdraw(amount: number): void {
       if (amount <= 20000 && amount <= this.RDBalance) {
           this.RDBalance -= amount;
           console.log(`Withdraw amount is ${amount}`)
       } else {
           if (amount > 20000) {
               console.log(`Withdraw amount ${amount} exceeds the maximum withdrawal amount`)
           } else {
               console.log(`Withdraw amount ${amount} exceeds the RD balance ${this.RDBalance}`)
           }
       }
   }
   balance(): void {
       super.welcomemessage();
       console.log(`The RD balance is ${this.RDBalance}`);
   }


}
class LoanAccount extends BankAccount {
   protected LoanBalance: number = 0;
   deposit(amount: number): void {
       this.LoanBalance += amount;
       console.log(`Deposit amount is ${amount}`)
   }
   withdraw(amount: number): void {
       if (amount <= 20000 && amount <= this.LoanBalance) {
           this.LoanBalance -= amount;
           console.log(`Withdraw amount is ${amount}`)
       } else {
           if (amount > 20000) {
               console.log(`Withdraw amount ${amount} exceeds the maximum withdrawal amount`)
           } else {
               console.log(`Withdraw amount ${amount} exceeds the loan balance ${this.LoanBalance}`)
           }
       }
   }
   balance(): void {
       super.welcomemessage();
       console.log(`The loan balance is ${this.LoanBalance}`);
   }


}


var savingAccount = new SavingAccount();
savingAccount.deposit(10000);
savingAccount.withdraw(20000);
savingAccount.balance();
console.log('--------------------------------------');
var currentAccount = new CurrentAccount();
currentAccount.deposit(50000);
currentAccount.withdraw(25000);
currentAccount.balance();
console.log('--------------------------------------');
var dmatAccount = new DMATAccount();
dmatAccount.deposit(30000);
dmatAccount.withdraw(21000)
dmatAccount.balance();
console.log('--------------------------------------');
var fixedAccount = new FixedAccount();
fixedAccount.deposit(8000);
fixedAccount.withdraw(15000);
fixedAccount.balance();
console.log('--------------------------------------');
var rdAccount = new RDAccount();
rdAccount.deposit(5000);
rdAccount.withdraw(6000);
rdAccount.balance();
console.log('--------------------------------------');
var loanAccount = new LoanAccount();
loanAccount.deposit(10000);
loanAccount.withdraw(9500);
loanAccount.balance();
*/

abstract class BankAccount {
    abstract deposit(amount: number): void;
    abstract withdrawal(amount: number): void;
    abstract balance(): number;
}

class SavingAccount extends BankAccount {
    private limitAmount: number;
    private date: Date;
    private amount: number;
    constructor() {
        super()
        this.limitAmount = 2000;
        this.date = new Date();
        this.amount = 0;
    }

    deposit(depositAmount: number) {
        this.amount = this.amount + depositAmount;
        console.log(`The deposit amount is ${depositAmount}`)


    }
    withdrawal(withdrawAmount: number) {
        var _date = new Date();
        if ((_date.getHours() - this.date.getHours() < 24)) {
            if ((withdrawAmount - this.limitAmount) < 0) {
                if (this.amount > withdrawAmount) {
                    this.amount = this.amount - withdrawAmount;
                    this.limitAmount = this.limitAmount - withdrawAmount;
                    console.log(`the withdraw amount is ${withdrawAmount}`)
                } else {
                    console.log(`The balance is ${this.amount}`)
                }
            } else {
                console.log(`The amount you can withdrawal today is ${this.limitAmount}`);
            }
        } else {
            this.date = new Date();
            this.limitAmount = 2000;
        }

    }
    balance(): number {

        return this.amount;

    }

}

class CurrentAccount extends BankAccount {

    private amount: number;
    constructor() {
        super()
        this.amount = 0;
    }

    deposit(depositAmount: number) {
        this.amount = this.amount + depositAmount;


    }
    withdrawal(withdrawAmount: number) {

        if (this.amount > withdrawAmount) {
            this.amount = this.amount - withdrawAmount;

        } else {
            console.log(`The balance is ${this.amount}, which isn't enough for withdrawing`)
        }

    }
    balance(): number {

        return this.amount;

    }

}

var savingAccount = new SavingAccount();
savingAccount.deposit(1000);
savingAccount.deposit(10000);
console.log(savingAccount.balance());
savingAccount.withdrawal(2000);
console.log(savingAccount.balance());

// var currentAccount = new CurrentAccount();
// currentAccount.deposit(1000);
// currentAccount.withdrawal(2000);