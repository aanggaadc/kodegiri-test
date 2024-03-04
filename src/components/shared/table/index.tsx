import React from "react";
import Styles from "./index.module.scss";

export const Table = ({ children }: { children: React.ReactNode }) => {
  return <table className={Styles.table}>{children}</table>;
};

const Head = ({ children }: { children: React.ReactNode }) => {
  return <thead>{children}</thead>;
};

const Body = ({ children }: { children: React.ReactNode }) => {
  return <tbody>{children}</tbody>;
};

const Row = ({ children }: { children: React.ReactNode }) => {
  return <tr>{children}</tr>;
};

const Column = ({
  children,
  className,
}: {
  children?: React.ReactNode;
  className?: string;
}) => {
  return <th className={className}>{children}</th>;
};

const Data = ({ children }: { children: React.ReactNode }) => {
  return <td>{children}</td>;
};

Table.Head = Head;
Table.Body = Body;
Table.Row = Row;
Table.Column = Column;
Table.Data = Data;
