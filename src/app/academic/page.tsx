// app/academics/page.tsx
import Image from 'next/image';
import { 
  Baby, 
  BookOpen, 
  Paintbrush, 
  Users, 
  Calculator, 
  FlaskConical, 
  Globe, 
  CheckCircle,
  Lightbulb,
  HeartHandshake,
  ShieldCheck,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

// --- DATA STRUCTURE (NOW WITH IMAGES) ---
type Program = {
  level: string;
  title: string;
  age: string;
  Icon: LucideIcon;
  imageUrl: string; // The new property for our images
  description: string;
  keyAreas: { name: string; Icon: LucideIcon }[];
  href: string; // Link to the detailed program page
};

const preschoolPrograms: Program[] = [
  {
    level: "Nursery",
    title: "Playful Discovery",
    age: "Ages 2-3",
    Icon: Baby,
    imageUrl: "/images/academics/nursery.jpg",
    description: "Our nursery program focuses on learning through play in a safe, nurturing environment. We build foundational social and motor skills.",
    keyAreas: [
      { name: "Social Interaction", Icon: Users },
      { name: "Fine & Gross Motor Skills", Icon: Paintbrush },
      { name: "Language Introduction", Icon: BookOpen },
    ],
    href: "/academics/nursery",
  },
  {
    level: "Kinder 1",
    title: "Curious Explorers",
    age: "Ages 3-4",
    Icon: Paintbrush,
    imageUrl: "/images/academics/kinder1.jpg",
    description: "We encourage curiosity with hands-on activities that introduce early concepts in literacy, numeracy, and science.",
    keyAreas: [
      { name: "Early Literacy", Icon: BookOpen },
      { name: "Basic Numeracy", Icon: Calculator },
      { name: "Creative Arts", Icon: Paintbrush },
    ],
    href: "/academics/kinder-1",
  },
  {
    level: "Kinder 2",
    title: "Confident Learners",
    age: "Ages 4-5",
    Icon: BookOpen,
    imageUrl: "/images/academics/kinder2.jpg",
    description: "Preparing for grade school, this program develops confidence and independence with a structured yet fun curriculum.",
    keyAreas: [
      { name: "Reading Readiness", Icon: BookOpen },
      { name: "Problem Solving", Icon: Calculator },
      { name: "Group Collaboration", Icon: Users },
    ],
    href: "/academics/kinder-2",
  },
];

const elementaryPrograms: Program[] = [
  {
    level: "Grades 1-2",
    title: "Foundational Pillars",
    age: "Ages 6-8",
    Icon: BookOpen,
    imageUrl: "https://images.unsplash.com/photos/boy-in-green-sweater-writing-on-white-paper-GDokEYnOfnE",
    description: "Students build strong foundations in core subjects like English, Math, and Science, fostering a love for learning.",
    keyAreas: [
      { name: "Core Literacy", Icon: BookOpen },
      { name: "Mathematical Concepts", Icon: Calculator },
      { name: "Scientific Inquiry", Icon: FlaskConical },
    ],
    href: "/academics/grades-1-2",
  },
  {
    level: "Grades 3-4",
    title: "Expanding Horizons",
    age: "Ages 8-10",
    Icon: Globe,
    imageUrl: "/images/academics/grades3-4.jpg",
    description: "The curriculum expands to include social studies and more complex scientific topics, encouraging critical thinking.",
    keyAreas: [
      { name: "Advanced Reading", Icon: BookOpen },
      { name: "World Cultures", Icon: Globe },
      { name: "Logical Reasoning", Icon: Calculator },
    ],
    href: "/academics/grades-3-4",
  },
  {
    level: "Grades 5-6",
    title: "Leadership & Inquiry",
    age: "Ages 10-12",
    Icon: Users,
    imageUrl: "/images/academics/grades5-6.jpg",
    description: "We prepare students for middle school with a focus on leadership, project-based learning, and independent research skills.",
    keyAreas: [
      { name: "Research Skills", Icon: FlaskConical },
      { name: "Public Speaking", Icon: Users },
      { name: "Global Awareness", Icon: Globe },
    ],
    href: "/academics/grades-5-6",
  },
];


// --- COMPONENT: Program Card with Image ---
const ProgramCard = ({ program }: { program: Program }) => {
  const { Icon, level, title, age, description, keyAreas, imageUrl, href } = program;
  return (
    <a 
      href={href}
      className="group block bg-card rounded-lg border border-border shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden"
    >
      <div className="overflow-hidden">
        <Image
          src={imageUrl}
          alt={`Students in the ${title} program`}
          width={400}
          height={250}
          className="w-full h-48 object-cover transition-transform duration-500 ease-in-out group-hover:scale-105"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 mb-4">
          <div className="bg-primary/10 text-primary p-3 rounded-lg">
            <Icon className="w-8 h-8" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-primary">{level}</h3>
            <p className="text-sm text-foreground/70">{age}</p>
          </div>
        </div>
        <h4 className="text-lg font-semibold mb-2">{title}</h4>
        <p className="text-foreground/80 mb-6 text-sm leading-relaxed min-h-[60px]">
          {description}
        </p>
        <div>
          <h5 className="font-semibold mb-3 text-sm tracking-wide uppercase text-foreground/60">Key Focus Areas</h5>
          <ul className="space-y-2">
            {keyAreas.map((area) => (
              <li key={area.name} className="flex items-center gap-3">
                <CheckCircle className="w-5 h-5 text-secondary flex-shrink-0" />
                <span className="text-sm text-foreground/90">{area.name}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </a>
  );
};

// --- MAIN PAGE ---
export default function AcademicsPage() {
  return (
    <div className="bg-background">
      <main className="container mx-auto px-4 py-16 sm:py-24">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl sm:text-5xl font-extrabold text-primary tracking-tight mb-4">
            Our Academic Journey
          </h1>
          <p className="max-w-3xl mx-auto text-lg text-foreground/80">
            From their first steps in our nursery to their final year of elementary, we provide a holistic and engaging curriculum designed to nurture curiosity and build lifelong learners.
          </p>
        </div>

        {/* Early Years Program Section */}
        <section id="early-years" className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Early Years Program</h2>
            <p className="text-md text-foreground/70 mt-2">Nursery & Kindergarten</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {preschoolPrograms.map((program) => (
              <ProgramCard key={program.level} program={program} />
            ))}
          </div>
        </section>
        
        {/* Why Choose Us Section */}
        <section className="my-24 bg-primary/5 rounded-lg p-8 md:p-12 border border-primary/10">
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1">
                    <h2 className="text-3xl font-bold tracking-tight text-primary mb-4">
                        An Education That Inspires
                    </h2>
                    <p className="text-foreground/80 mb-8 text-lg">
                        We go beyond textbooks to cultivate critical thinking, creativity, and a compassionate worldview in every student.
                    </p>
                    <div className="space-y-6">
                        <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-secondary/10 text-secondary p-3 rounded-full">
                                <Lightbulb className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Innovative Teaching</h4>
                                <p className="text-foreground/70">Our educators use modern, evidence-based methods to make learning engaging and effective.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-secondary/10 text-secondary p-3 rounded-full">
                                <ShieldCheck className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Safe & Nurturing Environment</h4>
                                <p className="text-foreground/70">We prioritize student well-being, ensuring a secure and supportive atmosphere for growth.</p>
                            </div>
                        </div>
                         <div className="flex items-start gap-4">
                            <div className="flex-shrink-0 bg-secondary/10 text-secondary p-3 rounded-full">
                                <HeartHandshake className="w-6 h-6" />
                            </div>
                            <div>
                                <h4 className="font-semibold text-lg">Strong Community Values</h4>
                                <p className="text-foreground/70">We foster a sense of belonging and partnership between students, teachers, and parents.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="order-1 md:order-2 rounded-lg overflow-hidden shadow-lg">
                    <Image
                        src="/images/academics/teacher-with-students.jpg"
                        alt="A teacher inspiring a group of elementary students"
                        width={600}
                        height={600}
                        className="w-full h-full object-cover"
                    />
                </div>
            </div>
        </section>

        {/* Elementary School Section */}
        <section id="elementary" className="mt-20 mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold tracking-tight">Elementary School</h2>
            <p className="text-md text-foreground/70 mt-2">Grades 1 to 6</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {elementaryPrograms.map((program) => (
              <ProgramCard key={program.level} program={program} />
            ))}
          </div>
        </section>

        
      </main>
      {/* Call to Action Section */}
        <section className="bg-secondary/10 text-center py-16 px-6">
          <h2 className="text-3xl font-bold text-secondary-foreground mb-4">Ready to Join Our Community?</h2>
          <p className="max-w-2xl mx-auto text-secondary-foreground/80 mb-8">
            Discover the difference our approach can make. We invite you to learn more about our admissions process or schedule a visit to see our campus in action.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a href="/admissions" className="bg-primary text-white font-semibold py-3 px-8 rounded-lg hover:bg-primary/90 transition-colors duration-300 shadow-md hover:shadow-lg">
              Inquire Now
            </a>
            <a href="/tour" className="bg-card border border-primary text-primary font-semibold py-3 px-8 rounded-lg hover:bg-primary/10 transition-colors duration-300">
              Schedule a Tour
            </a>
          </div>
        </section>
    </div>
  );
}