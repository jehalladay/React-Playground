from sys import argv
from flask_graphql import GraphQLView
from flask import Flask
# import schema



def create_server():
    app = Flask(__name__)
    app.secret_key = b'(\xe4S$\xce\xa81\x80\x8e\x83\xfa"b%\x9fr'
    app.env = 'development'

    return app


def graphqlSetup(app):
    schema: dict = {
        'name': 'Launch'
    }

    app.add_url_rule('/graphql', view_func=GraphQLView.as_view('graphql', schema=schema, graphiql=True))
    # app.add_url_rule('/graphql/batch', view_func=GraphQLView.as_view('graphql', schema=schema, batch=True))

    return app


def run(app, host='127.0.0.1'):

    app.run(host=host, debug=True)

    return app


def main():
    app = create_server()
    app = graphqlSetup(app)

    host = argv[1] if len(argv) >= 2 else '127.0.0.1'
    run(app, host)





(lambda : main() if __name__ == "__main__" else None)()