import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:Rugby2011@localhost:3306/pitu');

export default sequelize;
