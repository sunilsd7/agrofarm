const validator = require("fastest-validator");
const models = require("../models");

function farm(req, res) {
  const post = {
    name: req.body.name,
    address: req.body.address,
    fb_link: req.body.fb_link,
    category_id: req.body.category_id,
  };
  

  const schema = {
    name: { type: "string", optional: false, max: "100" },
    address: { type: "string", optional: false, max: "500" },
    fb_link: { type: "string", optional: false, max: "600" },
    category_id: { type: "number", optional: false },
  };

  const v = new validator();
  const ValidatorResponse = v.validate(post, schema);

  if (ValidatorResponse !== true) {
    return res.status(400).json({
      message: "Vaidation failed!",
      error: ValidatorResponse,
    });
  }

  models.Post.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Successfully post created",
        post: result,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}
function show(req, res) {
  const id = req.params.id;
  models.Post.findByPk(id)
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}

function index(req, res) {
  models.Post.findAll()
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((error) => {
      res.status(500).json({
        message: "Something went wrong!",
      });
    });
}
function update(req, res) {
  const id = req.params.id;
  const updatePost = {
    name: req.body.name,
    address: req.body.address,
    fb_link: req.body.fb_link,
    category_id: req.body.category_id,
  };
  const user_id = 1;
  const schema = {
    name: { type: "string", optional: false, max: "100" },
    address: { type: "string", optional: false, max: "500" },
    fb_link: { type: "string", optional: false, max: "600" },
    category_id: { type: "number", optional: false },
  };

  const v = new validator();
  const ValidatorResponse = v.validate(updatePost, schema);

  if (ValidatorResponse !== true) {
    return res.status(400).json({
      message: "Vaidation failed!",
      error: ValidatorResponse,
    });
  }

  models.Post.update(updatePost, { where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Post updated sucessfully",
        update: updatePost,
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: " Something went wrong!",
        error: error,
      });
    });
}

function destroy(req, res) {
  const id = req.params.id;
  const user_id = 1;

  models.Post.destroy({ where: { id: id } })
    .then((result) => {
      res.status(200).json({
        message: "Post deleted sucessfully",
      });
    })
    .catch((error) => {
      res.status(500).json({
        message: " Something went wrong!",
        error: error,
      });
    });
}

module.exports = {
  farm: farm,
  show: show,
  index: index,
  update: update,
  destroy: destroy,
};
