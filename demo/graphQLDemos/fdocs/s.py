from graphene import ObjectType, String, Schema 
class Query(ObjectType):
    name = String() 

    def resolve_name(root, info):
        return info.context.get('name')  
        
        
schema = Schema(Query)
result = schema.execute('{ name }', context={'name': 'Syrus'})
assert result.data['name'] == 'Syrus'

print(result.data['name'])