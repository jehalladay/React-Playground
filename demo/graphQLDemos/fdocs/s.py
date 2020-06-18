from graphene import ObjectType, String, Schema 



class Query(ObjectType):
    name = String() 

    def resolve_name(root, info):
        print('root', root)
        print('info', info)
        print('info', dir(info))
        print('info', info.context)
        print('info', dir(info.context))
        return info.context.get('name')  
        
        
schema = Schema(Query)
result = schema.execute('{ name }', context={'name': 'Syrus'})
print(result.data['name'])
assert result.data['name'] == 'Syrus'
