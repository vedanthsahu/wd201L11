"use strict";
const { Model } = require("sequelize");
module.e
        publicurl,
        adminID,
      });
      return createElection;
    }

    static retriveElections(adminID) {
      let retriveElections = this.findAll({
        where: {
          adminID,
        },
        order: [["id", "ASC"]],
      });
      return retriveElections;
    }

    static retriveElection(id) {
      let retriveElection = this.findOne({
        where: {
          id,
        },
      });
      return retriveElection;
    }

    static associate(models) {
      // define association here
      Election.belongsTo(models.admin, {
        foreignKey: "adminID",
      });

      Election.hasMany(models.questions, {
        foreignKey: "electionId",
      });

      Election.hasMany(models.VoterRel, {
        foreignKey: "electionId",
      });
    }
  }
  Election.init(
    {
      electionName: DataTypes.STRING,
      launched: DataTypes.BOOLEAN,
      ended: DataTypes.BOOLEAN,
      publicurl: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Election",
    }
  );
  return Election;
};
