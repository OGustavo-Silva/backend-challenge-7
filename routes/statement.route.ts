import express, { Request, Response } from 'express';
import { ObjectId } from 'mongodb';
import { collections } from '../service/database.service';
import Statement from '../model/statement';

export const router = express.Router();

router.use(express.json());

router.get('/', async (req: Request, res: Response) => {
  try {
    const statements = (await collections.statement!.find({}).toArray()) as Statement[];

    res.status(200).send(statements);
  } catch (error) {
    res.status(500).send(`Get all statements Error: ${error}`);
  }
});

router.get('/:id', async (req: Request, res: Response) => {
  try {
    const id = req?.params?.id

    const query = { _id: new ObjectId(id) };
    const statement = await collections.statement!.findOne({ query }) as Statement;

    res.status(200).send(statement);
  } catch (error) {
    res.status(500).send(`Get statement Error: ${error}`);
  }
});

router.post('/', async (req: Request, res: Response) => {
  try {
    const newStatement = req.body as Statement;
    const result = await collections.statement?.insertOne(newStatement);

    result
      ? res.status(201).send(`Successfully created a new statement with id ${result.insertedId}`)
      : res.status(500).send("Failed to create new statement.");
  } catch (error) {
    console.error(error);
    res.status(400).send(`Error on post: ${error}`);
  }
});