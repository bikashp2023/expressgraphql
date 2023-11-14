const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const schema = require('./schema');
const cors = require('cors');

const app = express();
app.use(cors());

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true, // Enable the GraphiQL interface for testing
}));

const PORT = process.env.PORT || 4000;

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}/graphql`);
});