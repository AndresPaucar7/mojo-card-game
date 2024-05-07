const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const { Attack } = require('.');
const sequelize = require('../db/config');
const db = require('../db/config');


describe('Attack', () => {
    beforeAll(async () => {
        await sequelize.authenticate();
    });

    afterAll(async () => {
        await sequelize.close();
    })

    it('an attack instance should be able to be created', async () => {
        const attack1 = await Attack.create({
            title: 'Fireball',
            mojoCost: 10,
            staminaCost: 5
        })

        expect(attack1.title).toEqual('Fireball');
        expect(attack1.mojoCost).toEqual(10);
        expect(attack1.staminaCost).toEqual(5);
    });
})