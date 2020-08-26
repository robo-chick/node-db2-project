exports.seed = async function(knex) {
  // clear all the rows in the table and reset it
  await knex("cars").truncate()

  // populate table with some static test data
  await knex("cars").insert([
    {make: "Toyota", model: "Prius", VIN: "3VWCB21CX2M438906", mileage: 120061, transmissionType: "automatic", titleStatus: "clean"},
    {make: "Mazda", model: "3", VIN: "WBAFR1C51BC705689", mileage: 150500, transmissionType: "manual", titleStatus: "clean"},
    {make: "Ford", model: "F150", VIN: "1C3CCBBBXDN599999", mileage: 185000, transmissionType: "manual", titleStatus: "salvage"},
    {make: "Subaru", model: "Crosstrek", VIN: "1FMJK1J58DEF60481", mileage: 15000, transmissionType: "automatic", titleStatus: "clean"}
  ])
};
