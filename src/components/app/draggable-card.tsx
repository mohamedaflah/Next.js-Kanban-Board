interface DraggableCardProp {
  title: string;
  description: string;
}
export const DraggableCard = ({ title, description }: DraggableCardProp) => {
  return (
    <div
      className="w-full min-h-20 rounded-xl shadow-sm bg-[#ffffff] p-3 cursor-grab"
      draggable={true}
    >
      <div className="w-full">
        <h1 className="text-sm font-semibold">{title}</h1>
      </div>
      <div className="whitespace-nowrap text-wrap text-[13px] font-medium">
        {description}
      </div>
    </div>
  );
};
