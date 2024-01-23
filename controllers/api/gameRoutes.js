const router = require('express').Router();
const { Game, Location } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', withAuth, async (req, res) => {
  try {
      const data = await Game.findAll({
        include: [{ model: Location }]
      });

      res.status(200).json(data);
  } catch (err) {
      res.status(500).json(err);
  }
});

router.put('/:id', withAuth, async (req, res) => {  
  try { await Game.update(
    {
      // You can only update and the locations_id by attaching it to the request body.
      locations_id: req.body.locations_id
    },
    {
      // Gets the game based on the id given in the request parameters
      where: {
        id: req.params.id,
      },
    })
    updated = {locations_id: req.body.locations_id}
  res.status(200).json(updated);
} catch (err) {
  res.status(500).json(err);
}
})

router.post('/', withAuth, async (req, res) => {
  try {
    const newGame = await Game.create({
      ...req.body,
      user_id: req.session.user_id,
    });

    res.status(200).json(newGame);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', withAuth, async (req, res) => {
  try {
    const gameData = await Game.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });

    if (!gameData) {
      res.status(404).json({ message: 'No game found with this id!' });
      return;
    }

    res.status(200).json(gameData);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
