const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Parks extends Model {}

Parks.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        latitude: {
            type: DataTypes.INTEGER,
            validate: {
              min: -90,
              max: 90
            }
        },
        longitude: {
            type: DataTypes.INTEGER,
            validate: {
                min: -180,
                max: 180
            }
        },
        basketballCourt: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        tennisCourt: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        volleyballCourt: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        soccerField: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        baseballField: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        icerink: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        skateparks: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        horseshoeCourt: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        pickleball: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        discGolf: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        grills: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        picnicTables: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        picnicPavillion: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        picnicShelter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fireRing: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        lake: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        boatLaunch: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        fishing: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        beach: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        playgrounds: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        trails: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        aquaticCenter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        canoeRentals: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        dogPark: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        recCenter: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
    },
    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'parks',
    }
);

module.exports = Parks;