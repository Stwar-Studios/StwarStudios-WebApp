import React, { createContext, ReactNode, useContext } from 'react';
import { useTranslation } from 'react-i18next';
import {
  TranslationContextProps,
} from './translation-provider-props'

const TranslationContext = createContext<TranslationContextProps | undefined>(undefined);

export const TranslationProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const { t, i18n } = useTranslation();

  const changeLanguage = (language: string) => {
    i18n.changeLanguage(language);
  };

  const value: TranslationContextProps = {
    videoShowcase: {
      homeTitle: t('videoShowcase.homeTitle'),
      homeSubTitle: t('videoShowcase.homeSubTitle'),
      contactButton: t('videoShowcase.contactButton'),
      servicesArrowTitle: t('videoShowcase.servicesArrowTitle'),
      htmlVideoFallback: t('videoShowcase.htmlVideoFallback'),
    },
    servicesSection: {
      title: t('servicesSection.title'),
      services: [
        {
          title: t('servicesSection.services.0.title'),
          description: t('servicesSection.services.0.description'),
          button: t('servicesSection.services.0.button')
        },
        {
          title: t('servicesSection.services.1.title'),
          description: t('servicesSection.services.1.description'),
          button: t('servicesSection.services.1.button')
        }
      ]
    },
    companyDescSection: {
      title: t('companyDescSection.title'),
      description: t('companyDescSection.description'),
    },
    techStackSection: {
      title: t('techStackSection.title'),
      technologies: {
        blazor: t('techStackSection.technologies.blazor'),
        azure: t('techStackSection.technologies.azure'),
        dotnet: t('techStackSection.technologies.dotnet'),
        react: t('techStackSection.technologies.react'),
        angular: t('techStackSection.technologies.angular'),
        sql: t('techStackSection.technologies.sql')
      }
    },
    usDescSection: {
      title: t('usDescSection.title'),
      description: [
        t('usDescSection.description1'),
        t('usDescSection.description2'),
        t('usDescSection.description3'),
      ],
      closingStatement: t('usDescSection.closingStatement'),
    },
    valuesDescSection: { 
      title: t('valuesDescSection.title'),
      values : t('valuesDescSection.values', { returnObjects: true })
    },
    contactSection : {
      title: t('contactSection.title'),
      subtitle: t('contactSection.subtitle'),
      contactTitle: t('contactSection.contactTitle'),
      contactDescription: t('contactSection.contactDescription'),
      contactDescription2: t('contactSection.contactDescription2'),
      email: t('contactSection.email'),
      phone: t('contactSection.phone'),
      writeToUs: t('contactSection.writeToUs'),
      form: {
        name: t('contactSection.form.name'),
        email: t('contactSection.form.email'),
        phone: t('contactSection.form.phone'),
        topic: t('contactSection.form.topic'),
        message: t('contactSection.form.message'),
        submit: t('contactSection.form.submit'),
        loading: t('contactSection.form.loading')
      },
      errors: {
        name: t('contactSection.errors.name'),
        email: t('contactSection.errors.email'),
        phone: t('contactSection.errors.phone'),
        topic: t('contactSection.errors.topic'),
        message: t('contactSection.errors.message'),
        api: t('contactSection.errors.api')
      },
      success: t('contactSection.success')
    },
    navbar : {
      contactButton: t('navbar.contactButton'),
      servicesSection: t('navbar.servicesSection'),
      techStackSection: t('navbar.techStackSection'),
      valuesSection: t('navbar.valuesSection'),
    },
    changeLanguage,
    getCurrentLanguage: () =>
    {
      return i18n.language;
    }
  };

  return (
    <TranslationContext.Provider value={value}>
      {children}
    </TranslationContext.Provider>
  );
};

export const useTranslations = () => {
  const context = useContext(TranslationContext);
  if (!context) {
    throw new Error('useTranslations must be used within a TranslationProvider');
  }
  return context;
};