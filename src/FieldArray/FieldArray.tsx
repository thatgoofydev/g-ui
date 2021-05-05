import React, { useContext } from "react";
import { FormContext } from "../Form/FormContext";
import { getValue } from "../Form/util";

type FieldArrayProps = {
  name: string;
  children: (renderProps: RenderProps) => JSX.Element;
};

type RenderProps = {
  map: (iterator: MapIterator) => JSX.Element[];
  push: (item: any) => void;
  remove: (index: number) => void;
};

type MapIterator = (name: string, index?: number) => JSX.Element;

const FieldArray = ({ name, children }: FieldArrayProps) => {
  const context = useContext(FormContext);
  if (!context) return null;

  const { values, errors, setFieldValue } = context;
  const elements = getValue(values, name) as [];

  const map = (iterator: MapIterator) => {
    return elements.map((_element, index) => {
      return iterator(`${name}.${index}`, index);
    });
  };

  const push = (element: any) => {
    const newElements = [...elements, element];
    setFieldValue(name, newElements);
  };

  const remove = (index: number) => {
    const newElements = [...elements];
    newElements.splice(index, 1);
    setFieldValue(name, newElements);
  };

  const renderProps = {
    map,
    push,
    remove
  };

  return children(renderProps);
};

export { FieldArray };
