const axios = require('axios')
const {
     GraphQLObjectType, 
     GraphQLInt,
     GraphQLList,
     GraphQLString,
     GraphQLBoolean,
     GraphQLSchema,
} = require('graphql')




    const RocketType = new GraphQLObjectType(
        {
            name:'Rocket',
            fields: () => (
                {
                    "rocket_id":   { type: GraphQLString },
                    "rocket_name": { type: GraphQLString },
                    "rocket_type": { type: GraphQLString },
                }
            )
        }
    )

const LaunchType = new GraphQLObjectType(
    {
        name:'Launch',
        fields: () => (
            {
                "flight_number":     { type: GraphQLInt },
                "mission_name":      { type: GraphQLString },
                "launch_year":       { type: GraphQLString },
                "launch_date_local": { type: GraphQLString },
                "launch_success":    { type: GraphQLBoolean },
                "rocket":            { type: RocketType },
            }
        )
    }
)


const RootQuery = new GraphQLObjectType(
    {
        "name": 'RootQueryType',
        "fields": {
            "launches": {
                type: new GraphQLList(LaunchType),
                resolve(parent, args) {
                    return axios.get('https://api.spacexdata.com/v3/launches')
                                .then(response => {
                                    const res = response.data
                                    // console.log(res)
                                    return res
                                }
                    )
                }
            },
            "launch": {
                type: LaunchType,
                args: {
                    flight_number: { type: GraphQLInt}
                },
                resolve(parent, args) {
                    return axios.get(`https://api.spacexdata.com/v3/launches/${args.flight_number}`)
                                .then(response => response.data)
                }
            }
        }
    }
)


module.exports = new GraphQLSchema(
    {
        query: RootQuery,
    }
);