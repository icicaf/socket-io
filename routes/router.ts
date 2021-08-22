import { Router, Request, Response } from "express";

const router = Router();

router.get('/mensaje', (req: Request, res: Response) => {

    const name = req.body.name;

    res.json({
        ok:true,
        mensaje: name,
    })
})

export default router; 