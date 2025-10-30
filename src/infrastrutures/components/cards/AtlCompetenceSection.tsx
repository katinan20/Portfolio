import React from "react";

interface AtlCompetenceSectionProps {
  title: string;
  icon: React.ReactNode;
  skills: string[];
}

export default function AtlCompetenceSection({title, icon, skills}: AtlCompetenceSectionProps) {
  return (
      <div className="bg-purple-50 rounded-xl p-4">
        <div className="flex items-center gap-2 mb-3">
          {icon}
          <h3 className="font-semibold text-gray-800">{title}</h3>
        </div>

        <div className="flex flex-wrap gap-3">
          {skills.map((skill) => (
              <span
                  key={skill}
                  className="bg-white text-purple-700 border border-purple-200 px-3 py-1 rounded-full text-sm shadow-sm hover:bg-purple-100 transition"
              >
            {skill}
          </span>
          ))}
        </div>
      </div>
  );
}
