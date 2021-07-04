import React, { Fragment, useContext, useEffect, useState } from "react";
import { useQuery, gql, useMutation } from "@apollo/client";
import { Link } from "react-router-dom";

const GET_CONTAINER = gql`
  query Container($id: ID!) {
    container(id: $id) {
      id
      name
      users {
        id
        firstName
        lastName
      }
      items {
        name
        imageUrl
      }
    }
  }
`;

export default function SingleContainer(props) {
  const containerId = props.match.params.id;

  const { loading, error, data } = useQuery(GET_CONTAINER, {
    variables: {
      id: containerId,
    },
  });

  if (loading) return "...loading";
  if (error) return "...error";

  return (
    <div>
      <h2>{data.container.name}</h2>
      <h3>Users</h3>
      <div>
        {data.container.users.map((user) => {
          return (
            <div key={user.id}>
              {user.firstName} {user.lastName}
            </div>
          );
        })}
      </div>
      <h3>Contents</h3>
      <div>
        {data.container.items.map((item) => {
          return <div key={item.id}>{item.name}</div>;
        })}
      </div>
      <Link to="/containers">Back to all containers</Link>
    </div>
  );
}