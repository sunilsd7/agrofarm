const express = require("express");
const productcontroller = require("../controller/productcontroller");

const router = express.Router();
/**
 * @swagger
 *  components:
 *    schemas:
 *       product:
 *        type: object
 *        properties:
 *          product_name:
 *           type: string
 *           description: product_name
 *          price:
 *           type: integer
 *           description: price
 *          quantity:
 *           type: string
 *           description: quantity
 */

/**
 * @swagger
 * tags:
 *     name: product
 *     description: The product managing API endpoint
 */

/**
 * @swagger
 *  /product:
 *   post:
 *     summary: Create a new product
 *     tags: [product]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/product'
 *     responses:
 *      201:
 *          description:  product list Created Successfully
 *      500:
 *          description: Some Server Error
 */
router.post("/", productcontroller.product);

/**
 * @swagger
 *  /product/{id}:
 *  get:
 *     summary: Get the farm by id
 *     tags: [product]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The product id
 *     responses:
 *      200:
 *          description: The product by id
 *      404:
 *          description: The product was not found
 */
router.get("/:id", productcontroller.show);

/**
 * @swagger
 *  /product/{id}:
 *   put:
 *     summary: Update the batch by id
 *     tags: [product]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The  product id
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/product'
 *     responses:
 *      200:
 *          description: product list Updated Successfully
 *      500:
 *          description: Some Server Error
 */

router.put("/:id", productcontroller.update);

module.exports = router;
