const router = require('express').Router();
const { Game, Location } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
    try {
        const onlyData = await Location.findAll();

        res.status(200).json(onlyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.get('/withGames', withAuth, async (req, res) => {
    try {
        const onlyData = await Location.findAll({
            include: [{ model: Game }]
          });
        
        res.status(200).json(onlyData);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.post('/', withAuth, async (req, res) => {
    try {
        const newLocation = await Location.create({
            ...req.body,
            user_id: req.session.user_id,
        });

        res.status(200).json(newLocation);
    } catch (err) {
        res.status(400).json(err);
    }
});

router.delete('/:id', withAuth, async (req, res) => {
    try {
        const locationData = await Location.destroy({
            where: {
                id: req.params.id,
                user_id: req.session.user_id,
            },
        });

        if (!locationData) {
            res.status(404).json({ message: 'No location found with this id!' });
            return;
        }

        res.status(200).json(locationData);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;
