const router = require('express').Router();
const AdminMiddleware = require('../middlewares/admin.middleware')
const AuthMiddleware = require('../middlewares/auth.middleware')
const ShopController = require('../controllers/shop.controller')

router.get('/bouquet/categories',ShopController.getCategories)
router.post('/bouquet/categories',AuthMiddleware,AdminMiddleware,ShopController.createCategory)
router.put('/bouquet/categories',AuthMiddleware,AdminMiddleware,ShopController.updateCategory)
router.delete('/bouquet/categories',AuthMiddleware,AdminMiddleware,ShopController.deleteCategory)
router.get('/bouquet/sentiments',ShopController.getSentiments)
router.post('/bouquet/sentiments',AuthMiddleware,AdminMiddleware,ShopController.createSentiment)
router.put('/bouquet/sentiments',AuthMiddleware,AdminMiddleware,ShopController.updateSentiment)
router.delete('/bouquet/sentiments',AuthMiddleware,AdminMiddleware,ShopController.deleteSentiment)
router.post("/plants/type",AuthMiddleware,AdminMiddleware,ShopController.addPlantType);
router.delete("/plants/type", AuthMiddleware,AdminMiddleware, ShopController.deletePlantType);
router.get("/plants/type",ShopController.getAllPlantsTypes);
module.exports=router;