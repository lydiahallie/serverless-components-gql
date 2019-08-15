const { catchErrors } = require("../../utils/error");

const Query = {
  post: catchErrors(async (_, { id }, ctx) => {
    return await ctx.prisma.post({ id });
  }),
  posts: catchErrors(async (_, args, ctx) => {
    return await ctx.prisma.posts();
  })
};

module.exports = Query;
