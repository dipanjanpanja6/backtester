/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: ComboStrategyQuery
// ====================================================

export interface ComboStrategyQuery_combos_strategies {
  __typename: "ComboStrategy";
  indicator: string | null;
  operand: string | null;
}

export interface ComboStrategyQuery_combos {
  __typename: "Combo";
  strategies: (ComboStrategyQuery_combos_strategies | null)[] | null;
}

export interface ComboStrategyQuery {
  combos: (ComboStrategyQuery_combos | null)[];
}
