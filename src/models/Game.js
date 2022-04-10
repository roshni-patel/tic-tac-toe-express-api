import Player from "./Player";

const game = (sequelize, DataTypes) => {
    const Game = sequelize.define(
        'game',
        {
            id: {
                type: DataTypes.INTEGER,
                primaryKey: true, 
                autoIncrement: true
            },
            winner: {
                type: DataTypes.STRING(16), 
                allowNull: true, 
            },
            player_x_id: {
                type: DataTypes.INTEGER, 
            }, 
            player_x: {

            }, 
            player_o_id: {
                type: DataTypes.INTEGER, 
            },
            player_o: {

            }
        },
        // By default, Sequelize automatically adds the fields createdAt and updatedAt to every model, using the data type DataTypes.DATE.
        // Those fields are automatically managed as well - whenever you use Sequelize to create or update something, those fields will be set correctly.  
        // freezeTableName: true - this refers to auto-pluralization performed by Sequelize, e.g. model name game --> table name games
        {
            timestamps: true, 
            freezeTableName: true,
        }
    );
    
    // One to many association
    Game.hasMany(Player, {
        foreignKey: 'playerId'
    });
    Player.belongsTo(Game);

    // This creates the table if it doesn't exist (and does nothing if it already exists)
    Game.sync()
    return Game; 
}

export default game; 