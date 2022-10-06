"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserInstance = void 0;
const sequelize_1 = require("sequelize");
const database_config_1 = __importDefault(require("../config/database.config"));
const doctor_1 = require("./doctor");
class UserInstance extends sequelize_1.Model {
}
exports.UserInstance = UserInstance;
UserInstance.init({
    patientId: {
        type: sequelize_1.DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false
    },
    patientName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Patient name is required'
            },
            notEmpty: {
                msg: 'Please provide a Patient name'
            }
        }
    },
    age: {
        type: sequelize_1.DataTypes.NUMBER,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Age is required'
            },
            notEmpty: {
                msg: 'Please provide a Age'
            }
        }
    },
    hospitalName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Hospital name is required'
            },
            notEmpty: {
                msg: 'Please provide a a valid Hospital name'
            }
        }
    },
    weight: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Weight is required'
            },
            notEmpty: {
                msg: 'Please provide a valid Weight'
            }
        }
    },
    height: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'Height is required'
            },
            notEmpty: {
                msg: 'Please provide a Height'
            }
        }
    },
    bloodGroup: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        validate: {
            notNull: {
                msg: 'bloodgroup is required'
            },
            notEmpty: {
                msg: 'Please provide a bloodgroup'
            }
        }
    },
    genotype: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Genotype is required'
            },
            notEmpty: {
                msg: 'Please provide a a valid Genotype'
            }
        }
    },
    bloodPressure: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Blood pressure is required'
            },
            notEmpty: {
                msg: 'Please provide a a valid Blood pressure'
            }
        }
    },
    HIV_status: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'HIV status report is required'
            },
            notEmpty: {
                msg: 'Please provide a valid HIV status report'
            }
        }
    },
    hepatitis: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            notNull: {
                msg: 'Hepatitis report is required'
            },
            notEmpty: {
                msg: 'Please provide a a valid Hepatitis report'
            }
        }
    }
}, {
    sequelize: database_config_1.default,
    tableName: 'doctor'
});
UserInstance.hasMany(doctor_1.TodoInstance, { foreignKey: 'doctorId', as: 'hospital' });
doctor_1.TodoInstance.belongsTo(UserInstance, { foreignKey: 'doctorId', as: 'doctor' });
