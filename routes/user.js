const express = require("express");
const usercontroller = require("../controller/user.controller");

const router = express.Router();

/**
 * @swagger
 *  components:
 *    schemas:
 *       signup:
 *        type: object
 *        properties:
 *          name:
 *           type: string
 *           description: name
 *          email:
 *           type: string
 *           description: email
 *          password:
 *           type: string
 *           description: password
 */

/**
 * @swagger
 *  components:
 *    schemas:
 *       login:
 *        type: object
 *        properties:
 *          email:
 *           type: string
 *           description: email
 *          password:
 *           type: string
 *           description: password
 */

/**
 * @swagger
 * tags:
 *     name: signup
 *     description: The signup managing API endpoint
 */

/**
 * @swagger
 *  /user:
 *   post:
 *     summary: Create a new user
 *     tags: [signup]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/usersignup'
 *     responses:
 *      201:
 *          description:  user Created Successfully
 *      500:
 *          description: Some Server Error
 */

router.post("/", usercontroller.signup);

/**
 * @swagger
 *  /user/login:
 *   post:
 *     summary: Create a new user
 *     tags: [signup]
 *     security:
 *	     - jwt: []
 *     requestBody:
 *      content:
 *       application/json:
 *        schema:
 *          $ref: '#/components/schemas/login'
 *     responses:
 *      201:
 *          description:  user Created Successfully
 *      500:
 *          description: Some Server Error
 */

router.post("/login", usercontroller.login);

module.exports = router;
