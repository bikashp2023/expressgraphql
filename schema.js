const {
  GraphQLObjectType,
  GraphQLSchema,
  GraphQLString,
  GraphQLList,
  GraphQLInt,
  buildSchema,
} = require("graphql");

const ChartDataType = new GraphQLObjectType({
  name: 'ChartData',
  fields: () => ({
    data: { type: new GraphQLList(GraphQLInt) },
    label: { type: GraphQLString },
  }),
});

const ChartDataSetType = new GraphQLObjectType({
  name: 'ChartDataSet',
  fields: () => ({
    data: { type: new GraphQLList(GraphQLInt) },
    label: { type: GraphQLString },
  }),
});

const ChartResponseType = new GraphQLObjectType({
  name: 'ChartResponse',
  fields: () => ({
    labels: { type: new GraphQLList(GraphQLString) },      
    data: { type: new GraphQLList(ChartDataSetType) },
  }),
});

const BugDataType = new GraphQLObjectType({
  name: 'BugData',
  fields: () => ({
    technical_service: { type: GraphQLString },
    application: { type: GraphQLString },
    bugopen: { type: GraphQLString },
    bugclosed: { type: GraphQLString },
    bugcount: { type: GraphQLString },
    providerengine: { type: GraphQLString },
    providerhref: { type: GraphQLString },
    pullrequestcount: { type: GraphQLString },
    date: { type: GraphQLString },
  }),
});

const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  fields: {
    greeting: {
      type: GraphQLString,
      resolve: () => "Hello, GraphQL!",
    },
    grades: {
      type: ChartResponseType,
      resolve: () => {
        return {
          labels: [
            "January",
            "February",
            "March",
            "April",
            "May",
            "June",
            "July",
          ],
          data: [
            {
              data: [95, 59, 80, 81, 56, 55, 40],
              label: "Series A",
            },
            {
              data: [28, 48, 40, 19, 86, 27, 90],
              label: "Series B",
            },
            {
              data: [18, 48, 77, 9, 100, 27, 40],
              label: "Series C",
            },
          ],
        };
      },
    },
    table: {
      type: new GraphQLList(BugDataType),
      resolve: () => {
        return [
          {
            "technical_service": "Kyndryl/CTO Demo Environments",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO DI",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO DI",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO DI",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO Demo Environments",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO DI",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO DI",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          },
          {
            "technical_service": "Kyndryl/CTO DI",
            "application": "Demo",
            "bugopen": "10",
            "bugclosed": "2",
            "bugcount": "12",
            "providerengine": "Git",
            "providerhref": "http://kyndryl.com",
            "pullrequestcount": "4",
            "date": "2023-10-20"
          }
        ]
      }
    }
  },
});

const schema = new GraphQLSchema({
  query: RootQuery,
});

module.exports = schema;
