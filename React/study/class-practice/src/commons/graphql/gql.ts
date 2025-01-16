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
    "\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardsDocument,
    "\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n": types.FetchBoardsCountDocument,
    "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n": types.UploadFileDocument,
    "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.CreateBoardDocument,
    "\n  query fetchBoardWithSearches($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardWithSearchesDocument,
    "\n  query fetchBoardPolicyTests02 {\n    fetchBoards {\n      _id\n      writer\n    }\n  }\n": types.FetchBoardPolicyTests02Document,
    "\n  query fetchBoardPolicyTests01 {\n    fetchBoards {\n      _id\n      writer\n      title\n    }\n  }\n": types.FetchBoardPolicyTests01Document,
    "\n  query fetchBoardPolicyTests {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardPolicyTestsDocument,
    "\n  mutation updateBoard {\n    updateBoard(\n      boardId: \"66e9154a97a44400296123f1\"\n      password: \"1234\"\n      updateBoardInput: {\n        title: \"제목변경됨\"\n        contents: \"내용변경됨\"\n      }\n    ){\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.UpdateBoardDocument,
    "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n": types.FetchUserLoggedInDocument,
    "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": types.LoginUserDocument,
    "\n  mutation loginUserExample($email: String!, $password: String!) {\n    loginUserExample(email: $email, password: $password) {\n      accessToken\n    }\n  }\n": types.LoginUserExampleDocument,
    "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardDocument,
    "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n": types.DeleteBoardDocument,
    "\n  query fetchBoardWithLike($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      likeCount\n    }\n  }\n": types.FetchBoardWithLikeDocument,
    "\n  mutation likeBoard($boardId: ID!) {\n    likeBoard(boardId: $boardId)\n  }\n": types.LikeBoardDocument,
    "\n  mutation restoreAccessToken {\n    restoreAccessToken {\n      accessToken\n    }\n  }\n": types.RestoreAccessTokenDocument,
    "\n  query fetchBoardPolicyTests03 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n": types.FetchBoardPolicyTests03Document,
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
export function graphql(source: "\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoards($page: Int) {\n    fetchBoards(page: $page) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n"): (typeof documents)["\n  query fetchBoardsCount {\n    fetchBoardsCount\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"): (typeof documents)["\n  mutation uploadFile($file: Upload!) {\n    uploadFile(file: $file) {\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  mutation createBoard($createBoardInput: CreateBoardInput!) {\n    createBoard(createBoardInput: $createBoardInput) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardWithSearches($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardWithSearches($page: Int, $search: String) {\n    fetchBoards(page: $page, search: $search) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardPolicyTests02 {\n    fetchBoards {\n      _id\n      writer\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardPolicyTests02 {\n    fetchBoards {\n      _id\n      writer\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardPolicyTests01 {\n    fetchBoards {\n      _id\n      writer\n      title\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardPolicyTests01 {\n    fetchBoards {\n      _id\n      writer\n      title\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardPolicyTests {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardPolicyTests {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation updateBoard {\n    updateBoard(\n      boardId: \"66e9154a97a44400296123f1\"\n      password: \"1234\"\n      updateBoardInput: {\n        title: \"제목변경됨\"\n        contents: \"내용변경됨\"\n      }\n    ){\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  mutation updateBoard {\n    updateBoard(\n      boardId: \"66e9154a97a44400296123f1\"\n      password: \"1234\"\n      updateBoardInput: {\n        title: \"제목변경됨\"\n        contents: \"내용변경됨\"\n      }\n    ){\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n"): (typeof documents)["\n  query fetchUserLoggedIn {\n    fetchUserLoggedIn {\n      _id\n      email\n      name\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation loginUser($email: String!, $password: String!) {\n    loginUser(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation loginUserExample($email: String!, $password: String!) {\n    loginUserExample(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation loginUserExample($email: String!, $password: String!) {\n    loginUserExample(email: $email, password: $password) {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoard($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n"): (typeof documents)["\n  mutation deleteBoard($boardId: ID!) {\n    deleteBoard(boardId: $boardId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardWithLike($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      likeCount\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardWithLike($boardId: ID!) {\n    fetchBoard(boardId: $boardId) {\n      _id\n      likeCount\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation likeBoard($boardId: ID!) {\n    likeBoard(boardId: $boardId)\n  }\n"): (typeof documents)["\n  mutation likeBoard($boardId: ID!) {\n    likeBoard(boardId: $boardId)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  mutation restoreAccessToken {\n    restoreAccessToken {\n      accessToken\n    }\n  }\n"): (typeof documents)["\n  mutation restoreAccessToken {\n    restoreAccessToken {\n      accessToken\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query fetchBoardPolicyTests03 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"): (typeof documents)["\n  query fetchBoardPolicyTests03 {\n    fetchBoards {\n      _id\n      writer\n      title\n      contents\n    }\n  }\n"];

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;