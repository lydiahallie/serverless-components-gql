const { catchErrors } = require("../../utils/error");

const Mutation = {
  createPost: catchErrors(async (_, { input }, ctx) => {
    return await ctx.prisma.createPost({ ...input });
  }),
  updatePost: catchErrors(async (_, { id, input }, ctx) => {
    return await ctx.prisma.updatePost({ where: { id }, data: { ...input } });
  }),
  deletePost: catchErrors(async (_, { id }, ctx) => {
    return await ctx.prisma.deletePost({ id });
  })
};

module.exports = Mutation;
