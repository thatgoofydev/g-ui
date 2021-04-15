import React from "react";
import { FormContextState } from "./types";

export const FormContext = React.createContext<FormContextState<any>>(null);
