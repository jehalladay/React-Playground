from graphqlclient import GraphQLClient
from pprint import PrettyPrinter
from graphql import get_introspection_query, build_client_schema, print_schema

def main():
    pp = PrettyPrinter(indent=4)
    client = GraphQLClient('http://swapi.graph.cool/')
    query_intros = get_introspection_query(descriptions=True)
    intros_result = client.execute(query_intros, variables=None, operationName=None)
    client_schema = build_client_schema(intros_result.get('data', None))
    sdl = print_schema(client_schema)
    print(sdl)
    pp.pprint(sdl)