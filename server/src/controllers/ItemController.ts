import Item, { Compte, Passport } from "@/models/Item";
import { NextFunction, Response, Request } from "express";

export async function index(req: Request, res: Response) {
  res.status(200).json({
    data: await Item.find(),
  });
}

export async function show(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await Item.findById(req.params.id),
  });
}

export async function join(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await Passport.aggregate([
      {
        $lookup: {
          from: "items",
          localField: "item",
          foreignField: "_id",
          as: "passportWithItems",
        },
      },
    ]),
  });
}

export async function store(
  req: Request<
    never,
    never,
    {
      name: string;
      description: string;
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Item.create(req.body),
  });
}

export async function storePassport(
  req: Request<
    never,
    never,
    {
      nationalId: string;
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Passport.create(req.body),
  });
}

export async function getPassports(req: Request, res: Response) {
  res.status(200).json({
    data: await Passport.find(),
  });
}

export async function storeCompte(
  req: Request<
    never,
    never,
    {
      compteName: string;
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Compte.create(req.body),
  });
}

export async function update(
  req: Request<
    { id: string },
    never,
    {
      name: string;
      description: string;
    }
  >,
  res: Response
) {
  res.status(201).json({
    data: await Item.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
    }),
  });
}

export async function destroy(req: Request<{ id: string }>, res: Response) {
  res.status(200).json({
    data: await Item.findByIdAndDelete(req.params.id),
  });
}
