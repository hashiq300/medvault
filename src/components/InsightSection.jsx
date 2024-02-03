import { getCurrentFormattedDate } from "@/lib/date";
import { useState } from "react";
import { useMemo } from "react";

function InsightSection() {

    const [quote, setQuote] = useState("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum efficitur leo malesuada est mollis feugiat. Nulla gravida volutpat odio, et vestibulum elit euismod at.");
    const [author, setAuthor] = useState("Lorem ipsum");
  const date = useMemo(() => getCurrentFormattedDate(), []);


  return (
    <section className="text-gray-50 bg-darkjunglegreen min-h-16 rounded-[0.9375rem] pt-[1.4rem] pb-8 px-[1.6rem]">
      <h2 className="font-medium text-lg mb-[0.38rem]">Insight for the day</h2>
      <p className="text-philippinegray text-xs mb-6">{date}</p>

      <p className="font-ibmflexserif font-medium text-lg">
        “{quote}”
      </p>

      <p className="text-[0.9375rem] mt-[0.62rem]">- {author}</p>
    </section>
  );
}

export default InsightSection;
