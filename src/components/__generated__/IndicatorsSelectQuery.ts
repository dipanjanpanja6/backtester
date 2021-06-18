/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: IndicatorsSelectQuery
// ====================================================

export interface IndicatorsSelectQuery_frontend_indicators {
  __typename: "FrontendIndicator";
  name: string | null;
}

export interface IndicatorsSelectQuery_frontend_operators {
  __typename: "FrontendOperator";
  name: string | null;
}

export interface IndicatorsSelectQuery_frontend {
  __typename: "Frontend";
  indicators: (IndicatorsSelectQuery_frontend_indicators | null)[] | null;
  operands: (string | null)[] | null;
  operators: (IndicatorsSelectQuery_frontend_operators | null)[] | null;
}

export interface IndicatorsSelectQuery {
  frontend: IndicatorsSelectQuery_frontend | null;
  strategies: number;
}
