
import Link from 'next/link';
import { Calendar, ArrowLeft, User } from 'lucide-react';

const articles = [
  {
    title: '5 Reasons to Choose TVS Apache RTR',
    slug: 'reasons-to-choose-apache-rtr',
    excerpt: 'Discover why the TVS Apache RTR is the perfect bike for performance enthusiasts.',
    date: '2025-09-01',
    author: 'Tahalka TVS Team',
    content: `
      <h2>Why Apache RTR is the Ultimate Performance Bike</h2>
      <p>The TVS Apache RTR series has consistently been a favorite among bike enthusiasts in Begusarai and across India. Here are 5 compelling reasons why you should consider the Apache RTR for your next ride:</p>
      
      <h3>1. Powerful 4-Valve Engine</h3>
      <p>The Apache RTR 160 4V comes with a race-tuned engine that delivers exceptional performance. With its oil-cooled technology, you get consistent power delivery even during long rides.</p>
      
      <h3>2. LED Lighting System</h3>
      <p>Modern LED headlamps and DRLs not only enhance visibility but also give the bike a premium look that stands out on Begusarai roads.</p>
      
      <h3>3. SmartXonnect Technology</h3>
      <p>Stay connected with your bike through TVS's smartphone connectivity features. Track your rides, monitor bike health, and more.</p>
      
      <h3>4. Excellent Mileage</h3>
      <p>Despite its performance-oriented nature, the Apache RTR delivers impressive fuel efficiency of around 45 kmpl, perfect for daily commuting in Begusarai.</p>
      
      <h3>5. Proven Reliability</h3>
      <p>TVS has built a reputation for reliable bikes, and the Apache RTR continues this legacy with robust build quality and easy maintenance.</p>
      
      <p><strong>Ready to experience the Apache RTR?</strong> Visit Tahalka TVS at NH-28, Teghra Chowk, Begusarai for a test ride today!</p>
    `
  },
  {
    title: 'How to Maintain Your TVS Bike',
    slug: 'maintain-your-tvs-bike',
    excerpt: 'Simple tips to keep your TVS bike in top condition.',
    date: '2025-08-15',
    author: 'Service Team',
    content: `
      <h2>Essential Maintenance Tips for Your TVS Bike</h2>
      <p>Regular maintenance is key to keeping your TVS bike running smoothly and extending its lifespan. Here's your complete guide to bike maintenance:</p>
      
      <h3>Regular Service Schedule</h3>
      <p>Follow the periodic maintenance schedule:</p>
      <ul>
        <li>First service: 500-750 km (FREE at Tahalka TVS!)</li>
        <li>Regular services: Every 3000-4000 km</li>
        <li>Major service: Every 10,000 km</li>
      </ul>
      
      <h3>Daily Checks</h3>
      <ul>
        <li>Check tire pressure weekly</li>
        <li>Inspect brakes before every ride</li>
        <li>Monitor engine oil level</li>
        <li>Clean air filter regularly</li>
      </ul>
      
      <h3>Monsoon Care</h3>
      <p>Begusarai's monsoon season requires special attention:</p>
      <ul>
        <li>Keep the bike covered when not in use</li>
        <li>Check electrical connections</li>
        <li>Clean and lubricate chain more frequently</li>
      </ul>
      
      <h3>When to Visit Tahalka TVS Service</h3>
      <p>Book a service if you notice:</p>
      <ul>
        <li>Unusual sounds from engine</li>
        <li>Reduced pickup or mileage</li>
        <li>Brake issues</li>
        <li>Any warning lights</li>
      </ul>
      
      <p>For genuine TVS parts and expert service, visit us at NH-28, Teghra Chowk, Begusarai or book on WhatsApp!</p>
    `
  },
  {
    title: 'Top 3 TVS Bikes for Daily Commuting',
    slug: 'top-tvs-bikes-daily-commuting',
    excerpt: 'Explore the best TVS bikes for your daily commute.',
    date: '2025-07-20',
    author: 'Sales Team',
    content: `
      <h2>Best TVS Bikes for Begusarai Commuters</h2>
      <p>Choosing the right bike for daily commuting in Begusarai requires considering factors like fuel efficiency, comfort, and reliability. Here are our top 3 recommendations:</p>
      
      <h3>1. TVS Jupiter 110 - The Comfort King</h3>
      <p>Perfect for Begusarai's roads with its:</p>
      <ul>
        <li>Excellent fuel efficiency: 50+ kmpl</li>
        <li>Comfortable seating for rider and pillion</li>
        <li>Large boot space for daily essentials</li>
        <li>Metal body for durability</li>
      </ul>
      <p><strong>Price:</strong> Starting from ₹83,000</p>
      
      <h3>2. TVS Raider 125 - The Style Statement</h3>
      <p>Ideal for young professionals:</p>
      <ul>
        <li>Sporty design with LED DRLs</li>
        <li>Great mileage: 57 kmpl</li>
        <li>Digital console with connectivity</li>
        <li>Smooth performance in city traffic</li>
      </ul>
      <p><strong>Price:</strong> Starting from ₹1,00,000</p>
      
      <h3>3. TVS Apache RTR 160 4V - The Performance Choice</h3>
      <p>For those who want performance with practicality:</p>
      <ul>
        <li>Powerful 4-valve engine</li>
        <li>Good mileage: 45 kmpl</li>
        <li>Advanced features like SmartXonnect</li>
        <li>Premium build quality</li>
      </ul>
      <p><strong>Price:</strong> Starting from ₹1,30,000</p>
      
      <h3>Why Choose Tahalka TVS?</h3>
      <ul>
        <li>Lowest down payment options</li>
        <li>Free first service</li>
        <li>Easy EMI through leading NBFCs</li>
        <li>Doorstep service available</li>
      </ul>
      
      <p>Visit our showroom at NH-28, Teghra Chowk, Begusarai for test rides and best deals!</p>
    `
  }
];

export async function generateStaticParams() {
  return articles.map((article) => ({
    slug: article.slug,
  }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);
  
  if (!article) {
    return {
      title: 'Blog Post Not Found | Tahalka TVS',
      description: 'The requested blog post could not be found.'
    };
  }

  return {
    title: `${article.title} | Tahalka TVS Blog`,
    description: article.excerpt,
    keywords: `${article.title}, TVS bikes, Begusarai, bike maintenance, TVS service`,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    }
  };
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const article = articles.find(a => a.slug === params.slug);

  if (!article) {
    return (
      <main className="mx-auto max-w-4xl px-4 py-10">
        <div className="text-center">
          <h1 className="text-3xl font-extrabold mb-4">Blog Post Not Found</h1>
          <p className="text-gray-600 mb-6">The requested blog post could not be found.</p>
          <Link href="/blog" className="text-blue-600 hover:underline">
            ← Back to Blog
          </Link>
        </div>
      </main>
    );
  }

  return (
    <main className="mx-auto max-w-4xl px-4 py-10">
      <div className="mb-8">
        <Link href="/blog" className="inline-flex items-center gap-2 text-blue-600 hover:underline mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to Blog
        </Link>
        
        <h1 className="text-3xl md:text-4xl font-extrabold mb-4">{article.title}</h1>
        
        <div className="flex items-center gap-6 text-sm text-gray-600 mb-8">
          <div className="flex items-center gap-2">
            <User className="w-4 h-4" />
            {article.author}
          </div>
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4" />
            {new Date(article.date).toLocaleDateString('en-IN', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </div>
        </div>
      </div>

      <article className="prose prose-lg max-w-none">
        <div dangerouslySetInnerHTML={{ __html: article.content }} />
      </article>

      <div className="mt-12 p-6 bg-blue-50 rounded-2xl">
        <h3 className="text-xl font-bold mb-4">Ready to Experience TVS Bikes?</h3>
        <p className="text-gray-700 mb-4">
          Visit Tahalka TVS at NH-28, Teghra Chowk, Begusarai for test rides, service, and genuine parts.
        </p>
        <div className="flex gap-3">
          <a 
            href="https://wa.me/917319762328?text=Hi%20Tahalka%20TVS!%20I%20want%20to%20book%20a%20test%20ride." 
            className="px-5 py-3 rounded-2xl bg-green-600 text-white font-semibold hover:bg-green-700"
          >
            Book Test Ride
          </a>
          <Link 
            href="/bikes" 
            className="px-5 py-3 rounded-2xl border border-blue-600 text-blue-600 font-semibold hover:bg-blue-50"
          >
            Browse Bikes
          </Link>
        </div>
      </div>
    </main>
  );
}