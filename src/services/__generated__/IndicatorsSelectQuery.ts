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

export interface IndicatorsSelectQuery_frontend {
  __typename: "Frontend";
  indicators: (IndicatorsSelectQuery_frontend_indicators | null)[] | null;
}

export interface IndicatorsSelectQuery {
  frontend: IndicatorsSelectQuery_frontend | null;
  strategies: number;
}
