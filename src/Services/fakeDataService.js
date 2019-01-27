
const season1 = {
    season: '2017',
    members: [{
        _id: 1,
        name: 'Mads',
        nounds:[{
            round: 1,
            fines: [{
                type: 'fart',
                amount: 2
            }]
        },
        {
            round: 2,
            fines:  [{
                type: 'phone',
                amount: 1
            }, 
            { 
                type: 'fart',
                amount: 2
            }]
        }]
    },
    {
        _id: 2,
        name: 'Jens',
        rounds:[{
            round: 1,
            fines: [{ 
                type: 'late',
                amount: 1
            }]
        },
        {
            round: 2,
            fines: [{ 
                type: 'phone',
                amount: 2
            }]
        }]
         
    }],
    fineRates: [{
        name: 'fart',
        price: 10
    },
    {
        name: 'cheerleader',
        price: 25
    }, 
    {
        name: 'phone',
        price: 15 
    }, 
    {
        name: 'late',
        price: 5    
    }]

};

export function getData(){
    return season1;
}