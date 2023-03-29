const express = require("express");
const farmcontroller = require("../controller/farmcontroller");
const checkAuthMidddleware = require("../middleware/check-auth");

const router = express.Router();
/**
 * @swagger
 *  components:
 *    schemas:
 *       farm:
 *        type: object
 *        properties:
 *          name:
 *           type: string
 *           description: address
 *          address:
 *           type: string
 *           description: address
 *          fb_link:
 *           type: string
 *           description: fb_link
 *          category_id:
 *           type: integer
 *           description: category_id
 */

/**
 * @swagger
 * tags:
 *     name: farm
 *     description: The farm managing API endpoint
 */

/**
 * @swagger
 *  /post:
 *   post:
 *     summary: Create a new hotel
 *     tags: [farm]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/farm'
 *     responses:
 *      201:
 *          description:  farm Created Successfully
 *      500:
 *          description: Some Server Error
 */

router.post("/", checkAuthMidddleware.checkAuth, farmcontroller.farm);

/**
 * @swagger
 *  /post/{id}:
 *  get:
 *     summary: Get the hotel by id
 *     tags: [farm]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The hotel id
 *     responses:
 *      200:
 *          description: The hotel by id
 *      404:
 *          description: The hotel was not found
 */
router.get("/:id", farmcontroller.show);
/**
 * @swagger
 *  /post:
 *  get:
 *     summary: Returns the list of all the hotel
 *     tags: [farm]
 *     security:
 *	     - jwt: []
 *     responses:
 *      200:
 *          description: The list of the hotel
 */
router.get("/", farmcontroller.index);
/**
 * @swagger
 *  /post/{id}:
 *   put:
 *     summary: Update the batch by id
 *     tags: [farm]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The farm id
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/farm'
 *     responses:
 *      200:
 *          description: farm Updated Successfully
 *      500:
 *          description: Some Server Error
 */
router.put("/:id", checkAuthMidddleware.checkAuth, farmcontroller.update);
/**
 * @swagger
 *  /post/{id}:
 *   delete:
 *     summary: Delete the farm by id
 *     tags: [farm]
 *     security:
 *	     - jwt: []
 *     parameters:
 *        - in: path
 *          name: id
 *          schema:
 *              type: integer
 *              required: true
 *              description: The farm id
 *     responses:
 *      200:
 *          description: farm id  Deleted Successfully
 *      500:
 *          description: Some Server Error
 */
router.delete("/:id", checkAuthMidddleware.checkAuth, farmcontroller.destroy);

module.exports = router;
