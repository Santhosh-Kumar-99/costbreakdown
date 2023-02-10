import { createGlobalStyle } from "styled-components";

export const GlobalVariables = createGlobalStyle`
:root{
    --color-none:#00000033;
    --color-basic:#91D4A8;
    --color-advanced:#E9BE74;
    --color-complex:#F57F6C;
    --color-background:#C3E6CD;
}
`

export const STATIC_VARIABLES = {
    PAGE_DESIGN_COLUMN_VAR: 'designComplexity',
    INTERACTION_COLUMN_VAR: 'interactionAnimationComplexity',
    INTEGRATION_COLUMN_VAR: 'integerationComplexity',

    COMPLEXITY_BAR_NAME_1_VAR: 'None',
    COMPLEXITY_BAR_NAME_2_VAR: 'Basic',
    COMPLEXITY_BAR_NAME_3_VAR: 'Advanced',
    COMPLEXITY_BAR_NAME_4_VAR: 'Complex',

}
