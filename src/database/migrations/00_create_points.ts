import Knex from 'knex'

export async function up(knex: Knex) {
    return knex.schema.createTable('points', table =>{
        table.increments('id').notNullable();
        table.string('image').notNullable();
        table.string('name', 100).notNullable();
        table.string('email',150).notNullable();
        table.string('watsapp',15).notNullable();
        table.string('city', 100).notNullable();
        table.string('uf', 2).notNullable();
        table.decimal('latitude').notNullable();
        table.decimal('longitude').notNullable();
    })
}

export async function down(knex: Knex){
    return knex.schema.dropTable('points')
}