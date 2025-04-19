import { useState } from 'react';
import { Send, CheckCircle } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
    newsletter: false
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState<{[key: string]: string}>({});

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors({
        ...errors,
        [name]: ''
      });
    }
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      newsletter: e.target.checked
    });
  };

  const validateForm = () => {
    const newErrors: {[key: string]: string} = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Bitte geben Sie Ihren Namen ein';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Bitte geben Sie eine Nachricht ein';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      // Simulate form submission
      setTimeout(() => {
        setIsSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: '',
          newsletter: false
        });
      }, 1000);
    }
  };

  return (
    <div className="bg-white">
      {/* Header */}
      <div className="bg-light py-12">
        <div className="container">
          <h1 className="mb-4">Kontakt & Feedback</h1>
          <p className="text-xl text-gray-600 max-w-3xl">
            Haben Sie Fragen, Anregungen oder Feedback zur Fortbildungsreihe? Wir freuen uns über Ihre Nachricht!
          </p>
        </div>
      </div>

      <div className="container py-12">
        <div className="max-w-2xl mx-auto">
          {isSubmitted ? (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
              <div className="inline-flex items-center justify-center p-3 bg-green-100 rounded-full mb-4">
                <CheckCircle className="h-8 w-8 text-green-600" />
              </div>
              <h2 className="text-2xl font-semibold mb-4">Vielen Dank für Ihre Nachricht!</h2>
              <p className="text-gray-700 mb-6">
                Wir haben Ihre Anfrage erhalten und werden uns so schnell wie möglich bei Ihnen melden.
              </p>
              <button 
                onClick={() => setIsSubmitted(false)}
                className="btn-primary"
              >
                Neue Nachricht senden
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="bg-light rounded-xl p-8">
              <h2 className="text-2xl font-semibold mb-6">Kontaktformular</h2>
              
              <div className="mb-6">
                <label htmlFor="name" className="block text-gray-700 font-medium mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.name ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
                  aria-describedby={errors.name ? "name-error" : undefined}
                  aria-invalid={errors.name ? "true" : "false"}
                />
                {errors.name && (
                  <p id="name-error" className="mt-2 text-red-600 text-sm">
                    {errors.name}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
                  E-Mail
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.email ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
                  aria-describedby={errors.email ? "email-error" : undefined}
                  aria-invalid={errors.email ? "true" : "false"}
                />
                {errors.email && (
                  <p id="email-error" className="mt-2 text-red-600 text-sm">
                    {errors.email}
                  </p>
                )}
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-gray-700 font-medium mb-2">
                  Nachricht
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className={`w-full px-4 py-3 rounded-lg border ${errors.message ? 'border-red-500' : 'border-gray-300'} focus:outline-none focus:ring-2 focus:ring-accent`}
                  aria-describedby={errors.message ? "message-error" : undefined}
                  aria-invalid={errors.message ? "true" : "false"}
                ></textarea>
                {errors.message && (
                  <p id="message-error" className="mt-2 text-red-600 text-sm">
                    {errors.message}
                  </p>
                )}
              </div>
              
              <div className="mb-8">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    id="newsletter"
                    name="newsletter"
                    checked={formData.newsletter}
                    onChange={handleCheckboxChange}
                    className="h-5 w-5 text-accent rounded focus:ring-accent"
                  />
                  <label htmlFor="newsletter" className="ml-2 block text-gray-700">
                    Ich möchte Updates zu neuen Materialien und Fortbildungen erhalten
                  </label>
                </div>
              </div>
              
              <button
                type="submit"
                className="btn-primary w-full"
              >
                <Send className="mr-2 h-5 w-5" />
                Nachricht senden
              </button>
            </form>
          )}

          <div className="mt-12 bg-white p-8 rounded-xl border border-gray-200">
            <h3 className="text-xl font-semibold mb-4">Weitere Kontaktmöglichkeiten</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h4 className="font-medium mb-2">E-Mail</h4>
                <p className="text-accent">kontakt@quantenphysik-unterricht.de</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Telefon</h4>
                <p>+49 (0) 123 456789</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Adresse</h4>
                <p>Institut für Didaktik der Physik<br />Musterstraße 123<br />12345 Musterstadt</p>
              </div>
              <div>
                <h4 className="font-medium mb-2">Sprechzeiten</h4>
                <p>Montag - Freitag<br />9:00 - 16:00 Uhr</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
