import {Sequelize} from 'sequelize';

const sequelize = new Sequelize('mysql://root:xxxx@localhost:3306/pitu');

export default sequelize;
