import { ReactNode } from "react";

interface TaskListProp {
  children: ReactNode;
}
export const DraggableTaskList = ({ children }: TaskListProp) => {
  return <div className="inline-block h-full">{children}</div>;
};
