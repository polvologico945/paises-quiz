import { Router } from "express";
import{
    criar,
    pergunta,
    responder,
    ranking
} from "./controllers/jogadorController.js";

const router = Router();

router.post("/jogadores", criar);
router.get("/pergunta", pergunta);
router.post("/responder", responder);
router.get("/ranking", ranking);

/*router.get("/", (req, res) => {
    res.send("Hello, World!");
});*/

export default router;