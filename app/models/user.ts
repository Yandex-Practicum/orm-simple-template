import { DataType, Model, Table, Column } from 'sequelize-typescript';
import { sequelize } from '../init';
import { ModelAttributes } from 'sequelize/types';

export interface IUser {
    firstName: string;
    lastName: string;
}

export const userModel: ModelAttributes<Model, IUser>= {
    firstName: {
      type: DataType.STRING,
      allowNull: false
    },
    lastName: {
        type: DataType.STRING,
    }
  };