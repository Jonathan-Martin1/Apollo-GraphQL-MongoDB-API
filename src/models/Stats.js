import mongoose from 'mongoose';

export const Stats = mongoose.model("Stats", new mongoose.Schema ({
 country:{type:String, required:true},
 year:{type:String, required:true},
 areaSQKM:{type:String, required:true},
 totalPopulation:{type:String, required:true},
}));