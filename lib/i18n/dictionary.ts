export type Locale = "ar" | "en";

export const locales: Locale[] = ["ar", "en"];
export const defaultLocale: Locale = "ar";

const avatar = (name: string) =>
  `https://ui-avatars.com/api/?name=${encodeURIComponent(
    name
  )}&background=0F172A&color=C9A227&size=512&font-size=0.33&bold=true`;

export interface Dictionary {
  dir: "rtl" | "ltr";
  brand: { name: string; tagline: string; description: string };
  nav: { home: string; about: string; services: string; team: string; blog: string; contact: string };
  common: {
    bookConsultation: string;
    contactUs: string;
    readMore: string;
    allServices: string;
    learnMore: string;
    viewFullTeam: string;
    exploreServices: string;
    langLabel: string; // label shown on the toggle for the OTHER language
  };
  hero: {
    badge: string;
    titleLead: string;
    titleHighlight: string;
    description: string;
    highlights: string[];
  };
  about: {
    eyebrow: string;
    title: string;
    subtitle: string;
    p1Lead: string;
    p1: string;
    p2: string;
    pillars: { title: string; text: string }[];
  };
  services: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { slug: string; icon: string; title: string; short: string }[];
  };
  whyUs: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { icon: string; title: string; description: string }[];
  };
  stats: { value: number; suffix: string; label: string }[];
  team: {
    eyebrow: string;
    title: string;
    subtitle: string;
    members: { id: number; name: string; role: string; bio: string; image: string }[];
  };
  faq: {
    eyebrow: string;
    title: string;
    subtitle: string;
    items: { question: string; answer: string }[];
  };
  cta: { title: string; description: string };
  contact: {
    eyebrow: string;
    title: string;
    subtitle: string;
    labels: { call: string; email: string; address: string; hours: string };
    form: {
      name: string;
      phone: string;
      email: string;
      subject: string;
      message: string;
      namePlaceholder: string;
      phonePlaceholder: string;
      emailPlaceholder: string;
      subjectPlaceholder: string;
      messagePlaceholder: string;
      submit: string;
      successTitle: string;
      successText: string;
      errors: {
        nameRequired: string;
        nameShort: string;
        phoneRequired: string;
        phoneInvalid: string;
        emailRequired: string;
        emailInvalid: string;
        subjectRequired: string;
        messageRequired: string;
        messageShort: string;
      };
    };
  };
  footer: {
    quickLinks: string;
    ourServices: string;
    contactUs: string;
    rights: string;
    madeWith: string;
  };
}

export const dictionary: Record<Locale, Dictionary> = {
  ar: {
    dir: "rtl",
    brand: {
      name: "مكتب السواعد",
      tagline: "للمحاماة والاستشارات والتحكيم",
      description:
        "خبرة قانونية وحلول احترافية لحماية حقوقكم. نقدّم خدمات المحاماة والاستشارات القانونية والتحكيم بأعلى معايير الاحترافية والسرية.",
    },
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الخدمات",
      team: "فريق العمل",
      blog: "المقالات",
      contact: "تواصل معنا",
    },
    common: {
      bookConsultation: "احجز استشارة",
      contactUs: "تواصل معنا",
      readMore: "اقرأ المزيد",
      allServices: "جميع الخدمات",
      learnMore: "تعرّف علينا أكثر",
      viewFullTeam: "تعرّف على الفريق كاملًا",
      exploreServices: "استكشف خدماتنا",
      langLabel: "EN",
    },
    hero: {
      badge: "مكتب محاماة رائد في قطر",
      titleLead: "خبرة قانونية وحلول احترافية",
      titleHighlight: "لحماية حقوقكم",
      description:
        "في مكتب السواعد للمحاماة والاستشارات القانونية والتحكيم، نضع خبرتنا القانونية العميقة في خدمتكم، ونرافقكم بثقة واحترافية في كل خطوة لضمان حصولكم على حقوقكم كاملة.",
      highlights: ["استشارات موثوقة", "سرية تامة", "خبرة 18+ عامًا"],
    },
    about: {
      eyebrow: "من نحن",
      title: "مكتب قانوني تثقون به",
      subtitle:
        "نخبة من المحامين والمستشارين القانونيين يجمعهم شغف العدالة والتزام راسخ بحماية حقوق موكليهم.",
      p1Lead: "مكتب السواعد",
      p1: "للمحاماة والاستشارات القانونية والتحكيم ليكون شريكًا قانونيًا موثوقًا للأفراد والشركات على حدٍ سواء. على مدى أكثر من ثمانية عشر عامًا، راكمنا خبرة عميقة في مختلف فروع القانون، وبنينا سجلًا حافلًا بالقضايا الناجحة والعملاء الراضين.",
      p2: "نؤمن بأن لكل قضية خصوصيتها، ولذلك نقدّم حلولًا قانونية مصمّمة بعناية تلبّي احتياجات كل موكل، مدعومة بفريق متخصص يعمل بروح الفريق الواحد لتحقيق أفضل النتائج.",
      pillars: [
        {
          title: "رسالتنا",
          text: "تقديم خدمات قانونية متميزة تحمي حقوق موكلينا وتحقق العدالة بأعلى معايير الاحترافية والنزاهة.",
        },
        {
          title: "رؤيتنا",
          text: "أن نكون المكتب القانوني الأول والخيار الموثوق للأفراد والشركات في مجال المحاماة والتحكيم.",
        },
        {
          title: "قيمنا",
          text: "النزاهة، السرية، الاحترافية، والالتزام التام تجاه موكلينا في كل قضية نتولاها.",
        },
      ],
    },
    services: {
      eyebrow: "خدماتنا",
      title: "خدمات قانونية متكاملة",
      subtitle:
        "نقدّم باقة شاملة من الخدمات القانونية التي تغطي مختلف احتياجاتكم القانونية بأعلى مستويات الجودة.",
      items: [
        { slug: "civil", icon: "scale", title: "القضايا المدنية", short: "تمثيل قانوني متكامل في كافة المنازعات المدنية أمام المحاكم." },
        { slug: "commercial", icon: "briefcase", title: "القضايا التجارية", short: "حلول قانونية للشركات والمنشآت في المنازعات التجارية." },
        { slug: "family", icon: "users", title: "قضايا الأحوال الشخصية", short: "معالجة قضايا الأسرة بحرفية وخصوصية تامة." },
        { slug: "criminal", icon: "gavel", title: "القضايا الجنائية", short: "دفاع قوي ومتخصص في القضايا الجنائية بكافة درجاتها." },
        { slug: "arbitration", icon: "handshake", title: "التحكيم التجاري", short: "تسوية النزاعات عبر التحكيم المحلي والدولي بكفاءة." },
        { slug: "execution", icon: "fileCheck", title: "التنفيذ", short: "متابعة إجراءات التنفيذ واستيفاء الحقوق." },
        { slug: "contracts", icon: "document", title: "العقود والاتفاقيات", short: "صياغة ومراجعة العقود بدقة قانونية تحمي مصالحكم." },
        { slug: "consulting", icon: "lightbulb", title: "الاستشارات القانونية", short: "استشارات قانونية موثوقة للأفراد والشركات." },
      ],
    },
    whyUs: {
      eyebrow: "لماذا نحن",
      title: "لماذا تختار مكتب السواعد؟",
      subtitle:
        "نتميّز بمجموعة من القيم والمزايا التي تجعلنا الخيار الأمثل لحماية حقوقكم القانونية.",
      items: [
        { icon: "award", title: "خبرة قانونية متخصصة", description: "فريق من المحامين والمستشارين ذوي الخبرة العميقة في مختلف التخصصات القانونية." },
        { icon: "clock", title: "استجابة سريعة", description: "نلتزم بالرد على استفساراتكم ومتابعة قضاياكم بأسرع وقت ممكن دون تأخير." },
        { icon: "shield", title: "سرية تامة", description: "نحافظ على خصوصية وسرية معلومات موكلينا وفق أعلى المعايير المهنية والأخلاقية." },
        { icon: "refresh", title: "متابعة مستمرة", description: "نرافقكم في كل مرحلة من مراحل القضية ونزوّدكم بالتحديثات أولًا بأول." },
      ],
    },
    stats: [
      { value: 1500, suffix: "+", label: "قضية ناجحة" },
      { value: 900, suffix: "+", label: "عميل سعيد" },
      { value: 18, suffix: "+", label: "سنة خبرة" },
      { value: 98, suffix: "%", label: "نسبة النجاح" },
    ],
    team: {
      eyebrow: "فريق العمل",
      title: "نخبة من الخبراء القانونيين",
      subtitle:
        "فريق متكامل من المحامين والمستشارين المتخصصين يضع خبرته بين أيديكم.",
      members: [
        { id: 1, name: "أ/ عبد القادر محمد الشيخ", role: "محامي تمييز - مؤسس المكتب", bio: "محامي تمييز ومؤسس المكتب، يقود الفريق بخبرة واسعة في الترافع أمام المحاكم.", image: avatar("عبد القادر الشيخ") },
        { id: 2, name: "أ/ محمد رجب", role: "مدير المكتب - محامي", bio: "مدير المكتب ومحامٍ، يشرف على إدارة القضايا ومتابعة سير العمل.", image: avatar("محمد رجب") },
        { id: 3, name: "أ/ محمود صلاح", role: "محامي", bio: "محامٍ بالمكتب، يتولى الترافع ومتابعة القضايا أمام مختلف الجهات.", image: avatar("محمود صلاح") },
        { id: 4, name: "أ/ أواب عبد الله", role: "محامي", bio: "محامٍ بالمكتب، يتولى الترافع ومتابعة القضايا أمام مختلف الجهات.", image: avatar("أواب عبد الله") },
        { id: 5, name: "أ/ محمد رمضان", role: "استشاري تكنولوجيا المعلومات", bio: "استشاري تكنولوجيا المعلومات، مسؤول عن الأنظمة والحلول التقنية بالمكتب.", image: avatar("محمد رمضان") },
        { id: 6, name: "أ/ عمران", role: "عامل بوفيه", bio: "عضو فريق الدعم، مسؤول عن خدمات الضيافة وراحة العملاء بالمكتب.", image: avatar("عمران") },
      ],
    },
    faq: {
      eyebrow: "الأسئلة الشائعة",
      title: "إجابات على أسئلتكم",
      subtitle:
        "جمعنا لكم أكثر الأسئلة شيوعًا حول خدماتنا القانونية وكيفية التعامل معنا.",
      items: [
        { question: "كيف يمكنني حجز استشارة قانونية مع المكتب؟", answer: "يمكنكم حجز استشارة عبر تعبئة نموذج التواصل في الموقع أو الاتصال المباشر على أرقام المكتب، وسيقوم فريقنا بالتواصل معكم لتحديد الموعد المناسب." },
        { question: "هل تقدمون استشارات قانونية عن بُعد؟", answer: "نعم، نوفّر استشارات قانونية عن بُعد عبر المكالمات الهاتفية والاجتماعات المرئية لراحة موكلينا داخل وخارج الدولة." },
        { question: "ما هي التخصصات القانونية التي يغطيها المكتب؟", answer: "يغطي المكتب القضايا المدنية والتجارية والجنائية والأحوال الشخصية، إضافة إلى التحكيم والتنفيذ وصياغة العقود والاستشارات القانونية." },
        { question: "هل تحافظون على سرية معلومات الموكلين؟", answer: "بالتأكيد، السرية التامة هي أحد أهم مبادئنا. نلتزم بحماية جميع معلومات ومستندات موكلينا وفق أعلى المعايير المهنية والأخلاقية." },
        { question: "كم تستغرق مدة معالجة القضية؟", answer: "تختلف مدة المعالجة حسب نوع القضية وتعقيدها، ونحرص دائمًا على إنجاز الإجراءات بأسرع وقت ممكن مع إبقائكم على اطلاع بكل مرحلة." },
        { question: "هل يمكنكم تمثيل الشركات والمؤسسات؟", answer: "نعم، نقدّم خدمات قانونية متكاملة للشركات والمؤسسات تشمل الاستشارات الدورية، صياغة العقود، وتمثيلها أمام الجهات القضائية والتحكيمية." },
      ],
    },
    cta: {
      title: "هل تحتاج إلى استشارة قانونية موثوقة؟",
      description:
        "لا تترك حقوقك للصدفة. تواصل مع فريقنا القانوني اليوم واحصل على الدعم الذي تستحقه.",
    },
    contact: {
      eyebrow: "تواصل معنا",
      title: "احجز استشارتك القانونية الآن",
      subtitle:
        "نحن هنا للإجابة على استفساراتكم ومساعدتكم. تواصلوا معنا وسنرد عليكم في أقرب وقت.",
      labels: { call: "اتصل بنا", email: "راسلنا", address: "العنوان", hours: "ساعات العمل" },
      form: {
        name: "الاسم",
        phone: "الهاتف",
        email: "البريد الإلكتروني",
        subject: "موضوع الرسالة",
        message: "الرسالة",
        namePlaceholder: "الاسم الكامل",
        phonePlaceholder: "05xxxxxxxx",
        emailPlaceholder: "example@email.com",
        subjectPlaceholder: "موضوع استفسارك",
        messagePlaceholder: "اكتب تفاصيل استفسارك هنا...",
        submit: "إرسال الرسالة",
        successTitle: "تم إرسال رسالتك بنجاح!",
        successText: "شكرًا لتواصلك معنا، سيقوم فريقنا بالرد عليك في أقرب وقت ممكن.",
        errors: {
          nameRequired: "الرجاء إدخال الاسم",
          nameShort: "الاسم قصير جدًا",
          phoneRequired: "الرجاء إدخال رقم الهاتف",
          phoneInvalid: "رقم هاتف غير صحيح",
          emailRequired: "الرجاء إدخال البريد الإلكتروني",
          emailInvalid: "بريد إلكتروني غير صحيح",
          subjectRequired: "الرجاء إدخال موضوع الرسالة",
          messageRequired: "الرجاء كتابة رسالتك",
          messageShort: "الرسالة قصيرة جدًا (10 أحرف على الأقل)",
        },
      },
    },
    footer: {
      quickLinks: "روابط سريعة",
      ourServices: "خدماتنا",
      contactUs: "تواصل معنا",
      rights: "جميع الحقوق محفوظة.",
      madeWith: "تم التصميم والتطوير بكل احترافية",
    },
  },

  en: {
    dir: "ltr",
    brand: {
      name: "Al Sawaed",
      tagline: "Law, Consultations & Arbitration",
      description:
        "Legal expertise and professional solutions to protect your rights. We provide law, legal consultation and arbitration services with the highest standards of professionalism and confidentiality.",
    },
    nav: {
      home: "Home",
      about: "About Us",
      services: "Services",
      team: "Our Team",
      blog: "Articles",
      contact: "Contact",
    },
    common: {
      bookConsultation: "Book a Consultation",
      contactUs: "Contact Us",
      readMore: "Read more",
      allServices: "All Services",
      learnMore: "Learn more about us",
      viewFullTeam: "Meet the full team",
      exploreServices: "Explore our services",
      langLabel: "ع",
    },
    hero: {
      badge: "A leading law firm in Qatar",
      titleLead: "Legal expertise and professional solutions",
      titleHighlight: "to protect your rights",
      description:
        "At Al Sawaed Law Firm for Legal Consultations and Arbitration, we put our deep legal expertise at your service, standing by you with confidence and professionalism at every step to secure your full rights.",
      highlights: ["Trusted consultations", "Full confidentiality", "18+ years of experience"],
    },
    about: {
      eyebrow: "About Us",
      title: "A law firm you can trust",
      subtitle:
        "An elite team of lawyers and legal consultants united by a passion for justice and a firm commitment to protecting their clients' rights.",
      p1Lead: "Al Sawaed Law Firm",
      p1: "for Legal Consultations and Arbitration was founded to be a trusted legal partner for individuals and companies alike. Over more than eighteen years, we have built deep expertise across the various branches of law and a strong track record of successful cases and satisfied clients.",
      p2: "We believe every case is unique, which is why we deliver carefully tailored legal solutions that meet each client's needs, backed by a specialized team working as one to achieve the best results.",
      pillars: [
        { title: "Our Mission", text: "To provide outstanding legal services that protect our clients' rights and uphold justice with the highest standards of professionalism and integrity." },
        { title: "Our Vision", text: "To be the leading law firm and the trusted choice for individuals and companies in the field of law and arbitration." },
        { title: "Our Values", text: "Integrity, confidentiality, professionalism, and complete dedication to our clients in every case we handle." },
      ],
    },
    services: {
      eyebrow: "Our Services",
      title: "Comprehensive legal services",
      subtitle:
        "We offer a full suite of legal services covering your various legal needs with the highest levels of quality.",
      items: [
        { slug: "civil", icon: "scale", title: "Civil Cases", short: "Full legal representation in all civil disputes before the courts." },
        { slug: "commercial", icon: "briefcase", title: "Commercial Cases", short: "Legal solutions for companies and businesses in commercial disputes." },
        { slug: "family", icon: "users", title: "Family Law", short: "Handling family matters with professionalism and complete privacy." },
        { slug: "criminal", icon: "gavel", title: "Criminal Cases", short: "Strong, specialized defense in criminal cases of all degrees." },
        { slug: "arbitration", icon: "handshake", title: "Commercial Arbitration", short: "Resolving disputes through local and international arbitration efficiently." },
        { slug: "execution", icon: "fileCheck", title: "Enforcement", short: "Managing enforcement procedures and recovering your rights." },
        { slug: "contracts", icon: "document", title: "Contracts & Agreements", short: "Drafting and reviewing contracts with legal precision to protect your interests." },
        { slug: "consulting", icon: "lightbulb", title: "Legal Consulting", short: "Reliable legal consultations for individuals and companies." },
      ],
    },
    whyUs: {
      eyebrow: "Why Us",
      title: "Why choose Al Sawaed?",
      subtitle:
        "We stand out through a set of values and advantages that make us the ideal choice to protect your legal rights.",
      items: [
        { icon: "award", title: "Specialized legal expertise", description: "A team of lawyers and consultants with deep experience across various legal specialties." },
        { icon: "clock", title: "Fast response", description: "We are committed to responding to your inquiries and following up on your cases as quickly as possible." },
        { icon: "shield", title: "Full confidentiality", description: "We safeguard the privacy of our clients' information under the highest professional and ethical standards." },
        { icon: "refresh", title: "Continuous follow-up", description: "We accompany you at every stage of the case and keep you updated first-hand." },
      ],
    },
    stats: [
      { value: 1500, suffix: "+", label: "Successful cases" },
      { value: 900, suffix: "+", label: "Happy clients" },
      { value: 18, suffix: "+", label: "Years of experience" },
      { value: 98, suffix: "%", label: "Success rate" },
    ],
    team: {
      eyebrow: "Our Team",
      title: "An elite team of legal experts",
      subtitle:
        "An integrated team of specialized lawyers and consultants placing their expertise at your service.",
      members: [
        { id: 1, name: "Abdulqader Mohammed Al Sheikh", role: "Cassation Lawyer – Founder", bio: "Cassation lawyer and founder of the firm, leading the team with extensive litigation experience before the courts.", image: avatar("Abdulqader Al Sheikh") },
        { id: 2, name: "Mohammed Ragab", role: "Office Manager – Lawyer", bio: "Office manager and lawyer, overseeing case management and the firm's workflow.", image: avatar("Mohammed Ragab") },
        { id: 3, name: "Mahmoud Salah", role: "Lawyer", bio: "Lawyer at the firm, handling litigation and case follow-up before various authorities.", image: avatar("Mahmoud Salah") },
        { id: 4, name: "Awab Abdullah", role: "Lawyer", bio: "Lawyer at the firm, handling litigation and case follow-up before various authorities.", image: avatar("Awab Abdullah") },
        { id: 5, name: "Mohammed Ramadan", role: "IT Consultant", bio: "Information technology consultant, responsible for the firm's systems and technical solutions.", image: avatar("Mohammed Ramadan") },
        { id: 6, name: "Imran", role: "Office Attendant", bio: "Support team member, responsible for hospitality and client comfort at the office.", image: avatar("Imran") },
      ],
    },
    faq: {
      eyebrow: "FAQ",
      title: "Answers to your questions",
      subtitle:
        "We've gathered the most common questions about our legal services and how to work with us.",
      items: [
        { question: "How can I book a legal consultation with the firm?", answer: "You can book a consultation by filling out the contact form on the website or by calling the firm directly, and our team will reach out to schedule a suitable appointment." },
        { question: "Do you offer remote legal consultations?", answer: "Yes, we provide remote legal consultations via phone calls and video meetings for the convenience of our clients inside and outside the country." },
        { question: "What legal areas does the firm cover?", answer: "The firm covers civil, commercial, criminal and family-status cases, in addition to arbitration, enforcement, contract drafting and legal consulting." },
        { question: "Do you maintain client confidentiality?", answer: "Absolutely. Full confidentiality is one of our core principles. We protect all our clients' information and documents under the highest professional and ethical standards." },
        { question: "How long does it take to handle a case?", answer: "The duration varies depending on the type and complexity of the case. We always strive to complete procedures as quickly as possible while keeping you informed at every stage." },
        { question: "Can you represent companies and institutions?", answer: "Yes, we provide integrated legal services for companies and institutions, including periodic consultations, contract drafting, and representation before judicial and arbitration bodies." },
      ],
    },
    cta: {
      title: "Need a trusted legal consultation?",
      description:
        "Don't leave your rights to chance. Get in touch with our legal team today and get the support you deserve.",
    },
    contact: {
      eyebrow: "Contact Us",
      title: "Book your legal consultation now",
      subtitle:
        "We're here to answer your questions and help you. Get in touch and we'll respond as soon as possible.",
      labels: { call: "Call us", email: "Email us", address: "Address", hours: "Working hours" },
      form: {
        name: "Name",
        phone: "Phone",
        email: "Email",
        subject: "Subject",
        message: "Message",
        namePlaceholder: "Full name",
        phonePlaceholder: "+974 xxxxxxxx",
        emailPlaceholder: "example@email.com",
        subjectPlaceholder: "Your inquiry subject",
        messagePlaceholder: "Write the details of your inquiry here...",
        submit: "Send Message",
        successTitle: "Your message has been sent!",
        successText: "Thank you for reaching out. Our team will get back to you as soon as possible.",
        errors: {
          nameRequired: "Please enter your name",
          nameShort: "Name is too short",
          phoneRequired: "Please enter your phone number",
          phoneInvalid: "Invalid phone number",
          emailRequired: "Please enter your email",
          emailInvalid: "Invalid email address",
          subjectRequired: "Please enter a subject",
          messageRequired: "Please write your message",
          messageShort: "Message is too short (at least 10 characters)",
        },
      },
    },
    footer: {
      quickLinks: "Quick Links",
      ourServices: "Our Services",
      contactUs: "Contact Us",
      rights: "All rights reserved.",
      madeWith: "Designed and developed with professionalism",
    },
  },
};
