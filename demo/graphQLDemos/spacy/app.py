from flask import Flask
from flask_graphql import GraphQLView
from graphene import Schema
import os

from query import Query


schema = Schema(query=Query)
view_func = GraphQLView.as_view('graphql', schema=schema, graphiql=True)
app = Flask(__name__)
app.add_url_rule('/', view_func=view_func)


if __name__ == '__main__':
    app.run(host='127.0.0.1', port=8080)