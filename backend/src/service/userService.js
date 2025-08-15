import userRepository from '../repositories/userRepository.js';
import validationError from '../utils/errors/validationError.js';

export const signUpService = async (data) => {
  try {
    const newUser = userRepository.create(data);
    return newUser;
  } catch (error) {
    console.error('user service error : ', error);
    if (error.name === 'ValidationError') {
      throw new validationError(
        {
          error: error.errors
        },
        error.message
      );
    }
    if (error.message === 'MongoServerError' && error.code === 11000) {
      throw new validationError(
        {
          error: ['a user with same email or username already exists']
        },
        error.message
      );
    }
  }
};
