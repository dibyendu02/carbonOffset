// TypeScript type definitions for Carbon Offset Calculator

export type CategoryType =
  | 'electric'
  | 'animals'
  | 'heat'
  | 'vehicle'
  | 'air'
  | 'rail'
  | 'shipping';

export interface CategoryData {
  id: CategoryType;
  label: string;
  icon?: string;
}

// Form state structure for all 7 categories
// Using strings for form inputs (converted to numbers in calculations)
export interface CarbonFormState {
  electric: {
    annualKwh: string;
  };
  animals: {
    cows: string;
    pigs: string;
    chickens: string;
    sheep: string;
  };
  heat: {
    naturalGasKwh: string;
    oilKwh: string;
    propaneKwh: string;
    woodKwh: string;
  };
  vehicle: {
    gasolineMiles: string;
    dieselMiles: string;
    hybridMiles: string;
    evMiles: string;
  };
  air: {
    shortHaulMiles: string;
    mediumHaulMiles: string;
    longHaulMiles: string;
  };
  rail: {
    commuterMiles: string;
    regionalMiles: string;
    highSpeedMiles: string;
  };
  shipping: {
    containerTonMiles: string;
    bulkTonMiles: string;
    tankerTonMiles: string;
  };
}

// Category metadata for UI display
export const CATEGORY_LABELS: Record<CategoryType, string> = {
  electric: 'Electricity',
  animals: 'Animals',
  heat: 'Heat',
  vehicle: 'Vehicle',
  air: 'Air Travel',
  rail: 'Rail',
  shipping: 'Shipping',
};

// Initial empty form state
export const INITIAL_FORM_STATE: CarbonFormState = {
  electric: {
    annualKwh: '',
  },
  animals: {
    cows: '',
    pigs: '',
    chickens: '',
    sheep: '',
  },
  heat: {
    naturalGasKwh: '',
    oilKwh: '',
    propaneKwh: '',
    woodKwh: '',
  },
  vehicle: {
    gasolineMiles: '',
    dieselMiles: '',
    hybridMiles: '',
    evMiles: '',
  },
  air: {
    shortHaulMiles: '',
    mediumHaulMiles: '',
    longHaulMiles: '',
  },
  rail: {
    commuterMiles: '',
    regionalMiles: '',
    highSpeedMiles: '',
  },
  shipping: {
    containerTonMiles: '',
    bulkTonMiles: '',
    tankerTonMiles: '',
  },
};
