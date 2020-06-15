import graphene 

class Query (graphene.ObjectType) : 
    hello = graphene.String(name=graphene.String(default_value= "stranger" )) 

def resolve_hello (self, info, name) : 
    print('info',info) 
    return'Hello ' + name 

schema = graphene.Schema(query=Query) 

result = schema.execute( '{ hello }' ) 
print(result.data) 
print(result.data[ 'hello' ])