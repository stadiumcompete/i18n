import { LANGUAGE } from "../languages";
import { T_GENERAL } from "./general";
import { T_STADIUM } from "./stadium";
import { T_TOURNAMENT } from "./tournament";

export const T = {
  // General Terms
  ...T_GENERAL,

  // STADIUM-specific
  ...T_STADIUM,

  // View: Tournament or League
  ...T_TOURNAMENT,

  // View: Search
  SEARCH_HEADER_GENERIC: {
    [LANGUAGE.EN]: "Find your competition.",
    [LANGUAGE.ES]: "Encuentra tu competencia.",
    [LANGUAGE.FR]: "Trouvez votre compétition.",
  },
  SEARCH_CTA_CREATE: {
    [LANGUAGE.EN]: "or, create your own",
    [LANGUAGE.ES]: "o, crea la tuya",
    [LANGUAGE.FR]: "ou, créez la vôtre",
  },
  SEARCH_VIEWING: {
    [LANGUAGE.EN]: "Viewing",
    [LANGUAGE.ES]: "Viendo",
    [LANGUAGE.FR]: "Affichage",
  },
  SEARCH_ACTIVE: {
    [LANGUAGE.EN]: "Active",
    [LANGUAGE.ES]: "Activo",
    [LANGUAGE.FR]: "Actifs",
  },
  SEARCH_PAST: {
    [LANGUAGE.EN]: "Past",
    [LANGUAGE.ES]: "Pasado",
    [LANGUAGE.FR]: "Passés",
  },
  SEARCH_ANY_SPORT: {
    [LANGUAGE.EN]: "Any Sport",
    [LANGUAGE.ES]: "Cualquier deporte",
    [LANGUAGE.FR]: "Tous",
  },
  SEARCH_ANYWHERE: {
    [LANGUAGE.EN]: "Anywhere",
    [LANGUAGE.ES]: "En cualquier lugar",
    [LANGUAGE.FR]: "N'importe où",
  },

  // View: Community
  COMMUNITY_PAGE_TITLE: {
    [LANGUAGE.EN]: "Community",
    [LANGUAGE.ES]: "Comunidad",
    [LANGUAGE.FR]: "Communauté",
  },

  // View: Admin
  ADMIN_PAGE_TITLE: {
    [LANGUAGE.EN]: "Admin",
    [LANGUAGE.ES]: "Administrador",
    [LANGUAGE.FR]: "Administration",
  },

  // View: Account
  ACCOUNT_PAGE_TITLE: {
    [LANGUAGE.EN]: "My Account",
    [LANGUAGE.ES]: "Mi cuenta",
    [LANGUAGE.FR]: "Mon compte",
  },
};
