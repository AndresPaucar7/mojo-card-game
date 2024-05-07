const sequelize = require('../db/config');
const { describe, it, expect, beforeAll, afterAll } = require('@jest/globals');
const Card = require('./Card');

describe('Card tests', () => {
    beforeAll(async () => {
        await sequelize.authenticate();
    })

    afterAll(async() => {
        await sequelize.close();
    })

    it('Create and save created card', async () =>{
        const card = await Card.create({
            name: 'Fireball',
            mojo: 100,
            stamina: 50,
            imgUrl: "https://www.deviantart.com/avator/art/Aang-airbending-farts-52156377"
        });

    expect(card.name).toEqual('Fireball');
    expect(card.mojo).toEqual(100);
    expect(card.stamina).toEqual(50);
    expect(card.imgUrl).toEqual("https://www.deviantart.com/avator/art/Aang-airbending-farts-52156377");
    })
});