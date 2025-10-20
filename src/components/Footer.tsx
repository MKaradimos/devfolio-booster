const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-8">
      <div className="container mx-auto px-4 text-center">
      <p className="text-sm text-gray-400 mt-4 sm:mt-0">
          © {new Date().getFullYear()} Michail Karadimos — All Rights Reserved
        </p>
      
      </div>
    </footer>
  );
};

export default Footer;
