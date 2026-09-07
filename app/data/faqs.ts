export interface FAQItem {
  question: string;
  answer: string;
  category: "plans" | "services" | "employers";
}

export const faqsData: FAQItem[] = [
  {
    category: "plans",
    question: "What is the difference between the Basic and Premium Plan?",
    answer:
      "The Basic Plan focuses on complete profile marketing, resume & LinkedIn overhaul, and daily applications across top portals. The Premium Plan adds technical training, 1-on-1 interview support, personalized mock interview sessions, and dedicated career guidance.",
  },
  {
    category: "plans",
    question: "When is the Offer Acceptance Fee and Success Fee payable?",
    answer:
      "The Offer Acceptance Fee is due upon officially accepting a job offer. The Success Fee (12% for Basic, 10% for Premium) is payable only after you receive your first salary paycheck. Flexible EMI options are available and payable within 3 months.",
  },
  {
    category: "plans",
    question: "Are flexible EMI installment options available?",
    answer:
      "Yes, we provide flexible installment and EMI structures to ensure our services remain accessible without creating financial stress before your first compensation.",
  },
  {
    category: "services",
    question: "How does the profile marketing and job application process work?",
    answer:
      "Our dedicated recruitment specialists optimize your resume and LinkedIn to match applicant tracking systems (ATS), then actively market your profile and submit tailored daily applications directly to verified job portals and company career pages.",
  },
  {
    category: "services",
    question: "Do you help with Background Verification (BGC)?",
    answer:
      "Yes, both Basic and Premium plans include dedicated background verification (BGC) guidance and documentation support to ensure smooth onboarding with client companies.",
  },
  {
    category: "employers",
    question: "How quickly can HireVoTech supply qualified candidates?",
    answer:
      "For common tech stacks (Full-Stack, Cloud, Data, QA, BA), we provide curated, pre-screened shortlists within 48 to 72 hours of receiving your job description.",
  },
  {
    category: "employers",
    question: "What hiring engagement models do you support for businesses?",
    answer:
      "We support Direct Hire (Full-Time), Contract-to-Hire, and dedicated Contract Staff Augmentation models tailored to your project timeline.",
  },
];
