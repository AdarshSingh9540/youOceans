import { Twitter, Facebook, Linkedin, Mail } from "lucide-react";

export default function Footer() {
  return (
    <footer className="text-white py-16 bg-gradient-to-r from-[#004b53] via-[#006e74] to-[#007a82] relative">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row justify-between lg:px-[5rem] gap-8">
          <div className="mb-8 md:mb-0">
            <h3 className="text-2xl font-bold mb-4">YouOceans</h3>
            <p className="text-white">
              Empowering Oceans with AI-driven tools and insights.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Connect With Us</h4>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-[#00b0b9] transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-[#00b0b9] transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-[#00b0b9] transition-colors">
                <Linkedin size={24} />
              </a>
            </div>
            <div className="mt-4 flex items-center">
              <Mail size={20} className="mr-2" />
              <a
                href="mailto:info@you-oceans.com"
                className="hover:text-[#ff6f61] transition-colors"
              >
                info@you-oceans.com
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-[#003e45] text-center text-white">
          <p>&copy; 2024 youoceans. All rights reserved.</p>
        </div>
      </div>

      <div className="absolute left-0 bottom-0 z-10">
        <img
          src="https://res.cloudinary.com/dzvdh7yez/image/upload/v1729584353/Vector_fapfat.png"
          alt="Paper airplane icon"
          width={300}
          height={300}
          className="opacity-50"
        />
      </div>
    </footer>
  );
}
