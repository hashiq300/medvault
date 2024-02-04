import { File } from "lucide-react";
import { Link } from "react-router-dom";

function QuickDocumentSection() {
  return (
    <section className="text-gray-50 bg-darkjunglegreen min-h-16 rounded-[0.9375rem] pt-[1.4rem] pb-5 px-[1.6rem]">
      <h2 className="font-medium text-lg mb-[1.38rem]">Your Documents</h2>
      <div className="flex justify-center gap-6 flex-wrap">
        <Document link="#" name="Health Insurance" />
        <Document link="#" name="Health Insurance" />
        <Document link="#" name="Health Insurance" />
        <Document link="#" name="Health Insurance" />
      </div>
    </section>
  );
}

function Document({ link, name }) {
  return (
    <Link to={link} className="w-[min(45%,8.125rem)] aspect-square  shrink-0 bg-gunmetal rounded-[0.9375rem] p-6 space-y-[0.62rem]">
        <File className="w-11 h-11 mx-auto" />
        <p className="text-center leading-4">{name}</p>
    </Link>
  );
}

export default QuickDocumentSection;
