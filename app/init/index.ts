
import { Sequelize, SequelizeOptions } from 'sequelize-typescript';
import { userModel, IUser } from '../models/user';

const sequelizeOptions: SequelizeOptions = {
    host: 'localhost',
    port: 5477,
    username: 'postgres',
    password: 'newPassword',
    database: 'my-db-name',
    dialect: 'postgres', // 'mysql', 'sqlite', 'mariadb', 'mssql'
};

// Создаем инстанс Sequelize
export const sequelize = new Sequelize(sequelizeOptions); 

// Инициализируем модели
export const User = sequelize.define('User', userModel, {});

export async function dbConnect() {
    try {
        await sequelize.authenticate(); // Проверка аутентификации в БД
        await sequelize.sync(); // Синхронизация базы данных
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}

