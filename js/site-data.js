/*
  EDIT THIS FILE FIRST.

  1. Replace YOUR NAME and YOUR_GITHUB_USERNAME.
  2. Add your links.
  3. Leave a normal URL as "" until it is available.

  For an unpublished paper, keep `pending: true`. The website will show a
  disabled "Coming soon" link instead of sending visitors to a broken page.
*/
window.SITE_DATA = {
  name: "Ngo Xuan Cuong",
  shortName: "Christ",
  username: "pokemon12332112",
  siteUrl: "pokemon12332112.github.io/",
  role: "Graduate Research Assistant",
  institution: "University of Arkansas",
  location: "Fayetteville, Arkansas",

  hero: {
    eyebrow: "Computer Vision · Multimodal AI",
    intro: "I am an M.S. student and Graduate Research Assistant at the University of Arkansas. My research focuses on computer vision, multimodal learning, trustworthy AI, and medical artificial intelligence.",
    status: "Open to research collaborations"
  },

  // Add your portrait as assets/profile.jpg, then change this value.
  photo: "assets/profile-placeholder.svg",
  photoFallback: "assets/profile-placeholder.svg",

  links: {
    github: "https://github.com/pokemon12332112",
    linkedin: "",
    scholar: "",
    cv: "",
    email: "ngoquy12332115@gmail.com"
  },

  about: [
    "I am an <strong>M.S. student in Computer Science</strong> and a Graduate Research Assistant at the <strong>University of Arkansas</strong>.",
    "My research lies at the intersection of <strong>computer vision, multimodal learning, medical AI, and trustworthy machine learning</strong>. I am interested in building models that reason over visual, linguistic, spatial, and temporal evidence while remaining reliable and calibrated.",
    "Current directions include vision-language models, uncertainty quantification, personalized streaming video understanding, medical image analysis, and controllable model behavior."
  ],

  news: [
    {
      date: "2026",
      text: "Our paper <em>DualCount: Structurally Consistent Density and Point Modeling for Zero-Shot Object Counting</em> has been accepted to ECCV 2026."
    },
    {
      date: "2026",
      text: "Our paper <em>SemLT3D: Semantic-Guided Expert Distillation for Camera-only Long-Tailed 3D Object Detection</em> has been accepted to CVPR 2026."
    },
    {
      date: "2025",
      text: "Our paper <em>Contrastive Point Feature Matching for Open-world Object Counting</em> has been accepted to BMVC 2025."
    },
    {
      date: "2025",
      text: "Our paper <em>Distribution-Guided Object Counting with Optimal Transport and DINO-Based Density Refinement</em> has been published in the SOICT 2024 proceedings."
    }
  ],

  publications: [
    {
      title: "SemLT3D: Semantic-Guided Expert Distillation for Camera-only Long-Tailed 3D Object Detection",
      authors: "Hao Vo, Khoa Vo, Thinh Phan, Ngo Xuan Cuong, Gianfranco Doretto, Hien Nguyen, Anh Nguyen, Ngan Le",
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      badge: "CVPR 2026",
      year: "2026",
      image: "assets/publications/semlt3d.svg",
      links: [
        { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Vo_SemLT3D_Semantic-Guided_Expert_Distillation_for_Camera-only_Long-Tailed_3D_Object_Detection_CVPR_2026_paper.pdf" }
      ]
    },
    {
      title: "DualCount: Structurally Consistent Density and Point Modeling for Zero-Shot Object Counting",
      authors: "Ngo Xuan Cuong",
      venue: "European Conference on Computer Vision (ECCV)",
      badge: "ECCV 2026",
      year: "2026",
      image: "assets/publications/dualcount.svg",
      links: [
        { label: "Paper", url: "", pending: true },
        { label: "Code", url: "", pending: true },
        { label: "Project", url: "", pending: true }
      ]
    },
    {
      title: "Contrastive Point Feature Matching for Open-world Object Counting",
      authors: "Ngo Xuan Cuong",
      venue: "British Machine Vision Conference (BMVC)",
      badge: "BMVC 2025",
      year: "2025",
      image: "assets/publications/cpmnet.svg",
      links: [
        { label: "Paper", url: "https://bmva-archive.org.uk/bmvc/2025/assets/papers/Paper_1183/paper.pdf" }
      ]
    },
    {
      title: "Distribution-Guided Object Counting with Optimal Transport and DINO-Based Density Refinement",
      authors: "Ngo Xuan Cuong, Tien-Dung Mai",
      venue: "International Symposium on Information and Communication Technology (SOICT)",
      badge: "SOICT 2024",
      year: "2025",
      image: "assets/publications/opticount.svg",
      links: [
        { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-981-96-4282-3_15" },
        { label: "DOI", url: "https://doi.org/10.1007/978-981-96-4282-3_15" }
      ]
    }

    // Add more publications here by copying the object above.
  ],

  research: [
    {
      title: "Multimodal intelligence",
      description: "Vision-language and video-audio systems that integrate heterogeneous evidence for grounded reasoning."
    },
    {
      title: "Trustworthy AI",
      description: "Uncertainty estimation, calibration, controllable behavior, and reliable representation learning."
    },
    {
      title: "Medical artificial intelligence",
      description: "Clinically meaningful image understanding, report generation, segmentation, and multimodal learning."
    }
  ],

  experience: [
    {
      period: "Present",
      title: "Graduate Research Assistant",
      subtitle: "M.S. in Computer Science",
      place: "University of Arkansas",
      description: "Research in computer vision, multimodal learning, medical AI, and trustworthy machine learning."
    }
  ],

  // Leave this empty until you want to add awards.
  awards: [],

  contact: {
    text: "I am happy to discuss research ideas, potential collaborations, and opportunities in computer vision and multimodal AI."
  }
};
