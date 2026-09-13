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
    eyebrow: "About me",
    intro: "I am an M.S. student and Graduate Research Assistant at the University of Arkansas, studying vision-language models, post-training adaptation, and uncertainty quantification for reliable embodied AI.",
    status: "Open to research collaborations"
  },

  // Add your portrait as assets/profile.jpg, then change this value.
  photo: "assets/profile_1.jpg",
  photoFallback: "assets/profile-placeholder.svg",

  links: {
    github: "https://github.com/pokemon12332112",
    linkedin: "https://www.linkedin.com/in/xuan-cuong-ngo-8b15b3364/",
    scholar: "https://scholar.google.com/citations?user=qdDONQQAAAAJ&hl=en",
    cv: "assets/Cuong_s_Resume.pdf",
    email: "ngoquy12332115@gmail.com"
  },

  about: [
    "I am an <strong>M.S. student in Computer Science</strong> at the <strong>University of Arkansas</strong>, where I work as a Graduate Research Assistant with Prof. Ngan Le. I expect to graduate in May 2027.",
    "My research focuses on <strong>vision-language models</strong>, especially understanding and shaping their internal representations through post-training methods such as activation steering.",
    "I am also interested in <strong>uncertainty quantification</strong>, including conformal prediction and Laplace approximation, for reliable VLA models and robotics."
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
      date: "2026",
      text: "Our paper <em>SCOPE: Self-Consistent Patch Reconstruction with Pathology-Aware Prototype Alignment for Anatomical Neglect in CXR Report Generation</em> has been accepted to the CVPR 2026 MMFM-BIOMED Workshop."
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
      title: "DualCount: Structurally Consistent Density and Point Modeling for Zero-Shot Object Counting",
      authors: "Ngo Xuan Cuong",
      venue: "European Conference on Computer Vision (ECCV)",
      badge: "ECCV 2026",
      year: "2026",
      image: "assets/publications/dualcount.png",
      links: [
        { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-3-032-37335-9_6" },
        { label: "Code", url: "https://github.com/pokemon12332112/DualCount" }
      ]
    },
    {
      title: "SemLT3D: Semantic-Guided Expert Distillation for Camera-only Long-Tailed 3D Object Detection",
      authors: "Hao Vo, Khoa Vo, Thinh Phan, Ngo Xuan Cuong, Gianfranco Doretto, Hien Nguyen, Anh Nguyen, Ngan Le",
      venue: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      badge: "CVPR 2026",
      year: "2026",
      image: "assets/publications/semlt3d.png",
      links: [
        { label: "Paper", url: "https://openaccess.thecvf.com/content/CVPR2026/papers/Vo_SemLT3D_Semantic-Guided_Expert_Distillation_for_Camera-only_Long-Tailed_3D_Object_Detection_CVPR_2026_paper.pdf" }
      ]
    },
    {
      title: "Contrastive Point Feature Matching for Open-world Object Counting",
      authors: "Ngo Xuan Cuong",
      venue: "British Machine Vision Conference (BMVC)",
      badge: "BMVC 2025",
      year: "2025",
      image: "assets/publications/cpmnet.png",
      links: [
        { label: "Paper", url: "https://bmva-archive.org.uk/bmvc/2025/assets/papers/Paper_1183/paper.pdf" }
      ]
    },
    {
      title: "SCOPE: Self-Consistent Patch Reconstruction with Pathology-Aware Prototype Alignment for Anatomical Neglect in CXR Report Generation",
      authors: "Ngo Xuan Cuong",
      venue: "MMFM-BIOMED Workshop at CVPR",
      badge: "CVPRW 2026",
      year: "2026",
      image: "assets/publications/scope.png",
      links: [
        { label: "Paper", url: "", pending: true }
      ]
    },
    {
      title: "Distribution-Guided Object Counting with Optimal Transport",
      authors: "Ngo Xuan Cuong, Tien-Dung Mai",
      venue: "International Symposium on Information and Communication Technology (SOICT)",
      badge: "SOICT 2024",
      year: "2025",
      image: "assets/publications/opticount.png",
      links: [
        { label: "Paper", url: "https://link.springer.com/chapter/10.1007/978-981-96-4282-3_15" },
        { label: "DOI", url: "https://doi.org/10.1007/978-981-96-4282-3_15" }
      ]
    }

    // Add more publications here by copying the object above.
  ],

  research: [
    {
      title: "Vision-language models",
      description: "Understanding and shaping internal representations through post-training adaptation methods such as activation steering."
    },
    {
      title: "Uncertainty quantification",
      description: "Conformal prediction, Laplace approximation, and calibration methods for dependable multimodal models."
    },
    {
      title: "Reliable embodied AI",
      description: "Robust vision-language-action models for robotics, autonomous systems, and grounded decision-making."
    }
  ],

  experience: [
    {
      period: "Aug. 2025 – Present",
      title: "Graduate Research Assistant",
      subtitle: "Advisor: Prof. Ngan Le",
      place: "University of Arkansas · Fayetteville, AR",
      description: "Research on vision-language models, uncertainty quantification, and robotics."
    },
    {
      period: "Aug. 2025 – May 2027",
      title: "M.S. in Computer Science",
      subtitle: "GPA: 4.0 · Expected May 2027",
      place: "University of Arkansas · Fayetteville, AR",
      description: "Graduate study in computer science and artificial intelligence."
    },
    {
      period: "May 2025 – Aug. 2025",
      title: "AI Engineer Intern",
      subtitle: "Viettel Group",
      place: "Ho Chi Minh City, Vietnam",
      description: "Worked on 3D reconstruction for virtual reality and video retrieval for television services."
    },
    {
      period: "Aug. 2023 – May 2025",
      title: "Undergraduate Research Assistant",
      subtitle: "Advisor: Dr. Tien Dung Mai",
      place: "University of Information Technology, VNU-HCM",
      description: "Research on vision-language models and optimal transport."
    },
    {
      period: "Jul. 2024 – Jan. 2025",
      title: "AI Engineer Intern",
      subtitle: "Bosch Global Software Technologies",
      place: "Ho Chi Minh City, Vietnam",
      description: "Developed LLM agents and vision-language-action models for robotic-arm-based automated product testing."
    },
    {
      period: "Sep. 2021 – May 2025",
      title: "B.S. in Computer Science",
      subtitle: "University of Information Technology, VNU-HCM",
      place: "Ho Chi Minh City, Vietnam",
      description: "Completed undergraduate study in computer science."
    }
  ],

  awards: [
    {
      year: "2026",
      title: "Broadening Participation Scholarship",
      organization: "IEEE/CVF Conference on Computer Vision and Pattern Recognition (CVPR)",
      description: "Awarded in support of participation at CVPR 2026.",
      icon: "✦"
    },
    {
      year: "2021 – 2025",
      title: "Excellent Academic Scholarship",
      organization: "University of Information Technology, VNU-HCM",
      description: "Four-time recipient for academic excellence.",
      icon: "✦"
    }
  ],

  contact: {
    text: "I am happy to discuss research ideas and collaborations in vision-language models, uncertainty quantification, robotics, and trustworthy AI."
  }
};
