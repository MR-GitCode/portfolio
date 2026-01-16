import { StickerVariant } from "../shared/sticker-circle/sticker-circle.component";
import { Language } from "./language.service";

export const STICKER_TEXTS: Record<Language, Record<StickerVariant, { top: string; bottom: string }>> = {
  de: {
    logo: {
      top: '- Michael Ring - Frontend Entwickler -',
      bottom: 'Michael Ring - Frontend Entickler',
    },
    feature: {
      top: 'Featured Projekt',
      bottom: 'Teste alle Details',
    },
  },
  en: {
    logo: {
      top: '- Michael Ring - Frontend Developer -',
      bottom: 'Michael Ring - Frontend Developer',
    },
    feature: {
      top: 'Featured Project',
      bottom: 'Check all details',
    },
  },
};