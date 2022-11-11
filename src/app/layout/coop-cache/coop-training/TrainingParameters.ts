export interface TrainingParameters {
  trainSize: number;
  optimizer: 'adam' | 'sgd' | 'adagrad' | 'sgdm' | 'rmsprop';
  loss: 'mse' | 'mae' | 'msle';
  hiddenSize: number;
  lookBack: number;
  epochs: number;
  batchSize: number;
}
