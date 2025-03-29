"use client";

import { Card, Image } from "antd";

interface Sponsor {
  category: string;
  items: {
    name: string;
    imageUrl: string;
  }[];
}

const sponsors: Sponsor[] = [
  {
    category: "Ed-Tech Partners",
    items: [
      {
        name: "Futurense Technologies",
        imageUrl: "/ed-tech-partners/futurense.png",
      },
      {
        name: "Carbon U Turn Technology Private Limited",
        imageUrl: "/ed-tech-partners/carbon-uturn.png",
      },
      { name: "Hunarho", imageUrl: "/ed-tech-partners/hunarho.png" },
      { name: "Protecon", imageUrl: "/ed-tech-partners/protecon.png" },
      { name: "CloudxLab", imageUrl: "/ed-tech-partners/cloudxlab.png" },
      { name: "Coursera Inc.", imageUrl: "/ed-tech-partners/coursera.png" },
      { name: "Jaro Education", imageUrl: "/ed-tech-partners/jaro.png" },
      {
        name: "Imarticus Learning Pvt. Ltd.",
        imageUrl: "/ed-tech-partners/imarticus.png",
      },
      { name: "Simplilearn", imageUrl: "/ed-tech-partners/simplilearn.png" },
      {
        name: "Zero Code Technology",
        imageUrl: "/ed-tech-partners/zerocode.png",
      },
      { name: "Futurewiz", imageUrl: "/ed-tech-partners/futurewiz.png" },
      {
        name: "Coding Ninjas",
        imageUrl: "/ed-tech-partners/coding-ninjas.png",
      },
      { name: "USAII", imageUrl: "/ed-tech-partners/usaii.png" },
      {
        name: "Talent Sprint",
        imageUrl: "/ed-tech-partners/talent-sprint.png",
      },
      { name: "EduXLL", imageUrl: "/ed-tech-partners/eduxll.png" },
    ],
  },
  {
    category: "International Sponsors",
    items: [
      {
        name: "Asian Development Bank",
        imageUrl: "/international-sponsors/adb.png",
      },
      {
        name: "Bangladesh Water Development Board",
        imageUrl: "/international-sponsors/bwdb.png",
      },
      {
        name: "Bhutan Power Corporation Ltd., Bhutan",
        imageUrl: "/international-sponsors/bpc.png",
      },
      {
        name: "Cowater International Inc., Canada",
        imageUrl: "/international-sponsors/cowater.png",
      },
      {
        name: "Ethiopian Electricity Agency, Ethiopia",
        imageUrl: "/international-sponsors/eea.png",
      },
      {
        name: "Fundo De Energia (FUNAE) Mozambique",
        imageUrl: "/international-sponsors/funae.png",
      },
      {
        name: "Ghana Irrigation Development Authority",
        imageUrl: "/international-sponsors/gida.png",
      },
      {
        name: "Institute of Water Modelling, Bangladesh",
        imageUrl: "/international-sponsors/iwm.png",
      },
      {
        name: "International Renewable Energy Agency, UAE",
        imageUrl: "/international-sponsors/irena.png",
      },
      {
        name: "Islamic Republic of Afghanistan",
        imageUrl: "/international-sponsors/ira.png",
      },
      {
        name: "Japan International Cooperation Agency",
        imageUrl: "/international-sponsors/jica.png",
      },
      {
        name: "LEA Associates South Asia Pvt. Ltd.",
        imageUrl: "/international-sponsors/lea.png",
      },
      {
        name: "Loughborough University, U.K.",
        imageUrl: "/international-sponsors/loughborough.png",
      },
      {
        name: "Ministry of Urban Development and Sacred Area Development SRILANKA",
        imageUrl: "/international-sponsors/mud-sl.png",
      },
      {
        name: "Ministry of Agriculture, Irrigation and Livestock (MAIL), Govt. of Afghanistan",
        imageUrl: "/international-sponsors/mail.png",
      },
      {
        name: "Ministry of External Affairs",
        imageUrl: "/international-sponsors/mea.png",
      },
      {
        name: "MNanyang Technological University Singapore",
        imageUrl: "/international-sponsors/ntu.png",
      },
      {
        name: "SAARC, New Delhi",
        imageUrl: "/international-sponsors/saarc.png",
      },
      {
        name: "Vienna International Centre",
        imageUrl: "/international-sponsors/vio.png",
      },
      {
        name: "Water Management Institute, Sri Lanka",
        imageUrl: "/international-sponsors/iwmi.png",
      },
    ],
  },
  {
    category: "National Sponsors",
    items: [
      {
        name: "Alstom Projects India Limited",
        imageUrl: "/national-sponsors/alstom.png",
      },
      {
        name: "Associated Cement Company",
        imageUrl: "/national-sponsors/acc.png",
      },
      {
        name: "Bharat Heavy Electronic Limited",
        imageUrl: "/national-sponsors/bhel.png",
      },
      {
        name: "Central Pollution Control Board",
        imageUrl: "/national-sponsors/cpcb.png",
      },
      {
        name: "Central Water Commission",
        imageUrl: "/national-sponsors/cwc.png",
      },
      {
        name: "Construction Industry Development Council",
        imageUrl: "/national-sponsors/cidc.png",
      },
      {
        name: "Damodar Valley Corporation",
        imageUrl: "/national-sponsors/dvc.png",
      },
      {
        name: "Department of Science & Technology",
        imageUrl: "/national-sponsors/dst.png",
      },
      {
        name: "Hindustan College of Science & Technology",
        imageUrl: "/national-sponsors/hcst.png",
      },
      { name: "Indian Railway", imageUrl: "/national-sponsors/ir.png" },
      {
        name: "Ministry of Home Affairs",
        imageUrl: "/national-sponsors/mha.png",
      },
      {
        name: "Ministry of Human Resource",
        imageUrl: "/national-sponsors/mhrd.png",
      },
      {
        name: "Ministry of Non Conventional Energy Sources",
        imageUrl: "/national-sponsors/mnces.png",
      },
      { name: "Ministry of Power", imageUrl: "/national-sponsors/mop.png" },
      {
        name: "Ministry of Water Resources",
        imageUrl: "/national-sponsors/mowr.png",
      },
      {
        name: "Moradabad Institute of Technology",
        imageUrl: "/national-sponsors/mit.png",
      },
      {
        name: "National Bank for Agriculture & Rural Development",
        imageUrl: "/national-sponsors/nabard.png",
      },
      {
        name: "National Hydropower Corporation Ltd",
        imageUrl: "/national-sponsors/nhpc.png",
      },
      {
        name: "National Programme on Earthquake Engineering Education",
        imageUrl: "/national-sponsors/npeee.png",
      },
      {
        name: "National Rural Roads Development Agency",
        imageUrl: "/national-sponsors/nrrda.png",
      },
      {
        name: "National Thermal Power Corporation",
        imageUrl: "/national-sponsors/ntpc.png",
      },
      {
        name: "Oil & Natural Gas Corporation",
        imageUrl: "/national-sponsors/ongc.png",
      },
      {
        name: "Power Finance Corporation",
        imageUrl: "/national-sponsors/pfc.png",
      },
      { name: "PRAGYA", imageUrl: "/national-sponsors/pragya.png" },
      {
        name: "Prasar Bharti",
        imageUrl: "/national-sponsors/prasar-bharti.png",
      },
      {
        name: "Project Management Unit",
        imageUrl: "/national-sponsors/pmu.png",
      },
      {
        name: "Punjab State Electricity Board",
        imageUrl: "/national-sponsors/pseb.png",
      },
      {
        name: "Research Designs & Standard Organisation",
        imageUrl: "/national-sponsors/rdso.png",
      },
      {
        name: "Rural Engineering Services",
        imageUrl: "/national-sponsors/res.png",
      },
      { name: "Security Paper Mills", imageUrl: "/national-sponsors/spm.png" },
      {
        name: "Smt. Ram Rati Gupta Women's Polytechnic",
        imageUrl: "/national-sponsors/srrgwp.png",
      },
      {
        name: "Tamil Nadu News Print and Papers Ltd",
        imageUrl: "/national-sponsors/tnpl.png",
      },
      { name: "TIFAC-CORE", imageUrl: "/national-sponsors/tifac.png" },
      {
        name: "Uttaranchal Academy of Administration",
        imageUrl: "/national-sponsors/uaa.png",
      },
      {
        name: "Xerox Modi Corp. Ltd",
        imageUrl: "/national-sponsors/xerox.png",
      },
    ],
  },
];

export default function SponsorsPage() {
  return (
    <div className="w-full">
      <section className="relative w-full h-[80vh] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-[url('/sponsors_background.jpeg')] bg-cover bg-center brightness-[0.7]"
          aria-hidden="true"
        ></div>
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent z-10"></div>

        {/* Content */}
        <div className="relative flex items-center z-20">
          <Image
            preview={false}
            src="/IITR_logo.png"
            width="164px"
            height="164px"
            className=""
            alt="IITR Logo"
          />
          <div className="border-l pl-2 text-white">
            <span className="text-2xl">IIT ROORKEE</span>
            <p className="text-4xl">CEC</p>
            <p className="text-4xl">Sponsors</p>
          </div>
        </div>
      </section>
      <section className="py-6">
        <div className="container mx-auto p-6">
          <h2 className="text-center text-4xl font-semibold mb-12">
            Our Sponsors
          </h2>
          {sponsors.map((sponsorCategory) => (
            <div key={sponsorCategory.category} className="mb-12">
              <h3 className="text-3xl text-center font-light mb-4">
                {sponsorCategory.category}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {sponsorCategory.items.map((item, index) => (
                  <Card key={index} className="shadow-lg">
                    <div className="w-full h-full flex items-center">
                      <Image
                        preview={false}
                        src={item.imageUrl}
                        alt={item.name}
                        width="150px"
                        height="80px"
                      />
                      <p className="text-xl font-medium ml-4 tracking-wide">
                        {item.name}
                      </p>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
