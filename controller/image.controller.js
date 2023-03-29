function upload(req, res) {
  if (req.file.filename) {
    res.status(202).json({
      message: "Image uploaded sucessfully",
      url: req.file.filename,
    });
  } else {
    res.status(500).json({
      message: "Something went wrong!",
    });
  }
}

module.exports = {
  upload: upload,
};
