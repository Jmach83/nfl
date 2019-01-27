
export const season1 = {
    Season: '2017',
    Members: [{
        Name: 'Mads',
        Rounds:[{
            Round: 1,
            Fines: [{
                Type: 'fart',
                Amount: 2
            }]
        },
        {
            Round: 2,
            Fines:  [{
                Type: 'phone',
                Amount: 1
            }, 
            { 
                Type: 'fart',
                Amount: 2
            }]
        }]
    },
    {
        Name: 'Jens',
        Rounds:[{
            Round: 1,
            Fines: [{ 
                Type: 'late',
                Amount: 1
            }]
        },
        {
            Round: 2,
            Fines: [{ 
                Type: 'phone',
                Amount: 2
            }]
        }]
         
    }],
    FineRates: [{
        Type: 'fart',
        Price: 10
    },
    {
        Type: 'cheerleader',
        Price: 25
    }, 
    {
        Type: 'phone',
        Price: 15 
    }, 
    {
        Type: 'late',
        Price: 5    
    }]

};