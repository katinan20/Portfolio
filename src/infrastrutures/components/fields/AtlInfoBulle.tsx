/*
import React, {type ReactNode} from "react";
import {Icon} from "lucide-react";

interface AtlInfoBulleProps {
  content: ReactNode;
  icon?: ReactNode;
  width?: string;
}

const AtlInfoBulle: React.FC<AtlInfoBulleProps> = ({
                                                     content,
                                                     icon = <Icon icon="ph:info"/>,
                                                     width
                                                   }) => {
  const [isVisible, setIsVisible] = React.useState(false);

  const iconn: any = icon;

  return (
      <div className={`relative inline-block`}>
        <div className="relative">
          <InlineIcon
              icon={iconn.props.icon ?? "ph:info"}
              className="text-blue-500 cursor-pointer"
              onMouseEnter={() => {
                setIsVisible(true);
              }}
              onMouseLeave={() => {
                setIsVisible(false);
              }}
              width={15}
          />
          <div className={`absolute top-full shadow-md border left-1/2 transform -translate-x-1/2 bg-yellow-200 text-black p-2
                 rounded-md text-sm transition-opacity duration-300 font-normal z-20
                  ${isVisible ? 'visible opacity-100' : 'invisible opacity-0'}`}>
            <div className="whitespace-pre-wrap" style={{width}}>{content}</div>
            <div className="arrow-up"></div>
          </div>
        </div>
      </div>
  );
};

export default AtlInfoBulle;
*/
