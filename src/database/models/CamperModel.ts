// import { model, Schema } from "mongoose";

import { Document, model, Schema } from "mongoose";

export interface CamperInt extends Document {
    discordId: string,
    round: number,
    day: number,
    timestamp: number,

}

export const Camper = new Schema({
    discordId: String,
    round: Number,
    day: Number,
    timestamp: Number,
});

export default model<CamperInt>("campers", Camper);