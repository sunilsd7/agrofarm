const models = require("..//models");
const validator = require("fastest-validator");

function product(req, res) {
  const post = {
    product_name: req.body.product_name,
    price: req.body.price,
    quantity: req.body.quantity,
  };

  const schema = {
    product_name: { type: "string", optional: false, max: "200" },
    price: { type: "number", optional: false },
    quantity: { type: "string", optional: false, max: "100" },
  };

  const v = new validator();
  const ValidatorResponse = v.validate(post, schema);

  if (ValidatorResponse !== true) {
    return res.status(400).json({
      message: "Vaidation failed!",
      error: ValidatorResponse,
    });
  }

  models.Product.create(post)
    .then((result) => {
      res.status(201).json({
        message: "Post created sucessfully",
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
  models.Product.findByPk(id).then((result) => {
    if (result == null) {
      res.status(500).json({
        message: "Something went wrong",
      });
    }
    res
      .status(201)
      .json(result)
      .then((error) => {
        res.status(404).json((error) => {
          message: "Something went wrong!";
        });
      });
  });
}
function update(req, res) {
  const id = req.params.id;
  const updatepost = {
    product_name: req.body.product_name,
    price: req.body.price,
    quantity: req.body.quantity,
  };
  console.log(id);
  console.log(updatepost);

  models.Product.update(updatepost, { where: { id: id } })
    .then((result) => {
      res.status(201).json({
        message: "Post updated sucessfully!",
        update: updatepost,
      });
    })
    .catch((error) => {
      res.status(404).json({
        message: "Something went wrong!",
        error: error,
      });
    });
}

module.exports = {
  product: product,
  show: show,
  update: update,
};
