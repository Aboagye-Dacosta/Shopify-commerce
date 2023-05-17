import { ComponentType } from "react";

export type InfoTabProps = {
  id: string;
  title: string;
  description: string;
  Icon: ComponentType<{ className: string }>;
};

function InfoTab({ Icon, title, description }: InfoTabProps) {
  return (
    <div className="flex mx-1 mb-3 bg-slate-100 px-3">
      <div className="grid grid-cols-[1fr_3fr]  py-2">
        <div className="flex items-center justify-center px-2">
          <Icon className="text-[3rem] text-orange-400" />
        </div>
        <div className="flex flex-col items-start justify-center">
          <span>{title}</span>
          <span> {description}</span>
        </div>
      </div>
    </div>
  );
}

export default InfoTab;
