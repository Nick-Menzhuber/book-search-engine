// const { NoUnusedFragmentsRule } = require("graphql");
const { User } = require("../models");
const { signToken } = require("../utils/auth");
// const { Book } = require("../models");

const resolvers = {
  Query: {
    user: async (parent, args, context) => {
      return User.findOne({ _id: context.user._id });
    }
  },

  Mutation: {
    addBook: async (parent, { bookInfo }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user._id },
        {
          $push: { savedBooks: { bookInfo } }
        },
        {
          new: true,
          runValidators: true
        }
      );
    },
    removeBook: async (parent, { bookInfo }, context) => {
      return User.findOneAndUpdate(
        { _id: context.user_id },
        {
          $pull: { savedBooks: { bookInfo } }
        },
        { new: true }
      );
    },
    signIn: async (parent, { username, password }) => {
        let user = await User.findOne(
            { username }
        )
        let correctPassword = await user.isCorrectPassword(password)
        if (!correctPassword) { throw new AuthenticationError;}
        const token = signToken(user)
        return { user, token }
    },
    createUser: async (parent, { username, email, password }) => {
        let user = await User.create(
            { username, email, password }
        )
        const token = signToken(user)
        return { user, token }
    }
  }
};

module.exports = resolvers;
