// require('pg').defaults.parseInt8 = true
import database from '../../config/db'
import sequelize from 'sequelize'


// Database connection instance
let databaseInstance = database

// User Interface


export interface UserInstance{}
 

// Sequelize Model
export const User = databaseInstance.define("user",
  {
    id: {
      type: sequelize.BIGINT,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
    },
    name: {
      type: sequelize.STRING,
      allowNull: false,
    },
    roleId: {
      type: sequelize.BIGINT,
      allowNull: false,
    },
    organizationId: {
      type: sequelize.BIGINT,
      allowNull: false,
    },
    emailId: {
      type: sequelize.STRING,
      allowNull: false,
      unique: true,
    },
    password: {
      type: sequelize.STRING,
      allowNull: true,
    },
    profileImage: {
      type: sequelize.STRING,
      allowNull: true,
    },
    // createdAt, lastUpdatedAt and deletedAt managed by Sequelize
    createdAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
    updatedAt: {
      type: sequelize.DATE,
      allowNull: false,
    },
    deletedAt: {
      type: sequelize.DATE,
      allowNull: true,
    },
  },
  {
    // Auto-create timestamps
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    // Enable soft deletes
    paranoid: true,
  },
)




