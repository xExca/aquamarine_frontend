export type QaNProps = {
  title: string;
  description: string;
  QA: FAQ[];
};
export type FAQ = {
  q: string;
  a: React.ReactNode;
};