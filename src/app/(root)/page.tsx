import { DraggableTaskList } from "@/components/app/dragearea-tasklist";
import { DraggableCard } from "@/components/app/draggable-card";
import { DraggSection } from "@/components/app/draggable-section";
import { DraggListTItle } from "@/components/app/dragglist-title";
import { Plus } from "lucide-react";
import React from "react";

const Home = () => {
  return (
    <main className="w-full h-full p-5 overflow-hidden">
      <div className="w-full flex justify-between h-10 items-center">
        <div>
          <h1 className="font-medium">Task 1 !🎇🎨🎏</h1>
        </div>
        <div className="">
          <button className="min-w-20 rounded-sm fullcenter px-4 text-sm bg-forgroundSecondary-1 h-9 font-medium text-white">
            Add Todo
          </button>
        </div>
      </div>
      <DraggSection>
        <DraggableTaskList>
          <div className=" bg-white-2 w-80 rounded-xl p-5">
            <DraggListTItle title="Completed" />
            <div className="flex flex-col mt-4 gap-2">
              <DraggableCard
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci blanditiis impedit illum labore aliquid ipsa voluptate veniam eius soluta."
                title="Hello"
              />
              <DraggableCard
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci blanditiis impedit illum labore aliquid ipsa voluptate veniam eius soluta."
                title="Hello"
              />
              <DraggableCard
                description="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem adipisci blanditiis impedit illum labore aliquid ipsa voluptate veniam eius soluta."
                title="Hello"
              />
            </div>
          </div>
        </DraggableTaskList>
      </DraggSection>
    </main>
  );
};

export default Home;
