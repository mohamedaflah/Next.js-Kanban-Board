"use client";
import { DraggableCard } from "@/components/app/draggable-card";
import { useAppSelector, useAppDispatch } from "@/redux/store";
import { TodoColumn } from "@/types/todo.types";
import { Plus } from "lucide-react";
import React, { useEffect, useState } from "react";
import { Droppable, DragDropContext, Draggable } from "react-beautiful-dnd";

const Home = () => {
  const { columns: reduxCol } = useAppSelector((state) => state.task);
  const dispatch = useAppDispatch();

  const [columns, setColumns] = useState<TodoColumn[]>([]);

  useEffect(() => {
    setColumns(reduxCol as TodoColumn[]);
  }, [reduxCol]);

  const handleDragEnd = (result: any) => {
    console.log("Drag result:", result); // Debugging outpu
    alert("()ds");
    const { source, destination, draggableId } = result;

    // If there's no destination, exit the function
    if (!destination) {
      return;
    }

    // Reorder tasks within the same column
    if (source.droppableId === destination.droppableId) {
      const startColumn = columns.find((col) => col.id === source.droppableId);
      const endColumn = columns.find(
        (col) => col.id === destination.droppableId
      );

      if (startColumn && endColumn) {
        const [movedTask] = startColumn.tasks.splice(source.index, 1);
        endColumn.tasks.splice(destination.index, 0, movedTask);

        // Update state and dispatch to Redux store
        setColumns([...columns]);
      }
    } else {
      // Move tasks between columns
      const startColumn = columns.find((col) => col.id === source.droppableId);
      const endColumn = columns.find(
        (col) => col.id === destination.droppableId
      );

      if (startColumn && endColumn) {
        const [movedTask] = startColumn.tasks.splice(source.index, 1);
        endColumn.tasks.splice(destination.index, 0, movedTask);

        // Update state and dispatch to Redux store
        setColumns([...columns]);
      }
    }
  };

  return (
    <main className="w-full h-full p-5 overflow-hidden">
      <div className="w-full flex justify-between h-10 items-center">
        <div>
          <h1 className="font-medium">Task 1 !🎇🎨🎏</h1>
        </div>
        <div className="">
          <button className="min-w-20 rounded-sm fullcenter px-4 text-sm bg-forgroundSecondary-1 h-9 font-medium text-[white] gap-2">
            Add Todo
            <Plus className="w-5" />
          </button>
        </div>
      </div>
      <DragDropContext onDragEnd={handleDragEnd}>
        <Droppable droppableId="all-columns" direction="horizontal">
          {(provided) => (
            <section
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="w-full mt-4 h-full overflow-x-auto scrollbar-none space-x-2 whitespace-nowrap relative flex"
            >
              {columns?.map((column) => (
                <Droppable key={column.id} droppableId={column.id.toString()}>
                  {(provider) => (
                    <div
                      className="h-full relative top-0"
                      {...provider.droppableProps}
                      ref={provider.innerRef}
                    >
                      <div className="bg-white-2 w-80 h-full rounded-xl p-5">
                        <div className="w-full flex justify-between pb-5 border-b-2">
                          <div>
                            <span className="font-medium">{column.name}</span>
                          </div>
                          <div className="size-7 border fullcenter rounded-md bg-[white] shadow-md cursor-pointer">
                            <Plus className="w-4" />
                          </div>
                        </div>
                        <div className="flex flex-col mt-4">
                          {column.tasks?.map((task, index) => (
                            <Draggable
                              key={task.id}
                              draggableId={task.id}
                              index={index}
                            >
                              {(provided) => (
                                <DraggableCard
                                  title={task.title}
                                  description={task.description}
                                  draggableProps={provided.draggableProps}
                                  dragHandleProps={provided.dragHandleProps}
                                  ref={provided.innerRef}
                                  style={{...provided.draggableProps.style}} // Ensure the style is applied
                                />
                              )}
                            </Draggable>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}
                </Droppable>
              ))}
              {provided.placeholder}
            </section>
          )}
        </Droppable>
      </DragDropContext>
    </main>
  );
};

export default Home;
