class BankInfo{
    constructor (id, name , ifscode,branch){
        this.id = id
        this.name = name
        this.ifscode = ifscode
        this.branch= branch

    }

    getFixedDeposit(){
        console.log('Bank Id : ${this.id}, Bank Name :${this.name} , Bank Ifscode : ${this.ifscode} and Bank Branch : ${this.branch}')
    }
}
    
let Bank =  new  BankInfo(6772100003321 , "HDFC" , 6546515, "warangal")
console.log(Bank.id , Bank.name, Bank.ifscode , Bank.branch)
//Bank.getFixedDeposit()

let Bank2 =  new  BankInfo( 474550900233, "ICICI" ,2154845, "Parvathagiri")
console.log(Bank2.id , Bank2.name, Bank2.ifscode , Bank2.branch)
//Bank2.getFixedDeposit()