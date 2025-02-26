/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel or swc plugin for production.
 */
const documents = {
    "\n    mutation createBoard($writer: String, $title: String, $contents: String){\n        createBoard(writer: $writer, title: $title, contents: $contents){\n            _id\n            number\n            message\n        }\n    }\n": types.CreateBoardDocument,
    "\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {  # 변수의 타입 적는 곳\n        createProduct(seller: $seller, createProductInput: $createProductInput){         # 실제 우리가 전달할 변수 적는 곳\n            _id\n            number\n            message\n        }\n    }\n": types.CreateProductDocument,
    "\n    query fetchBoard($number: Int){\n        fetchBoard(number: $number){\n            number\n            writer\n            title\n            contents\n        }\n    }\n": types.FetchBoardDocument,
    "\n    mutation deleteBoard($number: Int){\n        deleteBoard(number: $number){\n            message\n        }\n    }\n": types.DeleteBoardDocument,
    "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardsDocument,
    "\n    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){\n        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){\n            _id\n            number\n            message\n        }\n    }\n": types.UpdateBoardDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = graphql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
 */
export function graphql(source: string): unknown;

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createBoard($writer: String, $title: String, $contents: String){\n        createBoard(writer: $writer, title: $title, contents: $contents){\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createBoard($writer: String, $title: String, $contents: String){\n        createBoard(writer: $writer, title: $title, contents: $contents){\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {  # 변수의 타입 적는 곳\n        createProduct(seller: $seller, createProductInput: $createProductInput){         # 실제 우리가 전달할 변수 적는 곳\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation createProduct($seller: String, $createProductInput: CreateProductInput!) {  # 변수의 타입 적는 곳\n        createProduct(seller: $seller, createProductInput: $createProductInput){         # 실제 우리가 전달할 변수 적는 곳\n            _id\n            number\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    query fetchBoard($number: Int){\n        fetchBoard(number: $number){\n            number\n            writer\n            title\n            contents\n        }\n    }\n"): (typeof documents)["\n    query fetchBoard($number: Int){\n        fetchBoard(number: $number){\n            number\n            writer\n            title\n            contents\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation deleteBoard($number: Int){\n        deleteBoard(number: $number){\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation deleteBoard($number: Int){\n        deleteBoard(number: $number){\n            message\n        }\n    }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards {\n    fetchBoards {\n      number\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){\n        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){\n            _id\n            number\n            message\n        }\n    }\n"): (typeof documents)["\n    mutation updateBoard($number: Int, $writer: String, $title: String, $contents: String){\n        updateBoard(number: $number, writer: $writer, title: $title, contents: $contents){\n            _id\n            number\n            message\n        }\n    }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;