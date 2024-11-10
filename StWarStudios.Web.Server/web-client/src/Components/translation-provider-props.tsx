
export interface VideoShowcaseTranslations {
    homeTitle: string;
    homeSubTitle: string;
    contactButton: string;
    servicesArrowTitle: string;
    htmlVideoFallback: string;
  }
  export interface ServiceTranslations {
    title: string;
    description: string;
    button: string;
  }
  export interface ServicesSectionTranslations {
    title: string;
    services: ServiceTranslations[];
  }
  
  export interface CompanyDescSectionTranslations {
    title: string;
    description: string;
  }
  
  export interface TechStackSectionTranslations {
    title: string;
    technologies: {
      blazor: string;
      azure: string;
      dotnet: string;
      react: string;
      angular: string;
      sql: string;
    };
  }
  export interface UsDescSectionTranslations {
    title: string;
    description: string[];
    closingStatement: string;
  }
  export interface ValuesDescSectionTranslations {
    title: string;
    values: object;
  }

  export interface ContactFormTranslations {
    title: string;
    subtitle: string;
    contactTitle: string;
    contactDescription: string;
    contactDescription2: string;
    email: string;
    phone: string;
    writeToUs: string;
    form: {
      name: string;
      email: string;
      phone: string;
      topic: string;
      message: string;
      submit: string;
      loading: string;
    };
    errors: {
      name: string;
      email: string;
      phone: string;
      topic: string;
      message: string;
      api: string;
    };
    success: string;
  }
  export interface NavbarTranslations {
    contactButton: string;
    servicesSection: string;
    techStackSection: string;
    valuesSection: string;
  }
  export interface TranslationContextProps {
    videoShowcase: VideoShowcaseTranslations;
    servicesSection: ServicesSectionTranslations;
    companyDescSection: CompanyDescSectionTranslations;
    techStackSection: TechStackSectionTranslations;
    usDescSection : UsDescSectionTranslations;
    valuesDescSection: ValuesDescSectionTranslations;
    contactSection: ContactFormTranslations;
    navbar: NavbarTranslations;
    changeLanguage: (language: string) => void;
    getCurrentLanguage: () => string;
  }
  