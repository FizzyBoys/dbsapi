import { CardsService } from '../services/CardsService';
const CS = new CardsService();

export class CardsController {
    constructor() {}
    makeRoutes(app, mongo) {
        app.get('/', (req, res) => {
            CS.getAll(mongo).then(data => {
                // res.set('Set-Cookie', 'cookie=cookie');
                res.send(data);
            });
        });
    }
}
