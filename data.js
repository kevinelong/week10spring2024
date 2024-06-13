data = [
    {
        id: 123,
        owner: "kevin ernest long",
        balances: [
            {
                id: 1423,
                name: "checking",
                current: 987.87
            },
            {
                id: 2312,
                name: "saving",
                current: 5432.22
            }
        ]
    }
];

class Account{
    constructor(apiObject){
        this.number = apiObject.id
        this.displayName = apiObject.name
        this.balance = apiObject.current
    }
}

class Owner{
    constructor(apiObject){
        this.id = apiObject.id
        this.customer = apiObject.owner
        this.accounts = apiObject.balances.map(b => new Account(b));
    }
}

const owner = new Owner(data[0])

console.log(JSON.stringify(owner,"",2));
