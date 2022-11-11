export interface CacheParameters {
  hiddenSize: number;
  activation: 'relu' | 'identity' | 'logistic' | 'tanh';
  solver: 'adam' | 'lbfgs' | 'sgd';
  batchSize: number;
  alpha: number;
  learningRate: 'constant' | 'invscaling';
  learningRateInit: number;
  randomState: number;
  tol: number;
  maxIter: number;
  beta1: number;
  beta2: number;
  earlyStopping: 1 | 0;
}
