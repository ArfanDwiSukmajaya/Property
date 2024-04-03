import express from 'express';
import * as propertyController from '../controllers/PropertyController';


const router = express.Router();

router.post('/', propertyController.createProperty);
router.get('/', propertyController.getAllPropertiesController);
router.get('/:id', propertyController.getPropertyById);
router.put('/:id', propertyController.updateProperty);
router.delete('/:id', propertyController.deleteProperty);

export default router;
