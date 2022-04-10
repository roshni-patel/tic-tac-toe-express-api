const player = (sequelize, DataTypes) => {
    const Player = sequelize.define(
        'player',
        {
            playerId: {
                type: DataTypes.INTEGER, 
                primaryKey: true, 
                autoIncrement: true, 
            }, 
            name: {
                type: DataTypes.STRING(128), 
            },
            // For UUIDs, use DataTypes.UUID. It becomes the UUID data type for PostgreSQL and SQLite, and CHAR(36) for MySQL.
            // Sequelize can generate UUIDs automatically for these fields, simply use DataTypes.UUIDV1 or DataTypes.UUIDV4 as the default value
            // Not neccessary right now, but could be useful if we decide to later add authentication
            uid: {
                type: DataTypes.UUID,
                defaultValue: DataTypes.UUIDV4,
            }
        },
        {
        timestamps: true, 
        freezeTableName: true,
        }
    ); 
    
    // This creates the table if it doesn't exist (and does nothing if it already exists)
    Player.sync();
    return Player; 
}

export default player; 