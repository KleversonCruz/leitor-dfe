export interface Service<TModel> {
  execute(...args: any[]): Promise<TModel> | TModel;
}
