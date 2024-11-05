import React, { useState } from 'react';
import { Upload, ChevronRight } from 'lucide-react';

const roles = [
  {
    title: "Mobile App Developers",
    description: "Build innovative mobile applications using React Native and Flutter",
    requirements: ["3+ years of mobile development", "Experience with React Native", "Strong UI/UX skills"]
  },
  {
    title: "Spring Boot Developers",
    description: "Develop robust backend services and APIs",
    requirements: ["4+ years Java experience", "Spring Boot expertise", "Microservices architecture"]
  },
  {
    title: "UI/UX & Graphic/Logo Design",
    description: "Create beautiful and intuitive user interfaces",
    requirements: ["3+ years design experience", "Figma proficiency", "Strong portfolio"]
  },
  {
    title: "Video Editing",
    description: "Create engaging video content for our platform",
    requirements: ["2+ years video editing", "Adobe Premier Pro", "Motion graphics skills"]
  }
];

const CareersSection = () => {
  const [selectedRole, setSelectedRole] = useState<string | null>(null);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  return (
    <section className="py-20 bg-transparent">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold mb-4 text-[#4b6efd]">Join Our Team</h2>
          <p className="text-gray-600">Be part of our mission to revolutionize healthcare</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <div className="space-y-4">
              {roles.map((role, index) => (
                <div
                  key={index}
                  className={`p-6 rounded-xl transition-all cursor-pointer ${
                    selectedRole === role.title
                      ? 'bg-gradient-to-r from-[#6d8cff] to-[#4b6efd] text-white shadow-lg'
                      : 'bg-white/80 backdrop-blur-sm border border-[#6d8cff]/20 hover:border-[#6d8cff]'
                  }`}
                  onClick={() => setSelectedRole(role.title)}
                  data-aos="fade-up"
                  data-aos-delay={index * 100}
                >
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold">{role.title}</h3>
                    <ChevronRight className={`w-5 h-5 transform transition-transform ${
                      selectedRole === role.title ? 'rotate-90' : ''
                    }`} />
                  </div>
                  <p className={`mb-4 ${selectedRole === role.title ? 'text-white/90' : 'text-gray-600'}`}>
                    {role.description}
                  </p>
                  {selectedRole === role.title && (
                    <div className="space-y-2">
                      <p className="font-semibold text-white/90">Requirements:</p>
                      <ul className="list-disc list-inside space-y-1 text-white/80">
                        {role.requirements.map((req, i) => (
                          <li key={i}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="lg:col-span-1">
            <div className="sticky top-24 bg-white/80 backdrop-blur-sm p-6 rounded-xl border border-[#6d8cff]/20">
              <h3 className="text-xl font-bold mb-6">Apply Now</h3>
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Position</label>
                  <select 
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#4b6efd] focus:border-transparent bg-white"
                    value={selectedRole || ''}
                    onChange={(e) => setSelectedRole(e.target.value)}
                  >
                    <option value="">Select a position</option>
                    {roles.map((role, index) => (
                      <option key={index} value={role.title}>{role.title}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Resume</label>
                  <div className="relative border-2 border-dashed border-[#6d8cff]/30 rounded-lg p-4 text-center">
                    <input
                      type="file"
                      onChange={(e) => e.target.files?.[0] && setSelectedFile(e.target.files[0])}
                      className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      accept=".pdf,.doc,.docx"
                    />
                    <Upload className="w-8 h-8 text-[#4b6efd] mx-auto mb-2" />
                    <p className="text-sm text-gray-600">
                      {selectedFile ? selectedFile.name : 'Upload your resume'}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-[#6d8cff] to-[#4b6efd] text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
                  Submit Application
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CareersSection;