import { ObjectId } from "mongodb";


export default class Statement {
  constructor(photoUrl: string, personName: string, quote: string, id?: ObjectId) { }
}