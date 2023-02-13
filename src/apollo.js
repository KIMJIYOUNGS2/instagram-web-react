import { makeVar } from "@apollo/client";

/*
apollo => reactive-variables
- npm i @apolloclient
*/

export const isLoggedInVar = makeVar(false);
export const darkModeVar = makeVar(false);
