import { Request, Response } from 'express';
import {
  User
} from '../model/modelDemo'
import sequelize, { Op } from 'sequelize'
import databaseInstance from '../../config/db'
import { BaseController } from './BaseController';

export class DemoController extends BaseController {
  constructor(public models: any) {
    super(models)
  }


  
}
