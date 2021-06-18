/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: FrontendData
// ====================================================

export interface FrontendData_frontend_indicators {
  __typename: "FrontendIndicator";
  name: string | null;
}

export interface FrontendData_frontend_operators {
  __typename: "FrontendOperator";
  name: string | null;
}

export interface FrontendData_frontend {
  __typename: "Frontend";
  _id: any | null;
  instruments: (string | null)[] | null;
  indicators: (FrontendData_frontend_indicators | null)[] | null;
  operators: (FrontendData_frontend_operators | null)[] | null;
  operands: (string | null)[] | null;
}

export interface FrontendData {
  frontend: FrontendData_frontend | null;
  strategies: number;
}
