import { LANGUAGE } from "../languages";
import { TRANSLATION_MAP } from "../types";

export const T: Record<string, TRANSLATION_MAP> = {
  // General Terms
  GENERAL_TOURNAMENT: {
    [LANGUAGE.EN]: "Tournament",
    [LANGUAGE.ES]: "Torneo",
  },
  GENERAL_LEAGUE: {
    [LANGUAGE.EN]: "League",
    [LANGUAGE.ES]: "Liga",
  },
  GENERAL_ANY_SPORT: {
    [LANGUAGE.EN]: "Any Sport",
  },
  GENERAL_ANYWHERE: {
    [LANGUAGE.EN]: "Anywhere",
  },
  GENERAL_TABLE_TENNIS: {
    [LANGUAGE.EN]: "Table Tennis",
    [LANGUAGE.ES]: "Tenis de Mesa",
    [LANGUAGE.FR]: "Tenis de Table",
  },
  GENERAL_PLAYERS: {
    [LANGUAGE.EN]: "Players",
    [LANGUAGE.ES]: "Jugadores",
  },
  GENERAL_DRAWS: {
    [LANGUAGE.EN]: "Draws",
  },
  GENERAL_MATCHES: {
    [LANGUAGE.EN]: "Matches",
    [LANGUAGE.ES]: "Partidos",
  },
  GENERAL_TEAMS: {
    [LANGUAGE.EN]: "Teams",
    [LANGUAGE.ES]: "Equipos",
  },

  // STADIUM-specific
  STADIUM_TAGLINE: {
    [LANGUAGE.EN]: "For Competition",
    [LANGUAGE.ES]: "Para competir",
  },

  // View: Search
  SEARCH_HEADER_GENERIC: {
    [LANGUAGE.EN]: "Find your competition.",
    [LANGUAGE.ES]: "Encuentra tu competencia.",
  },
  SEARCH_CTA_CREATE: {
    [LANGUAGE.EN]: "or, create your own",
  },
  SEARCH_VIEWING: {
    [LANGUAGE.EN]: "Viewing",
  },
  SEARCH_ACTIVE: {
    [LANGUAGE.EN]: "Active",
  },
  SEARCH_PAST: {
    [LANGUAGE.EN]: "Past",
  },

  // View: Tournament
  TOURNAMENT_OVERVIEW: {
    [LANGUAGE.EN]: "Overview",
  },
};
