
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useToast } from "@/hooks/use-toast";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData(prev => ({ ...prev, projectType: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      toast({
        title: "Mensaje enviado",
        description: "Gracias por contactarnos. Te responderemos a la brevedad.",
      });
      setFormData({
        name: '',
        email: '',
        projectType: '',
        message: '',
      });
    }, 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <label htmlFor="name" className="block text-sm font-medium mb-1">
          Nombre completo
        </label>
        <Input
          id="name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
        />
      </div>
      
      <div>
        <label htmlFor="email" className="block text-sm font-medium mb-1">
          Email
        </label>
        <Input
          id="email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="tu@email.com"
          required
        />
      </div>
      
      <div>
        <label htmlFor="projectType" className="block text-sm font-medium mb-1">
          Tipo de proyecto
        </label>
        <Select onValueChange={handleSelectChange} value={formData.projectType}>
          <SelectTrigger>
            <SelectValue placeholder="Selecciona el tipo de proyecto" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="eventos">Eventos (bodas, conciertos...)</SelectItem>
            <SelectItem value="cine">Cine y televisión</SelectItem>
            <SelectItem value="publicidad">Publicidad y marketing</SelectItem>
            <SelectItem value="fotografia">Fotografía aérea</SelectItem>
            <SelectItem value="3d">Maquetas 3D y topografía</SelectItem>
            <SelectItem value="otro">Otro</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label htmlFor="message" className="block text-sm font-medium mb-1">
          Mensaje
        </label>
        <Textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Cuéntanos sobre tu proyecto"
          rows={5}
          required
        />
      </div>
      
      <Button 
        type="submit" 
        className="w-full bg-drone hover:bg-drone/90"
        disabled={isSubmitting}
      >
        {isSubmitting ? "Enviando..." : "Enviar mensaje"}
      </Button>
    </form>
  );
};

export default ContactForm;
