module.exports = (sequelize, DataTypes) => {
  const Album = sequelize.define("Album", {
    titulo: DataTypes.STRING,
    anoLancamento: DataTypes.INTEGER,
    capa: DataTypes.STRING,
  });

  Album.associate = (models) => {
    Album.belongsToMany(models.Artista, { 
      through: 'AlbumArtistas', 
      foreignKey: 'albumId', 
      otherKey: 'artistaId' 
    });
    Album.belongsToMany(models.Genero, { 
      through: 'AlbumGeneros', 
      foreignKey: 'albumId', 
      otherKey: 'GeneroId' 
    });
    Album.hasMany(models.Faixa, { foreignKey: 'albumId' });
  };

  return Album;
};
