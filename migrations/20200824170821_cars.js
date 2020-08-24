exports.up = async function(knex) {
    // translates to CREATE TABLE "cars"
    await knex.schema.createTable("cars", (table) => {
        // translates to "id" INTEGER NOT NULL UNIQUE PRIMARY KEY
        table.increments("id")
        // translates to "make" TEXT NOT NULL
        table.text("make").notNull()
        // translates to "model" TEXT NOT NULL
        table.text("model").notNull()
        // translates to "vin" TEXT NOT NULL UNIQUE
        table.text("vin").notNull().unique()
        // translates to "mileage" INTEGER NOT NULL
        table.integer("mileage").notNull()
        // translates to "transmission" TEXT 
        table.text("transmissionType")
        // translates to "title status" TEXT 
        table.text("titleStatus")
    })
};

exports.down = async function(knex) {
   await knex.schema.dropTableIfExists("cars") 
};
