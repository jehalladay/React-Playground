from graphql import (
    GraphQLSchema, GraphQLObjectType, GraphQLField, GraphQLString)
from graphql import graphql_sync

schema = GraphQLSchema(
    query=GraphQLObjectType(
        name='RootQueryType',
        fields={
            'hello': GraphQLField(
                GraphQLString,
                resolve=lambda obj, info: js r'world')
        }))



query = '{ hello }'

print(graphql_sync(schema, query))
query = '{ BoyHowdy }'

print(graphql_sync(schema, query))