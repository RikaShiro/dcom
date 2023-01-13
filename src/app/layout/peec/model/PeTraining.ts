export class PeTraining {
  bagging_fraction?: number;
  feature_fraction?: number;
  iterations?: number;
  learinin_rate?: any;
  learning_rate?: any;
  metric?: string;
  num_leaves?: number;
  subsample_freq?: number;
  train_data?: number;
  train_time?: any[];
}

export class TrainingObject {
  bagging_fraction?: number;
  feature_fraction?: number;
  learning_rate?: number;
  iterations?: string[];
  num_leaves?: number;
  subsample_freq?: number;
}
