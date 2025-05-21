
interface TestimonialCardProps {
  quote: string;
  author: string;
  company: string;
  image?: string;
}

const TestimonialCard = ({ quote, author, company, image }: TestimonialCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md p-6 relative">
      <div className="flex flex-col md:flex-row gap-4 items-center">
        {image && (
          <div className="shrink-0">
            <img src={image} alt={author} className="w-16 h-16 rounded-full object-cover" />
          </div>
        )}
        <div>
          <blockquote className="text-gray-600 italic mb-4">"{quote}"</blockquote>
          <div className="font-medium">{author}</div>
          <div className="text-sm text-drone">{company}</div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
