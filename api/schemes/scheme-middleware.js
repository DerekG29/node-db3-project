const { checkId } = require('./scheme-model');

const checkSchemeId = async (req, res, next) => {
  const { scheme_id } = req.params;
  const result = await checkId(scheme_id);
  if (result.scheme_id) {
    next();
  } else {
    res.status(400).json({
      message: `scheme with scheme_id ${scheme_id} not found`
    });
  }
}

/*
  If `scheme_name` is missing, empty string or not a string:

  status 400
  {
    "message": "invalid scheme_name"
  }
*/
const validateScheme = (req, res, next) => {

}

/*
  If `instructions` is missing, empty string or not a string, or
  if `step_number` is not a number or is smaller than one:

  status 400
  {
    "message": "invalid step"
  }
*/
const validateStep = (req, res, next) => {

}

module.exports = {
  checkSchemeId,
  validateScheme,
  validateStep,
}
