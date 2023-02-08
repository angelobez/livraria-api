import Sequelize from "sequelize";

const sequelize = new Sequelize(
  "postgres://kgzykxxe:JlXEpEwoeTJ80CyqY5kPBzlkLP0ZOjiO@ruby.db.elephantsql.com/kgzykxxe",
  {
    dialect: "postgres",
    define: {
      timestamps: false,
    },
  }
);

export default sequelize;
