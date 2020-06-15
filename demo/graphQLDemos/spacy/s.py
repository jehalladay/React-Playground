from flask import Flask, jsonify
from flask_graphql import GraphQLView



def create_app():
    app = Flask(__name__)

    from schema import schema

    app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))

    @app.route("/")
    def hello_world():
        return "Hello World!"

    return app


def get_environment_config():
    return "config.DevelopmentConfig"