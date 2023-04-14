import { Router } from "express";

const router = Router();

router.get("/test", (req,res)=> {
    res.send({ message: "The test works"});
});

export default router;