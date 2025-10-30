import {memo} from "react";


interface AtlCardCompetences {
  title?: string;
  children?: React.ReactNode;
}

function AtlCardCompetences({title, children}: AtlCardCompetences) {
  return (
      <div
          className="bg-gradient-to-r from-purple-600 to-purple-500 p-[2px] rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-6 border-b-2 border-purple-500 inline-block">
            {title}
          </h2>
          <div className="space-y-6">
            {children}
          </div>
        </div>
      </div>
  );
}

export default memo(AtlCardCompetences)