import mongoose from 'mongoose';

const userSchema = mongoose.Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: [true, 'Email already exists'],
      lowercase: true,
      match: [
        // eslint-disable-next-line no-useless-escape
        /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
        'Please provide a valid email address'
      ]
    },
    password: {
      type: String,
      required: true
    },
    username: {
      type: String,
      required: [true, 'Username is required'],
      unique: [true, 'Username already exists'],
      lowercase: true,
      match: [/^[a-zA-Z0-9_]{3,20}$/, 'Please provide a valid user name']
    },
    avatar: {
      type: String
    }
  },

  {
    timeStamp: true
  }
);

userSchema.pre('save', function saveUser(next) {
  const user = this;
  user.avatar = `https://robohash.org/${user.username}`;
  next();
});

const User = mongoose.model('User', userSchema);

export default User;
