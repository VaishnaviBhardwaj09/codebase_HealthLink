import { Request, Response } from 'express';

export class BaseController {
  baseModel: any

  constructor(public models: any) {
    this.baseModel = models
  }

  readAll = (req: Request, res: Response) => {
    this.baseModel
      .findAndCountAll()
      .then((result: any) => {
        res.status(200).send(result)
      })
      .catch((err: any) => {
        res.status(400).send(err)
      })
  }

  read = (req: Request, res: Response) => {
    this.baseModel
      .findByPk(req.params.id)
      .then((result: any) => {
        if (result) {
            res.status(200).send(result)
        } else {
          res.status(404).send('Record not Found')
        }
      })
      .catch((err: any) => {
        res.status(400).send(err)
      })
  }

  create = (req: Request, res: Response) => {
    this.baseModel
      .create(req.body)
      .then((result: any) => {
        res.status(201).send(result)
      })
      .catch((err: any) => {
        res.status(400).send(err)
      })
  }

  update = (req: Request, res: Response) => {
    this.baseModel
      .update(req.body, {
        fields: Object.keys(req.body),
        where: { id: req.params.id },
      })
      .then((affectedRows: [number, any]) => {
        if (affectedRows[0]) {
            res.status(200).send(affectedRows)
        } else {
          res.status(404).send('Record not found')
        }
      })
      .catch((err: any) => {
        res.status(400).send(err)
      })
  }

  delete = (req: Request, res: Response) => {
    this.baseModel
      .destroy({
        where: { id: req.params.id },
      })
      .then((removedRows: number) => {
        if (removedRows) {
            res.status(200).send(removedRows)
        } else {
          res.status(404).send('Record not found')
        }
      })
      .catch((err: any) => {
        res.status(400).send(err)
      })
  }
}
