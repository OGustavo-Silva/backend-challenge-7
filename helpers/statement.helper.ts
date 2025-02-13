export class StatementValidator {
  static validateGetQuery(query: any) {
    return !!query.id;
  }
}