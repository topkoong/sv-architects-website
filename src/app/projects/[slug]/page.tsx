import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { projects } from '@/data/projects';

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find(p => p.id === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden">
        <Image
          src={project.images.thumbnail}
          alt={project.name}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-40" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">{project.name}</h1>
            <p className="text-xl md:text-2xl">{project.category} • {project.type}</p>
          </div>
        </div>
      </div>

      {/* Project Details */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <div className="prose prose-lg max-w-none">
              <h2 className="text-3xl font-bold mb-6">Project Overview</h2>
              <p className="text-gray-700 mb-8">{project.description}</p>
              
              {/* Features */}
              <h3 className="text-2xl font-bold mb-4">Key Features</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-blue-600 mr-2">•</span>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Gallery */}
              <h3 className="text-2xl font-bold mb-6">Project Gallery</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {project.images.gallery.map((image, index) => (
                  <div key={index} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                    <Image
                      src={image}
                      alt={`${project.name} - Image ${index + 1}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-50 p-6 rounded-lg sticky top-8">
              <h3 className="text-xl font-bold mb-4">Project Details</h3>
              
              <div className="space-y-4">
                <div>
                  <span className="font-semibold text-gray-900">Category:</span>
                  <span className="ml-2 text-gray-700">{project.category}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-900">Type:</span>
                  <span className="ml-2 text-gray-700">{project.type}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-900">Location:</span>
                  <span className="ml-2 text-gray-700">{project.location}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-900">Year:</span>
                  <span className="ml-2 text-gray-700">{project.year}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-900">Status:</span>
                  <span className="ml-2 text-gray-700 capitalize">{project.status}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-900">Size:</span>
                  <span className="ml-2 text-gray-700">{project.size}</span>
                </div>
                
                <div>
                  <span className="font-semibold text-gray-900">Client:</span>
                  <span className="ml-2 text-gray-700">{project.client}</span>
                </div>
              </div>

              {/* Awards */}
              {project.awards && project.awards.length > 0 && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Awards</h4>
                  <ul className="space-y-1">
                    {project.awards.map((award, index) => (
                      <li key={index} className="text-gray-700 text-sm">• {award}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Sustainability */}
              {project.sustainability && (
                <div className="mt-6">
                  <h4 className="font-semibold text-gray-900 mb-2">Sustainability</h4>
                  <div className="space-y-1 text-sm">
                    {project.sustainability.leed && (
                      <div className="text-green-600">✓ LEED Certified</div>
                    )}
                    {project.sustainability.greenBuilding && (
                      <div className="text-green-600">✓ Green Building</div>
                    )}
                    {project.sustainability.energyEfficient && (
                      <div className="text-green-600">✓ Energy Efficient</div>
                    )}
                  </div>
                </div>
              )}

              {/* Back to Projects */}
              <div className="mt-8">
                <Link
                  href="/projects"
                  className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  ← Back to Projects
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id,
  }));
}
