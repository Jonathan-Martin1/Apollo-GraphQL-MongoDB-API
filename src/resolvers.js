import { Stats } from './models/Stats';

export const resolvers = {
  Query: {
   country: () =>'Albania',
   year: () => '2000',
   areaSQKM: () => 28748,
   totalPopulation: () => 3401198,
   findStats: () => Stats.find()
  },
  Query: {
   country: () => 'Albania',
   year: () => '2001',
   areaSQKM: () => 28748,
   totalPopulation: () => 3073734,
   findStats: () => Stats.find()
  },
  Query: {
   country: () => 'Albania',
   year: () => '2002',
   areaSQKM: () => 28748,
   totalPopulation: () => 3093465,
   findStats: () => Stats.find()
  },
  Query: {
   country: () => 'Albania',
   year: () => '2003',
   areaSQKM: () => 28748,
   totalPopulation: () => 3111162,
   findStats: () => Stats.find()
  },

  Mutation: {
   createStats: async (_, {country, year, areaSQKM, totalPopulation}) => {
    const albaniaStats = new Stats({country, year, areaSQKM, totalPopulation});
    await albaniaStats.save();
    return albaniaStats;
   }
  }
};