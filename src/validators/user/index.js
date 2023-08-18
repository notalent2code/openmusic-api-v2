const InvariantError = require("../../errors/InvariantError");
const { UserSchema } = require("./schema");

const UserValidator = {
  validateUserPayload: (payload) => {
    const validationResult = UserSchema.validate(payload);
    if (validationResult.error) {
      throw new InvariantError(validationResult.error.message);
    }
  },
};

module.exports = UserValidator;
