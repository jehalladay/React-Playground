import json
from gql import gql, Client
from gql.transport.requests import RequestsHTTPTransport

transport = RequestsHTTPTransport("http://localhost:5000/")
client = Client(transport=transport)
response = client.execute(gql("{hello}"))
