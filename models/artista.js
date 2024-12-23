module.exports = (sequelize, DataTypes) => {
  const Artista = sequelize.define(
    "Artista",
    {
      nome: DataTypes.STRING,
    },
    {
      tableName: "Artista",
    }
  );

  Artista.associate = (models) => {
    Artista.belongsToMany(models.Album, { 
      through: 'AlbumArtistas', 
      foreignKey: 'artistaId', 
      otherKey: 'albumId' 
    });
    Artista.belongsToMany(models.Genero, { 
      through: 'ArtistaGeneros', 
      foreignKey: 'artistaId', 
      otherKey: 'GeneroId' 
    });
  };

  return Artista;
};
