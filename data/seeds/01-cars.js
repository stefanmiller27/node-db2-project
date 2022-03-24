// STRETCH
const cars = [ 
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'camry',
        mileage: '205000',
        title: 'clean',
        transmission: 'manual'
    },
    {
        vin: '1111111111112',
        make: 'toyota',
        model: 'corolla',
        mileage: '105000',
        title: 'salvage'
    },
    {
        vin: '1111111111113',
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