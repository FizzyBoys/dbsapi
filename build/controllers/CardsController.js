"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CardsController {
    constructor(app, service) {
        this.app = app;
        this.cardService = service;
    }
    makeRoutes() {
        const { app, cardService } = this;
        app.get('/', (req, res) => {
            cardService.getAll().then(data => {
                res.send(data);
            });
        });
        app.post('/create', (req, res) => {
            const { body } = req;
            cardService.createCard(body).then(confirmation => {
                res.send(confirmation);
            });
        });
        app.delete('/:id', (req, res) => {
            const { id } = req.params;
            console.log(id);
            cardService.deleteOne(id).then(response => res.send(response));
        });
    }
}
exports.CardsController = CardsController;
//# sourceMappingURL=CardsController.js.map