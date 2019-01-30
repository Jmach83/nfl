// round and type change to name toDo make dynamic
const season1 = {
    season: '2017',
    members: [{
        _id: 1,
        name: 'Mads',
        rounds:[{
            _id: 1,
            name: 1,
            fines: [{
                _id: 4,
                type: 'late',
                amount: 2
            }]
        },
        {
            _id: 2,
            name: 2,
            fines:  [{
                _id: 3,
                type: 'phone',
                amount: 1
            }, 
            { 
                _id: 1,
                type: 'snickers',
                amount: 2
            }]
        }]
    },
    {
        _id: 2,
        name: 'Jens',
        rounds:[{
            _id: 1,
            name: 1,
            fines: [{ 
                _id: 4,
                type: 'late',
                amount: 1
            }]
        },
        {
            _id: 2,
            name: 2,
            fines: [{ 
                _id: 3,
                type: 'phone',
                amount: 2
            }]
        }]
         
    }],
    fineRates: [{
        _id: 1,
        name: 'snickers',
        price: 10
    },
    {
        _id: 2,
        name: 'not listen',
        price: 25
    }, 
    {
        _id: 3,
        name: 'phone',
        price: 15 
    }, 
    {
        _id: 4,
        name: 'late',
        price: 5    
    }]

};

export function getData(){
    return season1;
}