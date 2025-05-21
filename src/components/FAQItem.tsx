
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItemProps {
  question: string;
  answer: string;
  value: string;
}

const FAQItem = ({ question, answer, value }: FAQItemProps) => {
  return (
    <AccordionItem value={value}>
      <AccordionTrigger className="text-left font-medium">
        {question}
      </AccordionTrigger>
      <AccordionContent>
        <p className="text-gray-600">{answer}</p>
      </AccordionContent>
    </AccordionItem>
  );
};

export default FAQItem;
