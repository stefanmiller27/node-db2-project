// STRETCH
const cars = [ 
    {
        vin: '19UUA66267A029468',
        make: 'toyota',
        model: 'camry',
        mileage: '205000',
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '4F2YU08182KM08421',
        make: 'toyota',
        model: 'corolla',
        mileage: '105000',
        title: 'salvage'
    },
    {
        vin: 'JN1AS44D1SW077966',
        make: 'toyota',
        model: 'supra',
        mileage: '5000'
    }
]

// exports.seed = function(knex) {
//     return knex('cars')
//     .truncate()
//         .then(() => {
//             return knex('cars').insert(cars)
//     })
// }

exports.seed = async function (knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}