from sys import argv
from flask import Flask
from graphene import ObjectType, Schema, String, Argument
from s1 import create_graphql_api


def create_server():
    app = Flask(__name__)
    app.secret_key = b'(\xe4S$\xce\xa81\x80\x8e\x83\xfa"b%\x9fr'
    app.env = 'development'

    return app


class Query(ObjectType):
    hello = String(name=Argument(
        String, default_value='stranger'
    ))

    def resolve_hello(self, args: dict, context, info):
        # print(f'args: {args};\tcontext:{context};\tinfo:{info};')
        # val = args['name']
        return 

def grapheneQuery(app: Flask, query: ObjectType):
    # schema = Schema(query=query)
    # result = schema.execute('{ hello }')
    # print(result.data['hello'])
    # print(f'results {result}')
    return app


def run(app, host='127.0.0.1'):

    app.run(host=host, debug=True)

    return app


def main():
    app = create_server()
    create_graphql_api(app)
    # app = grapheneQuery(app, Query)

    host = argv[1] if len(argv) >= 2 else '127.0.0.1'
    print(host)
    # run(app, host)





(lambda : main() if __name__ == "__main__" else None)()