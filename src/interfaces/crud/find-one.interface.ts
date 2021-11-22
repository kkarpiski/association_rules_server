export interface FindOneInterface {
  conditions?: Record<string, any>;
  options?: Record<string, any>;
  projection?: Record<string, any> | string;
}
