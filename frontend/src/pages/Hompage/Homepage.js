import React, { useEffect, useState } from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider, gql } from '@apollo/client';
const client = new ApolloClient({
    uri: 'http://localhost:5000/graphql',
    cache: new InMemoryCache(),
});

export default function Homepage() {

    const [stuff, setStuff] = useState();


    useEffect(() => {
        client
        .query({
          query: gql`
            query LaunchesQuery {
              launches {
                flight_number
                mission_name
                launch_date_local
                launch_success
              }
            }
          `,
        })
        .then((result) => console.log("myquery result: ", result))
        .catch(err => console.log(err));

    }, []);

    return (
        <div>
            <h1>Homepage</h1>
        </div>
    )
}
