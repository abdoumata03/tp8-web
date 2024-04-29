import mongoose from "mongoose"

export interface IITem {
  name: string
  description: string
  passport: mongoose.Schema.Types.ObjectId
}


export interface IPassportSchema {
  nationalId: string
  item: IITem
}


export interface IComptesSchema {
  compteName: string
  item: IITem

}


