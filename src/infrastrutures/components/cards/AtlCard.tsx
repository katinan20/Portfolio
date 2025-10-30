
interface AtlCardAPropos{
  text: string;
  title: string;
}
export default function AtlCardMini({text, title}:AtlCardAPropos) {
  return (
      <div className="bg-gradient-to-r from-purple-600 to-purple-500 p-[2px] rounded-2xl shadow-lg w-full max-w-4xl mx-auto">
        <div className="bg-white rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-purple-700 mb-4 border-b-3 border-purple-500 inline-block">
            {title}
          </h2>
          <p className="text-gray-700 leading-relaxed">
            {text}
          </p>
        </div>
      </div>
  );
}
