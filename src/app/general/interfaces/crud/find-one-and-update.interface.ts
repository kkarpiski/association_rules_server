export interface FindOneAndUpdateInterface {
  conditions?: Record<string, any>;
  options?: Record<string, any>;
  update: Record<string, any>;
}
