interface AtlRealiserProps {
  title: string;
  description: string;
  typeDev: string;
}

export default function AtlRealiser({title, description, typeDev}: AtlRealiserProps) {
  return (
      <section
          className="relative w-full bg-white rounded-2xl shadow-lg p-8 max-w-5xl mx-auto border border-gray-100">
        {/* Ligne colorée en haut, similaire au style de AtlCompetenceSection */}
        <div className="h-1 w-24 bg-purple-600 rounded-full mb-6"></div>

        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-bold text-gray-800">{title}</h2>
          <span
              className="bg-purple-600 text-white text-xs font-semibold px-4 py-1 rounded-full uppercase tracking-wider ">
          {typeDev}
        </span>
        </div>

        <p className="text-gray-600 text-lg leading-relaxed mb-8">{description}</p>

        <div className="flex flex-wrap gap-3">
          {['Spring Boot', 'React.js', 'PostgreSQL', 'Docker', 'Stripe API'].map((tech, index) => (
              <span
                  key={index}

                  className="bg-purple-600 text-white px-3 py-1 rounded-full text-xs font-medium shadow-sm transition"
              >
            {tech}
          </span>
          ))}
          <div
              className="absolute top-0 left-0 h-full w-1 rounded-l-xl bg-purple-600 opacity-50"></div>
        </div>
      </section>
  );
}
