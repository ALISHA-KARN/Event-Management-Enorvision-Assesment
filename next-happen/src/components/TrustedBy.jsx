const dummyLogos = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSWLMkwdOGfcnYgNW4Z-SaHqyNEj7Ke5YbHrw&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCMpqSjc9C8G2oAoYVfGoANf3DqhT85VGA8Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRpZ6E_zefmHCIz153wRnnlwWeRNYWTWSoFnA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDoC8Few1WBSUm2amxMXsnD_QuiweAdY9-1Q&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3MJLdI5w6QdhoXxOE257vnChmgWivSFCcnQ&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ4vCHcmMNZPYxvnkOB8uHTggPH5vVC_DFwng&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTE_GlqvVDbQhE-1x8VmErijlhRbtMQT8-XfA&s",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIRcwYrGd8bVLcaXg8JXchp3-u9EFfsMUMHA&s",
];

const TrustedBy = () => {
  return (
    <div className="w-full py-20 bg-gradient-to-r from-neutral-900 to-neutral-950 text-white overflow-hidden">
      <h2 className="text-center text-2xl sm:text-3xl font-semibold mb-10">
        Trusted by 100+ event organizers across India
      </h2>

      {/* Row 1 – scroll left */}
      <div className="overflow-hidden whitespace-nowrap">
        <div className="flex gap-8 animate-scroll-left w-max">
          {[...dummyLogos, ...dummyLogos].map((logo, i) => (
            <img
              key={`left-${i}`}
              src={logo}
              alt={`Logo ${i}`}
              className="h-16 w-auto object-contain bg-white p-1 rounded-md shadow"
            />
          ))}
        </div>
      </div>

      {/* Row 2 – scroll right */}
      <div className="overflow-hidden whitespace-nowrap mt-8">
        <div className="flex gap-8 animate-scroll-right w-max">
          {[...dummyLogos, ...dummyLogos].map((logo, i) => (
            <img
              key={`right-${i}`}
              src={logo}
              alt={`Logo ${i}`}
              className="h-16 w-auto object-contain bg-white p-1 rounded-md shadow"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TrustedBy;
