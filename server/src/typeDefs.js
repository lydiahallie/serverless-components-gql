const typeDefs = `
  type Query {
    post(id: ID!): Post!
    posts: [Post!]!
  }

  type Mutation {
		createPost(input: CreatePostInput!): Post!
		updatePost(id: ID! input: UpdatePostInput!): Post!
		deletePost(id: ID!): Post!
	}
	
	type Post {
		id: ID!
		title: String!
		body: String!
	}

	input CreatePostInput {
		title: String!
		body: String!
	}

	input UpdatePostInput {
		title: String
		body: String
	}
`;

module.exports = typeDefs;
