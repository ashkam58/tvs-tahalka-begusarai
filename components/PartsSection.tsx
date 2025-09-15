import Image from 'next/image';

export interface Part {
  name: string;
  image: string;
  description?: string;
}

interface PartsSectionProps {
  parts: Part[];
}

export default function PartsSection({ parts }: PartsSectionProps) {
  return (
    <section className="my-12">
      <h2 className="text-2xl font-bold mb-6">Genuine TVS Parts</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {parts.map((part) => (
          <div key={part.name} className="bg-white rounded-xl shadow p-4 flex flex-col items-center">
            <Image src={part.image} alt={part.name} width={120} height={120} className="mb-3 rounded-lg border" />
            <div className="font-semibold text-lg mb-1">{part.name}</div>
            {part.description && <div className="text-gray-600 text-sm text-center">{part.description}</div>}
          </div>
        ))}
      </div>
    </section>
  );
}