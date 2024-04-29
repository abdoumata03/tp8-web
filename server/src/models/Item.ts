import mongoose, { Schema, Types, model } from "mongoose";
import { IComptesSchema, IITem, IPassportSchema } from "@/types/models";

const itemSchema = new Schema<IITem>(
  {
    name: String,
    description: String,
  },
  { timestamps: true }
);

const Item = model<IITem>("Item", itemSchema, "items");

const passportSchema = new Schema<IPassportSchema>(
  {
    nationalId: String,
    item: {
      type: Schema.Types.ObjectId,
      ref: "itemSchema",
    }
  },
  { timestamps: true }
);

const compteSchema = new Schema<IComptesSchema>(
  {
    compteName: String,
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "itemSchema",
      required: true,
    },
  },
  { timestamps: true }
);

const Passport = model<IPassportSchema>(
  "passportSchema",
  passportSchema,
  "my_passports"
);
const Compte = model<IComptesSchema>("comptesSchema", compteSchema, "my_accounts");

export { Passport, Compte };

export default Item;
