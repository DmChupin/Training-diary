export enum Levels {
  Easy = 'easy',
  Medium = 'medium',
  High = 'high',
}

export interface ITrainig {
  _id: string;
  name: string;
  level: Levels;
  description: string;
  imageURL: string;
}
