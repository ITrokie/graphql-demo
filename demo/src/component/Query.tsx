import gql from 'graphql-tag';
import * as React from 'react';
import * as Urql from 'urql';
export type Maybe<T> = T | null;
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  Map: any;
};



export type MyQuery = {
  __typename?: 'MyQuery';
  todo?: Maybe<Todo>;
  lastTodo?: Maybe<Todo>;
  todos: Array<Todo>;
};


export type MyQueryTodoArgs = {
  id: Scalars['ID'];
};

export type MyMutation = {
  __typename?: 'MyMutation';
  createTodo: Todo;
  updateTodo?: Maybe<Todo>;
};


export type MyMutationCreateTodoArgs = {
  todo: TodoInput;
};


export type MyMutationUpdateTodoArgs = {
  id: Scalars['ID'];
  changes: Scalars['Map'];
};

export type Todo = {
  __typename?: 'Todo';
  id: Scalars['ID'];
  text: Scalars['String'];
  done: Scalars['Boolean'];
};

/** Passed to createTodo to create a new todo */
export type TodoInput = {
  /** The body text */
  text: Scalars['String'];
  /** Is it done already? */
  done?: Maybe<Scalars['Boolean']>;
};


export enum Role {
  Admin = 'ADMIN',
  Owner = 'OWNER'
}

export type GetTodoQueryVariables = {};


export type GetTodoQuery = (
  { __typename?: 'MyQuery' }
  & { todos: Array<(
    { __typename?: 'Todo' }
    & Pick<Todo, 'id' | 'text'>
  )> }
);


export const GetTodoDocument = gql`
    query getTodo {
  todos {
    id
    text
  }
}
    `;

export default  (props: Omit<Urql.QueryProps<GetTodoQuery, GetTodoQueryVariables>, 'query'> & { variables?: GetTodoQueryVariables }) => (
  <Urql.Query {...props} query={GetTodoDocument} />
);
