// @desc            Get all bootcamps
// @route           GET /api/v1/bootcamps
// @access          Puplic
exports.getBootcamps = (req, res) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

// @desc            Get single bootcamps
// @route           GET /api/v1/bootcamps/:id
// @access          Puplic
exports.getBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: `Get bootcamp ${req.params.id}` });
};

// @desc            Create bootcamp
// @route           POST /api/v1/bootcamps
// @access          Private
exports.createBootcamp = (req, res) => {
  res.status(200).json({ success: true, msg: 'Create new bootcamp' });
};

// @desc            Update bootcamp
// @route           PUT /api/v1/bootcamps/:id
// @access          Private
exports.updateBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Update bootcamp ${req.params.id}` });
};

// @desc            Delete bootcamp
// @route           DELETE /api/v1/bootcamps/:id
// @access          Private
exports.deleteBootcamp = (req, res) => {
  res
    .status(200)
    .json({ success: true, msg: `Delete bootcamp ${req.params.id}` });
};
